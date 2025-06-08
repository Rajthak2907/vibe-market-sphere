import { storage } from "../storage.js";
import { insertCategorySchema } from "../../shared/schema.js";

export const categoryController = {
  async getCategories(req, res) {
    try {
      const categories = await storage.getAllCategories();
      
      res.json({
        success: true,
        data: {
          categories,
        },
      });
    } catch (error) {
      console.error("Get categories error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "GET_CATEGORIES_FAILED",
          message: "Failed to get categories",
        },
      });
    }
  },

  async getCategoryProducts(req, res) {
    try {
      const categoryId = parseInt(req.params.id);
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      
      const category = await storage.getCategory(categoryId);
      if (!category) {
        return res.status(404).json({
          success: false,
          error: {
            code: "CATEGORY_NOT_FOUND",
            message: "Category not found",
          },
        });
      }
      
      const { products, total } = await storage.getProductsByCategory(categoryId, page, limit);
      
      res.json({
        success: true,
        data: {
          category,
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
      console.error("Get category products error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "GET_CATEGORY_PRODUCTS_FAILED",
          message: "Failed to get category products",
        },
      });
    }
  },

  async createCategory(req, res) {
    try {
      const validatedData = insertCategorySchema.parse(req.body);
      
      // Generate slug from name
      const slug = validatedData.name
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .replace(/\s+/g, "-");
      
      // Check if slug already exists
      const existingCategory = await storage.getCategoryBySlug(slug);
      if (existingCategory) {
        return res.status(400).json({
          success: false,
          error: {
            code: "SLUG_EXISTS",
            message: "A category with this name already exists",
          },
        });
      }
      
      const category = await storage.createCategory({
        ...validatedData,
        slug,
      });
      
      res.status(201).json({
        success: true,
        message: "Category created successfully",
        data: {
          category,
        },
      });
    } catch (error) {
      console.error("Create category error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "CREATE_CATEGORY_FAILED",
          message: "Failed to create category",
        },
      });
    }
  },

  async updateCategory(req, res) {
    try {
      const categoryId = parseInt(req.params.id);
      
      const existingCategory = await storage.getCategory(categoryId);
      if (!existingCategory) {
        return res.status(404).json({
          success: false,
          error: {
            code: "CATEGORY_NOT_FOUND",
            message: "Category not found",
          },
        });
      }
      
      let updateData = req.body;
      
      // If name is being updated, regenerate slug
      if (updateData.name && updateData.name !== existingCategory.name) {
        const newSlug = updateData.name
          .toLowerCase()
          .replace(/[^a-z0-9\s]/g, "")
          .replace(/\s+/g, "-");
        
        // Check if new slug already exists
        const existingSlugCategory = await storage.getCategoryBySlug(newSlug);
        if (existingSlugCategory && existingSlugCategory.id !== categoryId) {
          return res.status(400).json({
            success: false,
            error: {
              code: "SLUG_EXISTS",
              message: "A category with this name already exists",
            },
          });
        }
        
        updateData.slug = newSlug;
      }
      
      const updatedCategory = await storage.updateCategory(categoryId, updateData);
      
      res.json({
        success: true,
        message: "Category updated successfully",
        data: {
          category: updatedCategory,
        },
      });
    } catch (error) {
      console.error("Update category error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "UPDATE_CATEGORY_FAILED",
          message: "Failed to update category",
        },
      });
    }
  },

  async deleteCategory(req, res) {
    try {
      const categoryId = parseInt(req.params.id);
      
      const existingCategory = await storage.getCategory(categoryId);
      if (!existingCategory) {
        return res.status(404).json({
          success: false,
          error: {
            code: "CATEGORY_NOT_FOUND",
            message: "Category not found",
          },
        });
      }
      
      // Check if category has products
      const { products } = await storage.getProductsByCategory(categoryId, 1, 1);
      if (products.length > 0) {
        return res.status(400).json({
          success: false,
          error: {
            code: "CATEGORY_HAS_PRODUCTS",
            message: "Cannot delete category that has products",
          },
        });
      }
      
      const deleted = await storage.deleteCategory(categoryId);
      
      if (!deleted) {
        return res.status(404).json({
          success: false,
          error: {
            code: "CATEGORY_NOT_FOUND",
            message: "Category not found",
          },
        });
      }
      
      res.json({
        success: true,
        message: "Category deleted successfully",
      });
    } catch (error) {
      console.error("Delete category error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "DELETE_CATEGORY_FAILED",
          message: "Failed to delete category",
        },
      });
    }
  },
};
