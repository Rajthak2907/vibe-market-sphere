import { storage } from "../storage.js";
import { insertWishlistSchema } from "../../shared/schema.js";

export const wishlistController = {
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
      
      // Filter out items where products no longer exist
      const validWishlistItems = wishlistWithProducts.filter(item => item.product);
      
      res.json({
        success: true,
        data: {
          wishlist: validWishlistItems,
          count: validWishlistItems.length,
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

  async addToWishlist(req, res) {
    try {
      const userId = req.user.id;
      const { productId } = req.body;
      
      if (!productId) {
        return res.status(400).json({
          success: false,
          error: {
            code: "INVALID_INPUT",
            message: "Product ID is required",
          },
        });
      }
      
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
      
      // Check if product is active
      if (!product.isActive) {
        return res.status(400).json({
          success: false,
          error: {
            code: "PRODUCT_UNAVAILABLE",
            message: "Product is not available",
          },
        });
      }
      
      // Check if item already exists in wishlist
      const existingWishlistItem = await storage.getWishlistItem(userId, productId);
      
      if (existingWishlistItem) {
        return res.status(400).json({
          success: false,
          error: {
            code: "ITEM_ALREADY_IN_WISHLIST",
            message: "Item is already in your wishlist",
          },
        });
      }
      
      // Add to wishlist
      const wishlistItem = await storage.addToWishlist({
        userId,
        productId,
      });
      
      res.status(201).json({
        success: true,
        message: "Item added to wishlist successfully",
        data: {
          wishlistItem: {
            ...wishlistItem,
            product,
          },
        },
      });
    } catch (error) {
      console.error("Add to wishlist error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "ADD_TO_WISHLIST_FAILED",
          message: "Failed to add item to wishlist",
        },
      });
    }
  },

  async removeFromWishlist(req, res) {
    try {
      const userId = req.user.id;
      const { productId } = req.body;
      
      if (!productId) {
        return res.status(400).json({
          success: false,
          error: {
            code: "INVALID_INPUT",
            message: "Product ID is required",
          },
        });
      }
      
      // Find wishlist item
      const wishlistItem = await storage.getWishlistItem(userId, productId);
      
      if (!wishlistItem) {
        return res.status(404).json({
          success: false,
          error: {
            code: "WISHLIST_ITEM_NOT_FOUND",
            message: "Item not found in wishlist",
          },
        });
      }
      
      const removed = await storage.removeFromWishlist(wishlistItem.id);
      
      if (!removed) {
        return res.status(404).json({
          success: false,
          error: {
            code: "WISHLIST_ITEM_NOT_FOUND",
            message: "Item not found in wishlist",
          },
        });
      }
      
      res.json({
        success: true,
        message: "Item removed from wishlist successfully",
      });
    } catch (error) {
      console.error("Remove from wishlist error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "REMOVE_FROM_WISHLIST_FAILED",
          message: "Failed to remove item from wishlist",
        },
      });
    }
  },

  async moveToCart(req, res) {
    try {
      const userId = req.user.id;
      const { productId, quantity = 1 } = req.body;
      
      if (!productId) {
        return res.status(400).json({
          success: false,
          error: {
            code: "INVALID_INPUT",
            message: "Product ID is required",
          },
        });
      }
      
      // Check if item is in wishlist
      const wishlistItem = await storage.getWishlistItem(userId, productId);
      
      if (!wishlistItem) {
        return res.status(404).json({
          success: false,
          error: {
            code: "WISHLIST_ITEM_NOT_FOUND",
            message: "Item not found in wishlist",
          },
        });
      }
      
      // Check product availability
      const product = await storage.getProduct(productId);
      if (!product || !product.isActive) {
        return res.status(400).json({
          success: false,
          error: {
            code: "PRODUCT_UNAVAILABLE",
            message: "Product is not available",
          },
        });
      }
      
      // Check inventory
      if (product.inventory < quantity) {
        return res.status(400).json({
          success: false,
          error: {
            code: "INSUFFICIENT_INVENTORY",
            message: "Insufficient inventory available",
          },
        });
      }
      
      // Check if item already exists in cart
      const existingCartItem = await storage.getCartItem(userId, productId);
      
      if (existingCartItem) {
        // Update existing cart item
        const newQuantity = existingCartItem.quantity + quantity;
        
        if (product.inventory < newQuantity) {
          return res.status(400).json({
            success: false,
            error: {
              code: "INSUFFICIENT_INVENTORY",
              message: `Only ${product.inventory} items available`,
            },
          });
        }
        
        await storage.updateCartItem(existingCartItem.id, {
          quantity: newQuantity,
        });
      } else {
        // Add new cart item
        await storage.addToCart({
          userId,
          productId,
          quantity,
        });
      }
      
      // Remove from wishlist
      await storage.removeFromWishlist(wishlistItem.id);
      
      res.json({
        success: true,
        message: "Item moved to cart successfully",
      });
    } catch (error) {
      console.error("Move to cart error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "MOVE_TO_CART_FAILED",
          message: "Failed to move item to cart",
        },
      });
    }
  },
};
