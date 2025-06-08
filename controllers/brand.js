import { storage } from "../storage.js";
import { insertBrandSchema } from "../../shared/schema.js";

export const brandController = {
  async getBrands(req, res) {
    try {
      const brands = await storage.getAllBrands();
      
      res.json({
        success: true,
        data: {
          brands,
        },
      });
    } catch (error) {
      console.error("Get brands error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "GET_BRANDS_FAILED",
          message: "Failed to get brands",
        },
      });
    }
  },

  async getBrandProducts(req, res) {
    try {
      const brandId = parseInt(req.params.id);
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      
      const brand = await storage.getBrand(brandId);
      if (!brand) {
        return res.status(404).json({
          success: false,
          error: {
            code: "BRAND_NOT_FOUND",
            message: "Brand not found",
          },
        });
      }
      
      const { products, total } = await storage.getProductsByBrand(brandId, page, limit);
      
      res.json({
        success: true,
        data: {
          brand,
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
      console.error("Get brand products error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "GET_BRAND_PRODUCTS_FAILED",
          message: "Failed to get brand products",
        },
      });
    }
  },

  async createBrand(req, res) {
    try {
      const validatedData = insertBrandSchema.parse(req.body);
      
      // Generate slug from name
      const slug = validatedData.name
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .replace(/\s+/g, "-");
      
      // Check if slug already exists
      const existingBrand = await storage.getBrandBySlug(slug);
      if (existingBrand) {
        return res.status(400).json({
          success: false,
          error: {
            code: "SLUG_EXISTS",
            message: "A brand with this name already exists",
          },
        });
      }
      
      const brand = await storage.createBrand({
        ...validatedData,
        slug,
      });
      
      res.status(201).json({
        success: true,
        message: "Brand created successfully",
        data: {
          brand,
        },
      });
    } catch (error) {
      console.error("Create brand error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "CREATE_BRAND_FAILED",
          message: "Failed to create brand",
        },
      });
    }
  },

  async updateBrand(req, res) {
    try {
      const brandId = parseInt(req.params.id);
      
      const existingBrand = await storage.getBrand(brandId);
      if (!existingBrand) {
        return res.status(404).json({
          success: false,
          error: {
            code: "BRAND_NOT_FOUND",
            message: "Brand not found",
          },
        });
      }
      
      let updateData = req.body;
      
      // If name is being updated, regenerate slug
      if (updateData.name && updateData.name !== existingBrand.name) {
        const newSlug = updateData.name
          .toLowerCase()
          .replace(/[^a-z0-9\s]/g, "")
          .replace(/\s+/g, "-");
        
        // Check if new slug already exists
        const existingSlugBrand = await storage.getBrandBySlug(newSlug);
        if (existingSlugBrand && existingSlugBrand.id !== brandId) {
          return res.status(400).json({
            success: false,
            error: {
              code: "SLUG_EXISTS",
              message: "A brand with this name already exists",
            },
          });
        }
        
        updateData.slug = newSlug;
      }
      
      const updatedBrand = await storage.updateBrand(brandId, updateData);
      
      res.json({
        success: true,
        message: "Brand updated successfully",
        data: {
          brand: updatedBrand,
        },
      });
    } catch (error) {
      console.error("Update brand error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "UPDATE_BRAND_FAILED",
          message: "Failed to update brand",
        },
      });
    }
  },

  async deleteBrand(req, res) {
    try {
      const brandId = parseInt(req.params.id);
      
      const existingBrand = await storage.getBrand(brandId);
      if (!existingBrand) {
        return res.status(404).json({
          success: false,
          error: {
            code: "BRAND_NOT_FOUND",
            message: "Brand not found",
          },
        });
      }
      
      // Check if brand has products
      const { products } = await storage.getProductsByBrand(brandId, 1, 1);
      if (products.length > 0) {
        return res.status(400).json({
          success: false,
          error: {
            code: "BRAND_HAS_PRODUCTS",
            message: "Cannot delete brand that has products",
          },
        });
      }
      
      const deleted = await storage.deleteBrand(brandId);
      
      if (!deleted) {
        return res.status(404).json({
          success: false,
          error: {
            code: "BRAND_NOT_FOUND",
            message: "Brand not found",
          },
        });
      }
      
      res.json({
        success: true,
        message: "Brand deleted successfully",
      });
    } catch (error) {
      console.error("Delete brand error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "DELETE_BRAND_FAILED",
          message: "Failed to delete brand",
        },
      });
    }
  },
};
