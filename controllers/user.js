import { storage } from "../storage.js";
import { insertAddressSchema } from "../../shared/schema.js";

export const userController = {
  async getProfile(req, res) {
    try {
      const user = req.user;
      
      res.json({
        success: true,
        data: {
          user: {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
            avatar: user.avatar,
            phone: user.phone,
            emailVerified: user.emailVerified,
            createdAt: user.createdAt,
          },
        },
      });
    } catch (error) {
      console.error("Get profile error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "GET_PROFILE_FAILED",
          message: "Failed to get user profile",
        },
      });
    }
  },

  async updateProfile(req, res) {
    try {
      const userId = req.user.id;
      const { firstName, lastName, phone, avatar } = req.body;
      
      const updatedUser = await storage.updateUser(userId, {
        firstName,
        lastName,
        phone,
        avatar,
      });

      if (!updatedUser) {
        return res.status(404).json({
          success: false,
          error: {
            code: "USER_NOT_FOUND",
            message: "User not found",
          },
        });
      }

      res.json({
        success: true,
        message: "Profile updated successfully",
        data: {
          user: {
            id: updatedUser.id,
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            email: updatedUser.email,
            role: updatedUser.role,
            avatar: updatedUser.avatar,
            phone: updatedUser.phone,
            emailVerified: updatedUser.emailVerified,
          },
        },
      });
    } catch (error) {
      console.error("Update profile error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "UPDATE_PROFILE_FAILED",
          message: "Failed to update profile",
        },
      });
    }
  },

  async getOrders(req, res) {
    try {
      const userId = req.user.id;
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      
      const { orders, total } = await storage.getUserOrders(userId, page, limit);
      
      res.json({
        success: true,
        data: {
          orders,
          pagination: {
            page,
            limit,
            total,
            pages: Math.ceil(total / limit),
          },
        },
      });
    } catch (error) {
      console.error("Get orders error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "GET_ORDERS_FAILED",
          message: "Failed to get user orders",
        },
      });
    }
  },

  async getWishlist(req, res) {
    try {
      const userId = req.user.id;
      
      const wishlistItems = await storage.getUserWishlist(userId);
      
      // Get product details for each wishlist item
      const wishlistWithProducts = await Promise.all(
        wishlistItems.map(async (item) => {
          const product = await storage.getProduct(item.productId);
          return {
            id: item.id,
            productId: item.productId,
            product,
            createdAt: item.createdAt,
          };
        })
      );
      
      res.json({
        success: true,
        data: {
          wishlist: wishlistWithProducts,
        },
      });
    } catch (error) {
      console.error("Get wishlist error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "GET_WISHLIST_FAILED",
          message: "Failed to get wishlist",
        },
      });
    }
  },

  async addAddress(req, res) {
    try {
      const userId = req.user.id;
      const validatedData = insertAddressSchema.parse(req.body);
      
      const address = await storage.createAddress({
        ...validatedData,
        userId,
      });
      
      res.status(201).json({
        success: true,
        message: "Address added successfully",
        data: {
          address,
        },
      });
    } catch (error) {
      console.error("Add address error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "ADD_ADDRESS_FAILED",
          message: "Failed to add address",
        },
      });
    }
  },

  async updateAddress(req, res) {
    try {
      const userId = req.user.id;
      const addressId = parseInt(req.params.id);
      
      // Check if address belongs to user
      const existingAddress = await storage.getAddress(addressId);
      if (!existingAddress || existingAddress.userId !== userId) {
        return res.status(404).json({
          success: false,
          error: {
            code: "ADDRESS_NOT_FOUND",
            message: "Address not found",
          },
        });
      }
      
      const updatedAddress = await storage.updateAddress(addressId, req.body);
      
      res.json({
        success: true,
        message: "Address updated successfully",
        data: {
          address: updatedAddress,
        },
      });
    } catch (error) {
      console.error("Update address error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "UPDATE_ADDRESS_FAILED",
          message: "Failed to update address",
        },
      });
    }
  },

  async deleteAddress(req, res) {
    try {
      const userId = req.user.id;
      const addressId = parseInt(req.params.id);
      
      // Check if address belongs to user
      const existingAddress = await storage.getAddress(addressId);
      if (!existingAddress || existingAddress.userId !== userId) {
        return res.status(404).json({
          success: false,
          error: {
            code: "ADDRESS_NOT_FOUND",
            message: "Address not found",
          },
        });
      }
      
      const deleted = await storage.deleteAddress(addressId);
      
      if (!deleted) {
        return res.status(404).json({
          success: false,
          error: {
            code: "ADDRESS_NOT_FOUND",
            message: "Address not found",
          },
        });
      }
      
      res.json({
        success: true,
        message: "Address deleted successfully",
      });
    } catch (error) {
      console.error("Delete address error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "DELETE_ADDRESS_FAILED",
          message: "Failed to delete address",
        },
      });
    }
  },
};
