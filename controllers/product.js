import { storage } from "../storage.js";
import { insertProductSchema } from "../../shared/schema.js";

export const productController = {
  async getProducts(req, res) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const categoryId = req.query.category ? parseInt(req.query.category) : undefined;
      const brandId = req.query.brand ? parseInt(req.query.brand) : undefined;
      const minPrice = req.query.min_price ? parseFloat(req.query.min_price) : undefined;
      const maxPrice = req.query.max_price ? parseFloat(req.query.max_price) : undefined;
      const search = req.query.search;
      const sort = req.query.sort;
      
      const filters = {
        page,
        limit,
        categoryId,
        brandId,
        minPrice,
        maxPrice,
        search,
        sort,
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
      console.error("Get products error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "GET_PRODUCTS_FAILED",
          message: "Failed to get products",
        },
      });
    }
  },

  async getProduct(req, res) {
    try {
      const productId = parseInt(req.params.id);
      
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
      
      // Get category and brand details
      let category = null;
      let brand = null;
      
      if (product.categoryId) {
        category = await storage.getCategory(product.categoryId);
      }
      
      if (product.brandId) {
        brand = await storage.getBrand(product.brandId);
      }
      
      res.json({
        success: true,
        data: {
          product: {
            ...product,
            category,
            brand,
          },
        },
      });
    } catch (error) {
      console.error("Get product error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "GET_PRODUCT_FAILED",
          message: "Failed to get product",
        },
      });
    }
  },

  async getFeaturedProducts(req, res) {
    try {
      const limit = parseInt(req.query.limit) || 10;
      
      const { products } = await storage.getProducts({
        limit,
        isFeatured: true,
      });
      
      res.json({
        success: true,
        data: {
          products,
        },
      });
    } catch (error) {
      console.error("Get featured products error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "GET_FEATURED_PRODUCTS_FAILED",
          message: "Failed to get featured products",
        },
      });
    }
  },

  async getTrendingProducts(req, res) {
    try {
      const limit = parseInt(req.query.limit) || 10;
      
      // For trending products, we'll get the newest products
      const { products } = await storage.getProducts({
        limit,
        sort: "newest",
      });
      
      res.json({
        success: true,
        data: {
          products,
        },
      });
    } catch (error) {
      console.error("Get trending products error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "GET_TRENDING_PRODUCTS_FAILED",
          message: "Failed to get trending products",
        },
      });
    }
  },

  async createProduct(req, res) {
    try {
      const validatedData = insertProductSchema.parse(req.body);
      
      // Generate slug from name
      const slug = validatedData.name
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .replace(/\s+/g, "-");
      
      const product = await storage.createProduct({
        ...validatedData,
        slug,
        vendorId: req.user.role === "vendor" ? req.user.id : validatedData.vendorId,
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
      
      // Check permissions
      if (req.user.role === "vendor" && existingProduct.vendorId !== req.user.id) {
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
      
      // Check permissions
      if (req.user.role === "vendor" && existingProduct.vendorId !== req.user.id) {
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

  async uploadImages(req, res) {
    try {
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({
          success: false,
          error: {
            code: "NO_FILES_UPLOADED",
            message: "No files were uploaded",
          },
        });
      }
      
      const productId = parseInt(req.params.id);
      
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
      
      // Check permissions
      if (req.user.role === "vendor" && existingProduct.vendorId !== req.user.id) {
        return res.status(403).json({
          success: false,
          error: {
            code: "UNAUTHORIZED",
            message: "You can only upload images for your own products",
          },
        });
      }
      
      // Generate image URLs
      const imageUrls = req.files.map(file => `/uploads/${file.filename}`);
      
      // Update product with new images
      const currentImages = existingProduct.images || [];
      const updatedImages = [...currentImages, ...imageUrls];
      
      const updatedProduct = await storage.updateProduct(productId, {
        images: updatedImages,
      });
      
      res.json({
        success: true,
        message: "Images uploaded successfully",
        data: {
          images: imageUrls,
          product: updatedProduct,
        },
      });
    } catch (error) {
      console.error("Upload images error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "UPLOAD_IMAGES_FAILED",
          message: "Failed to upload images",
        },
      });
    }
  },
};
