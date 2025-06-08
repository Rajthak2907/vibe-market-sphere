import { storage } from "../storage.js";
import { insertBannerSchema } from "../../shared/schema.js";

export const bannerController = {
  async getBanners(req, res) {
    try {
      const position = req.query.position; // hero, sidebar, footer
      const activeOnly = req.query.active === "true";
      
      let banners;
      
      if (activeOnly) {
        banners = await storage.getActiveBanners();
      } else {
        banners = await storage.getAllBanners();
      }
      
      // Filter by position if specified
      if (position) {
        banners = banners.filter(banner => banner.position === position);
      }
      
      res.json({
        success: true,
        data: {
          banners,
        },
      });
    } catch (error) {
      console.error("Get banners error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "GET_BANNERS_FAILED",
          message: "Failed to get banners",
        },
      });
    }
  },

  async createBanner(req, res) {
    try {
      const validatedData = insertBannerSchema.parse(req.body);
      
      // Validate dates
      if (validatedData.startDate && validatedData.endDate) {
        if (new Date(validatedData.startDate) >= new Date(validatedData.endDate)) {
          return res.status(400).json({
            success: false,
            error: {
              code: "INVALID_DATES",
              message: "Start date must be before end date",
            },
          });
        }
      }
      
      const banner = await storage.createBanner(validatedData);
      
      res.status(201).json({
        success: true,
        message: "Banner created successfully",
        data: {
          banner,
        },
      });
    } catch (error) {
      console.error("Create banner error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "CREATE_BANNER_FAILED",
          message: "Failed to create banner",
        },
      });
    }
  },

  async updateBanner(req, res) {
    try {
      const bannerId = parseInt(req.params.id);
      
      const existingBanner = await storage.getBanner(bannerId);
      if (!existingBanner) {
        return res.status(404).json({
          success: false,
          error: {
            code: "BANNER_NOT_FOUND",
            message: "Banner not found",
          },
        });
      }
      
      // Validate dates if provided
      const updateData = req.body;
      if (updateData.startDate && updateData.endDate) {
        if (new Date(updateData.startDate) >= new Date(updateData.endDate)) {
          return res.status(400).json({
            success: false,
            error: {
              code: "INVALID_DATES",
              message: "Start date must be before end date",
            },
          });
        }
      }
      
      const updatedBanner = await storage.updateBanner(bannerId, updateData);
      
      res.json({
        success: true,
        message: "Banner updated successfully",
        data: {
          banner: updatedBanner,
        },
      });
    } catch (error) {
      console.error("Update banner error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "UPDATE_BANNER_FAILED",
          message: "Failed to update banner",
        },
      });
    }
  },

  async deleteBanner(req, res) {
    try {
      const bannerId = parseInt(req.params.id);
      
      const existingBanner = await storage.getBanner(bannerId);
      if (!existingBanner) {
        return res.status(404).json({
          success: false,
          error: {
            code: "BANNER_NOT_FOUND",
            message: "Banner not found",
          },
        });
      }
      
      const deleted = await storage.deleteBanner(bannerId);
      
      if (!deleted) {
        return res.status(404).json({
          success: false,
          error: {
            code: "BANNER_NOT_FOUND",
            message: "Banner not found",
          },
        });
      }
      
      res.json({
        success: true,
        message: "Banner deleted successfully",
      });
    } catch (error) {
      console.error("Delete banner error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "DELETE_BANNER_FAILED",
          message: "Failed to delete banner",
        },
      });
    }
  },

  async reorderBanners(req, res) {
    try {
      const { bannerIds } = req.body; // Array of banner IDs in desired order
      
      if (!Array.isArray(bannerIds)) {
        return res.status(400).json({
          success: false,
          error: {
            code: "INVALID_INPUT",
            message: "Banner IDs must be an array",
          },
        });
      }
      
      // Update sort order for each banner
      const updatePromises = bannerIds.map((bannerId, index) => 
        storage.updateBanner(bannerId, { sortOrder: index })
      );
      
      await Promise.all(updatePromises);
      
      res.json({
        success: true,
        message: "Banner order updated successfully",
      });
    } catch (error) {
      console.error("Reorder banners error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "REORDER_BANNERS_FAILED",
          message: "Failed to reorder banners",
        },
      });
    }
  },
};
