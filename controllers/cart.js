import { storage } from "../storage.js";
import { insertCartSchema } from "../../shared/schema.js";

export const cartController = {
  async getCart(req, res) {
    try {
      const userId = req.user.id;
      
      const cartItems = await storage.getUserCart(userId);
      
      // Get product details for each cart item
      const cartWithProducts = await Promise.all(
        cartItems.map(async (item) => {
          const product = await storage.getProduct(item.productId);
          return {
            id: item.id,
            productId: item.productId,
            quantity: item.quantity,
            product,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
          };
        })
      );
      
      // Calculate cart totals
      const subtotal = cartWithProducts.reduce((total, item) => {
        if (item.product) {
          return total + (parseFloat(item.product.price) * item.quantity);
        }
        return total;
      }, 0);
      
      const tax = subtotal * 0.08; // 8% tax
      const shipping = subtotal > 100 ? 0 : 10; // Free shipping over $100
      const total = subtotal + tax + shipping;
      
      res.json({
        success: true,
        data: {
          cart: {
            items: cartWithProducts,
            summary: {
              subtotal: subtotal.toFixed(2),
              tax: tax.toFixed(2),
              shipping: shipping.toFixed(2),
              total: total.toFixed(2),
              itemCount: cartItems.length,
              totalQuantity: cartItems.reduce((sum, item) => sum + item.quantity, 0),
            },
          },
        },
      });
    } catch (error) {
      console.error("Get cart error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "GET_CART_FAILED",
          message: "Failed to get cart",
        },
      });
    }
  },

  async addToCart(req, res) {
    try {
      const userId = req.user.id;
      const { productId, quantity = 1 } = req.body;
      
      if (!productId || quantity <= 0) {
        return res.status(400).json({
          success: false,
          error: {
            code: "INVALID_INPUT",
            message: "Product ID and valid quantity are required",
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
        
        // Check total quantity against inventory
        if (product.inventory < newQuantity) {
          return res.status(400).json({
            success: false,
            error: {
              code: "INSUFFICIENT_INVENTORY",
              message: `Only ${product.inventory} items available`,
            },
          });
        }
        
        const updatedCartItem = await storage.updateCartItem(existingCartItem.id, {
          quantity: newQuantity,
        });
        
        res.json({
          success: true,
          message: "Cart item updated successfully",
          data: {
            cartItem: updatedCartItem,
          },
        });
      } else {
        // Add new cart item
        const cartItem = await storage.addToCart({
          userId,
          productId,
          quantity,
        });
        
        res.status(201).json({
          success: true,
          message: "Item added to cart successfully",
          data: {
            cartItem,
          },
        });
      }
    } catch (error) {
      console.error("Add to cart error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "ADD_TO_CART_FAILED",
          message: "Failed to add item to cart",
        },
      });
    }
  },

  async updateCartItem(req, res) {
    try {
      const userId = req.user.id;
      const { cartItemId, quantity } = req.body;
      
      if (!cartItemId || quantity <= 0) {
        return res.status(400).json({
          success: false,
          error: {
            code: "INVALID_INPUT",
            message: "Cart item ID and valid quantity are required",
          },
        });
      }
      
      // Get cart item and verify ownership
      const cartItems = await storage.getUserCart(userId);
      const cartItem = cartItems.find(item => item.id === cartItemId);
      
      if (!cartItem) {
        return res.status(404).json({
          success: false,
          error: {
            code: "CART_ITEM_NOT_FOUND",
            message: "Cart item not found",
          },
        });
      }
      
      // Check product availability and inventory
      const product = await storage.getProduct(cartItem.productId);
      if (!product || !product.isActive) {
        return res.status(400).json({
          success: false,
          error: {
            code: "PRODUCT_UNAVAILABLE",
            message: "Product is no longer available",
          },
        });
      }
      
      if (product.inventory < quantity) {
        return res.status(400).json({
          success: false,
          error: {
            code: "INSUFFICIENT_INVENTORY",
            message: `Only ${product.inventory} items available`,
          },
        });
      }
      
      const updatedCartItem = await storage.updateCartItem(cartItemId, {
        quantity,
      });
      
      res.json({
        success: true,
        message: "Cart item updated successfully",
        data: {
          cartItem: updatedCartItem,
        },
      });
    } catch (error) {
      console.error("Update cart item error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "UPDATE_CART_ITEM_FAILED",
          message: "Failed to update cart item",
        },
      });
    }
  },

  async removeFromCart(req, res) {
    try {
      const userId = req.user.id;
      const { cartItemId } = req.body;
      
      if (!cartItemId) {
        return res.status(400).json({
          success: false,
          error: {
            code: "INVALID_INPUT",
            message: "Cart item ID is required",
          },
        });
      }
      
      // Verify cart item belongs to user
      const cartItems = await storage.getUserCart(userId);
      const cartItem = cartItems.find(item => item.id === cartItemId);
      
      if (!cartItem) {
        return res.status(404).json({
          success: false,
          error: {
            code: "CART_ITEM_NOT_FOUND",
            message: "Cart item not found",
          },
        });
      }
      
      const removed = await storage.removeFromCart(cartItemId);
      
      if (!removed) {
        return res.status(404).json({
          success: false,
          error: {
            code: "CART_ITEM_NOT_FOUND",
            message: "Cart item not found",
          },
        });
      }
      
      res.json({
        success: true,
        message: "Item removed from cart successfully",
      });
    } catch (error) {
      console.error("Remove from cart error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "REMOVE_FROM_CART_FAILED",
          message: "Failed to remove item from cart",
        },
      });
    }
  },

  async clearCart(req, res) {
    try {
      const userId = req.user.id;
      
      const cleared = await storage.clearUserCart(userId);
      
      if (!cleared) {
        return res.status(500).json({
          success: false,
          error: {
            code: "CLEAR_CART_FAILED",
            message: "Failed to clear cart",
          },
        });
      }
      
      res.json({
        success: true,
        message: "Cart cleared successfully",
      });
    } catch (error) {
      console.error("Clear cart error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "CLEAR_CART_FAILED",
          message: "Failed to clear cart",
        },
      });
    }
  },
};
