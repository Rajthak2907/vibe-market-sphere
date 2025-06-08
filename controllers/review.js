import { storage } from "../storage.js";
import { insertReviewSchema } from "../../shared/schema.js";

export const reviewController = {
  async getProductReviews(req, res) {
    try {
      const productId = parseInt(req.params.id);
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const sortBy = req.query.sort || "newest"; // newest, oldest, rating_high, rating_low
      
      // Check if product exists
      const product = await storage.getProduct(productId);
      if (!product) {
        return res.status(404).json({
          success: false,
          error: {
            code: "PRODUCT_NOT_FOUND",
            message: "Product not found",
          },
        });
      }
      
      const { reviews, total } = await storage.getProductReviews(productId, page, limit);
      
      // Get user details for each review
      const reviewsWithUsers = await Promise.all(
        reviews.map(async (review) => {
          const user = await storage.getUser(review.userId);
          return {
            ...review,
            user: user ? {
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              avatar: user.avatar,
            } : null,
          };
        })
      );
      
      // Sort reviews
      reviewsWithUsers.sort((a, b) => {
        switch (sortBy) {
          case "oldest":
            return new Date(a.createdAt) - new Date(b.createdAt);
          case "rating_high":
            return b.rating - a.rating;
          case "rating_low":
            return a.rating - b.rating;
          case "newest":
          default:
            return new Date(b.createdAt) - new Date(a.createdAt);
        }
      });
      
      // Calculate review statistics
      const ratings = reviews.map(r => r.rating);
      const averageRating = ratings.length > 0 ? ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length : 0;
      
      const ratingDistribution = {
        5: ratings.filter(r => r === 5).length,
        4: ratings.filter(r => r === 4).length,
        3: ratings.filter(r => r === 3).length,
        2: ratings.filter(r => r === 2).length,
        1: ratings.filter(r => r === 1).length,
      };
      
      res.json({
        success: true,
        data: {
          reviews: reviewsWithUsers,
          pagination: {
            page,
            limit,
            total,
            pages: Math.ceil(total / limit),
          },
          statistics: {
            totalReviews: total,
            averageRating: Math.round(averageRating * 10) / 10,
            ratingDistribution,
          },
        },
      });
    } catch (error) {
      console.error("Get product reviews error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "GET_REVIEWS_FAILED",
          message: "Failed to get product reviews",
        },
      });
    }
  },

  async createReview(req, res) {
    try {
      const userId = req.user.id;
      const productId = parseInt(req.params.id);
      const validatedData = insertReviewSchema.parse(req.body);
      
      // Check if product exists
      const product = await storage.getProduct(productId);
      if (!product) {
        return res.status(404).json({
          success: false,
          error: {
            code: "PRODUCT_NOT_FOUND",
            message: "Product not found",
          },
        });
      }
      
      // Check if user has already reviewed this product
      const userReviews = await storage.getUserReviews(userId);
      const existingReview = userReviews.find(review => review.productId === productId);
      
      if (existingReview) {
        return res.status(400).json({
          success: false,
          error: {
            code: "REVIEW_ALREADY_EXISTS",
            message: "You have already reviewed this product",
          },
        });
      }
      
      // Validate rating
      if (validatedData.rating < 1 || validatedData.rating > 5) {
        return res.status(400).json({
          success: false,
          error: {
            code: "INVALID_RATING",
            message: "Rating must be between 1 and 5",
          },
        });
      }
      
      // Check if user has purchased this product (optional verification)
      // This would require checking order history
      const userOrders = await storage.getUserOrders(userId);
      let hasPurchased = false;
      
      for (const order of userOrders.orders) {
        if (order.status === "delivered") {
          const orderItems = await storage.getOrderItems(order.id);
          if (orderItems.some(item => item.productId === productId)) {
            hasPurchased = true;
            break;
          }
        }
      }
      
      const review = await storage.createReview({
        userId,
        productId,
        rating: validatedData.rating,
        title: validatedData.title,
        comment: validatedData.comment,
        images: validatedData.images,
        isVerified: hasPurchased,
      });
      
      // Get user details for response
      const user = await storage.getUser(userId);
      
      res.status(201).json({
        success: true,
        message: "Review created successfully",
        data: {
          review: {
            ...review,
            user: user ? {
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              avatar: user.avatar,
            } : null,
          },
        },
      });
    } catch (error) {
      console.error("Create review error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "CREATE_REVIEW_FAILED",
          message: "Failed to create review",
        },
      });
    }
  },

  async updateReview(req, res) {
    try {
      const reviewId = parseInt(req.params.id);
      const userId = req.user.id;
      
      const existingReview = await storage.getReview(reviewId);
      
      if (!existingReview) {
        return res.status(404).json({
          success: false,
          error: {
            code: "REVIEW_NOT_FOUND",
            message: "Review not found",
          },
        });
      }
      
      // Check if user owns the review
      if (existingReview.userId !== userId) {
        return res.status(403).json({
          success: false,
          error: {
            code: "UNAUTHORIZED",
            message: "You can only update your own reviews",
          },
        });
      }
      
      // Validate rating if provided
      if (req.body.rating && (req.body.rating < 1 || req.body.rating > 5)) {
        return res.status(400).json({
          success: false,
          error: {
            code: "INVALID_RATING",
            message: "Rating must be between 1 and 5",
          },
        });
      }
      
      const updatedReview = await storage.updateReview(reviewId, req.body);
      
      // Get user details for response
      const user = await storage.getUser(userId);
      
      res.json({
        success: true,
        message: "Review updated successfully",
        data: {
          review: {
            ...updatedReview,
            user: user ? {
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              avatar: user.avatar,
            } : null,
          },
        },
      });
    } catch (error) {
      console.error("Update review error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "UPDATE_REVIEW_FAILED",
          message: "Failed to update review",
        },
      });
    }
  },

  async deleteReview(req, res) {
    try {
      const reviewId = parseInt(req.params.id);
      const userId = req.user.id;
      
      const existingReview = await storage.getReview(reviewId);
      
      if (!existingReview) {
        return res.status(404).json({
          success: false,
          error: {
            code: "REVIEW_NOT_FOUND",
            message: "Review not found",
          },
        });
      }
      
      // Check if user owns the review or is admin
      if (existingReview.userId !== userId && req.user.role !== "admin") {
        return res.status(403).json({
          success: false,
          error: {
            code: "UNAUTHORIZED",
            message: "You can only delete your own reviews",
          },
        });
      }
      
      const deleted = await storage.deleteReview(reviewId);
      
      if (!deleted) {
        return res.status(404).json({
          success: false,
          error: {
            code: "REVIEW_NOT_FOUND",
            message: "Review not found",
          },
        });
      }
      
      res.json({
        success: true,
        message: "Review deleted successfully",
      });
    } catch (error) {
      console.error("Delete review error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "DELETE_REVIEW_FAILED",
          message: "Failed to delete review",
        },
      });
    }
  },

  async markHelpful(req, res) {
    try {
      const reviewId = parseInt(req.params.id);
      
      const existingReview = await storage.getReview(reviewId);
      
      if (!existingReview) {
        return res.status(404).json({
          success: false,
          error: {
            code: "REVIEW_NOT_FOUND",
            message: "Review not found",
          },
        });
      }
      
      const updatedReview = await storage.updateReview(reviewId, {
        helpfulCount: existingReview.helpfulCount + 1,
      });
      
      res.json({
        success: true,
        message: "Review marked as helpful",
        data: {
          review: updatedReview,
        },
      });
    } catch (error) {
      console.error("Mark review helpful error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "MARK_HELPFUL_FAILED",
          message: "Failed to mark review as helpful",
        },
      });
    }
  },
};
