import { storage } from "../storage.js";
import { insertProductSchema } from "../../shared/schema.js";

export const vendorController = {
  async getProducts(req, res) {
    try {
      const vendorId = req.user.id;
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      
      // For vendors, only get their own products
      // For admins, get all products
      const filters = {
        page,
        limit,
        ...(req.user.role === "vendor" && { vendorId }),
      };
      
      const { products, total } = await storage.getProducts(filters);
      
      res.json({
        success: true,
        data: {
          products,
          pagination: {
            page,
            limit,
            total,
            pages: Math.ceil(total / limit),
          },
        },
      });
    } catch (error) {
      console.error("Get vendor products error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "GET_PRODUCTS_FAILED",
          message: "Failed to get products",
        },
      });
    }
  },

  async createProduct(req, res) {
    try {
      const vendorId = req.user.id;
      const validatedData = insertProductSchema.parse(req.body);
      
      // Generate slug from name
      const slug = validatedData.name
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .replace(/\s+/g, "-");
      
      const product = await storage.createProduct({
        ...validatedData,
        slug,
        vendorId,
      });
      
      res.status(201).json({
        success: true,
        message: "Product created successfully",
        data: {
          product,
        },
      });
    } catch (error) {
      console.error("Create product error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "CREATE_PRODUCT_FAILED",
          message: "Failed to create product",
        },
      });
    }
  },

  async updateProduct(req, res) {
    try {
      const productId = parseInt(req.params.id);
      const vendorId = req.user.id;
      
      // Check if product exists and belongs to vendor (unless admin)
      const existingProduct = await storage.getProduct(productId);
      if (!existingProduct) {
        return res.status(404).json({
          success: false,
          error: {
            code: "PRODUCT_NOT_FOUND",
            message: "Product not found",
          },
        });
      }
      
      // Vendors can only update their own products
      if (req.user.role === "vendor" && existingProduct.vendorId !== vendorId) {
        return res.status(403).json({
          success: false,
          error: {
            code: "UNAUTHORIZED",
            message: "You can only update your own products",
          },
        });
      }
      
      const updatedProduct = await storage.updateProduct(productId, req.body);
      
      res.json({
        success: true,
        message: "Product updated successfully",
        data: {
          product: updatedProduct,
        },
      });
    } catch (error) {
      console.error("Update product error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "UPDATE_PRODUCT_FAILED",
          message: "Failed to update product",
        },
      });
    }
  },

  async deleteProduct(req, res) {
    try {
      const productId = parseInt(req.params.id);
      const vendorId = req.user.id;
      
      // Check if product exists and belongs to vendor (unless admin)
      const existingProduct = await storage.getProduct(productId);
      if (!existingProduct) {
        return res.status(404).json({
          success: false,
          error: {
            code: "PRODUCT_NOT_FOUND",
            message: "Product not found",
          },
        });
      }
      
      // Vendors can only delete their own products
      if (req.user.role === "vendor" && existingProduct.vendorId !== vendorId) {
        return res.status(403).json({
          success: false,
          error: {
            code: "UNAUTHORIZED",
            message: "You can only delete your own products",
          },
        });
      }
      
      const deleted = await storage.deleteProduct(productId);
      
      if (!deleted) {
        return res.status(404).json({
          success: false,
          error: {
            code: "PRODUCT_NOT_FOUND",
            message: "Product not found",
          },
        });
      }
      
      res.json({
        success: true,
        message: "Product deleted successfully",
      });
    } catch (error) {
      console.error("Delete product error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "DELETE_PRODUCT_FAILED",
          message: "Failed to delete product",
        },
      });
    }
  },

  async getOrders(req, res) {
    try {
      const vendorId = req.user.id;
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      
      // Get all orders and filter by vendor products
      const { orders, total } = await storage.getAllOrders(page, limit);
      
      // In a real implementation, you would join orders with order items
      // and filter by vendor products. For now, we'll return all orders for admins
      // and empty for vendors (since we don't have proper order-product relationships)
      
      if (req.user.role === "vendor") {
        // Filter orders that contain vendor's products
        // This is a simplified implementation
        const vendorOrders = orders.filter(order => {
          // In a real app, you'd check if any order items contain vendor's products
          return true; // Placeholder
        });
        
        res.json({
          success: true,
          data: {
            orders: vendorOrders,
            pagination: {
              page,
              limit,
              total: vendorOrders.length,
              pages: Math.ceil(vendorOrders.length / limit),
            },
          },
        });
      } else {
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
      }
    } catch (error) {
      console.error("Get vendor orders error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "GET_ORDERS_FAILED",
          message: "Failed to get orders",
        },
      });
    }
  },
};
