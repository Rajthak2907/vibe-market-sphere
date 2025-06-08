/**
 * Cloudinary configuration for OBEYYO e-commerce API
 * Handles image upload, optimization, and management settings
 */

import { v2 as cloudinary } from "cloudinary";

// Cloudinary configuration object
const cloudinaryConfig = {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY || process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET || process.env.CLOUDINARY_SECRET,
  secure: true,
  upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET,
  folder: process.env.CLOUDINARY_FOLDER || "obeyyo",
};

// Validate required configuration
const validateConfig = () => {
  const requiredFields = ['cloud_name', 'api_key', 'api_secret'];
  const missing = requiredFields.filter(field => !cloudinaryConfig[field]);
  
  if (missing.length > 0) {
    console.warn(`Cloudinary configuration missing: ${missing.join(', ')}`);
    return false;
  }
  
  return true;
};

// Initialize Cloudinary if configuration is valid
let isConfigured = false;

try {
  if (validateConfig()) {
    cloudinary.config(cloudinaryConfig);
    isConfigured = true;
    console.log("Cloudinary configured successfully");
  } else {
    console.log("Cloudinary configuration incomplete - using local file storage");
  }
} catch (error) {
  console.error("Failed to configure Cloudinary:", error);
}

/**
 * Check if Cloudinary is properly configured
 * @returns {boolean} True if configured
 */
export const isCloudinaryConfigured = () => isConfigured;

/**
 * Get Cloudinary configuration
 * @returns {Object} Configuration object
 */
export const getCloudinaryConfig = () => ({
  ...cloudinaryConfig,
  isConfigured,
});

/**
 * Default upload options for different asset types
 */
export const uploadPresets = {
  // Product images
  product: {
    folder: `${cloudinaryConfig.folder}/products`,
    transformation: [
      { width: 1200, height: 1200, crop: "limit", quality: "auto:good" },
      { fetch_format: "auto" }
    ],
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
    max_file_size: 5000000, // 5MB
  },

  // Product thumbnails
  productThumbnail: {
    folder: `${cloudinaryConfig.folder}/products/thumbnails`,
    transformation: [
      { width: 400, height: 400, crop: "fill", gravity: "center", quality: "auto" },
      { fetch_format: "auto" }
    ],
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
    max_file_size: 2000000, // 2MB
  },

  // User avatars
  avatar: {
    folder: `${cloudinaryConfig.folder}/avatars`,
    transformation: [
      { width: 200, height: 200, crop: "fill", gravity: "face", quality: "auto" },
      { fetch_format: "auto" }
    ],
    allowed_formats: ["jpg", "jpeg", "png"],
    max_file_size: 1000000, // 1MB
  },

  // Banner images
  banner: {
    folder: `${cloudinaryConfig.folder}/banners`,
    transformation: [
      { width: 1920, height: 600, crop: "fill", gravity: "center", quality: "auto:good" },
      { fetch_format: "auto" }
    ],
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
    max_file_size: 8000000, // 8MB
  },

  // Category images
  category: {
    folder: `${cloudinaryConfig.folder}/categories`,
    transformation: [
      { width: 600, height: 400, crop: "fill", gravity: "center", quality: "auto" },
      { fetch_format: "auto" }
    ],
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
    max_file_size: 3000000, // 3MB
  },

  // Brand logos
  brand: {
    folder: `${cloudinaryConfig.folder}/brands`,
    transformation: [
      { width: 300, height: 200, crop: "fit", gravity: "center", quality: "auto" },
      { fetch_format: "auto" }
    ],
    allowed_formats: ["jpg", "jpeg", "png", "svg"],
    max_file_size: 1000000, // 1MB
  },

  // Review images
  review: {
    folder: `${cloudinaryConfig.folder}/reviews`,
    transformation: [
      { width: 800, height: 600, crop: "limit", quality: "auto" },
      { fetch_format: "auto" }
    ],
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
    max_file_size: 3000000, // 3MB
  },
};

/**
 * Upload options for different environments
 */
export const environmentConfig = {
  development: {
    quality: "auto:low",
    flags: "development",
  },
  
  staging: {
    quality: "auto:good",
    flags: "staging",
  },
  
  production: {
    quality: "auto:best",
    flags: "production",
  },
};

/**
 * Get upload options for specific asset type and environment
 * @param {string} assetType - Type of asset (product, avatar, etc.)
 * @param {Object} customOptions - Custom options to override defaults
 * @returns {Object} Upload options
 */
export const getUploadOptions = (assetType = "product", customOptions = {}) => {
  const preset = uploadPresets[assetType] || uploadPresets.product;
  const envConfig = environmentConfig[process.env.NODE_ENV] || environmentConfig.development;
  
  return {
    ...preset,
    ...envConfig,
    ...customOptions,
    use_filename: true,
    unique_filename: true,
    overwrite: false,
    resource_type: "image",
  };
};

/**
 * Generate optimized URL for existing Cloudinary asset
 * @param {string} publicId - Cloudinary public ID
 * @param {Object} transformations - Transformation options
 * @returns {string|null} Optimized URL or null if not configured
 */
export const generateOptimizedUrl = (publicId, transformations = {}) => {
  if (!isConfigured || !publicId) return null;
  
  const defaultTransformations = {
    quality: "auto",
    fetch_format: "auto",
  };
  
  return cloudinary.url(publicId, {
    secure: true,
    transformation: { ...defaultTransformations, ...transformations },
  });
};

/**
 * Generate multiple image variants for responsive design
 * @param {string} publicId - Cloudinary public ID
 * @returns {Object|null} Object with different image sizes or null if not configured
 */
export const generateImageVariants = (publicId) => {
  if (!isConfigured || !publicId) return null;
  
  return {
    thumbnail: generateOptimizedUrl(publicId, { width: 150, height: 150, crop: "fill" }),
    small: generateOptimizedUrl(publicId, { width: 300, height: 300, crop: "fill" }),
    medium: generateOptimizedUrl(publicId, { width: 600, height: 600, crop: "limit" }),
    large: generateOptimizedUrl(publicId, { width: 1200, height: 1200, crop: "limit" }),
    original: generateOptimizedUrl(publicId),
  };
};

/**
 * Cloudinary webhook signature verification
 * @param {string} body - Request body
 * @param {string} timestamp - Timestamp from header
 * @param {string} signature - Signature from header
 * @returns {boolean} True if signature is valid
 */
export const verifyWebhookSignature = (body, timestamp, signature) => {
  if (!isConfigured) return false;
  
  try {
    const crypto = require('crypto');
    const expected = crypto
      .createHash('sha1')
      .update(body + timestamp + cloudinaryConfig.api_secret)
      .digest('hex');
    
    return signature === expected;
  } catch (error) {
    console.error("Failed to verify webhook signature:", error);
    return false;
  }
};

/**
 * Clean up orphaned images (images not referenced in database)
 * @param {Array} activePublicIds - Array of public IDs currently in use
 * @returns {Promise<Object>} Cleanup result
 */
export const cleanupOrphanedImages = async (activePublicIds = []) => {
  if (!isConfigured) {
    return { success: false, message: "Cloudinary not configured" };
  }
  
  try {
    // Get all images in the folder
    const { resources } = await cloudinary.search
      .expression(`folder:${cloudinaryConfig.folder}/*`)
      .max_results(500)
      .execute();
    
    // Find orphaned images
    const allPublicIds = resources.map(resource => resource.public_id);
    const orphanedIds = allPublicIds.filter(id => !activePublicIds.includes(id));
    
    if (orphanedIds.length === 0) {
      return { success: true, message: "No orphaned images found", deleted: 0 };
    }
    
    // Delete orphaned images in batches
    const batchSize = 100;
    let deletedCount = 0;
    
    for (let i = 0; i < orphanedIds.length; i += batchSize) {
      const batch = orphanedIds.slice(i, i + batchSize);
      const result = await cloudinary.api.delete_resources(batch);
      deletedCount += Object.keys(result.deleted).length;
    }
    
    return {
      success: true,
      message: `Cleaned up ${deletedCount} orphaned images`,
      deleted: deletedCount,
      total: orphanedIds.length,
    };
  } catch (error) {
    console.error("Failed to cleanup orphaned images:", error);
    return { success: false, message: error.message };
  }
};

/**
 * Get usage statistics from Cloudinary
 * @returns {Promise<Object>} Usage statistics
 */
export const getUsageStats = async () => {
  if (!isConfigured) {
    return { success: false, message: "Cloudinary not configured" };
  }
  
  try {
    const usage = await cloudinary.api.usage();
    return {
      success: true,
      data: {
        credits: usage.credits,
        usedCredits: usage.used_credits,
        storage: usage.storage,
        bandwidth: usage.bandwidth,
        resources: usage.resources,
        transformations: usage.transformations,
      },
    };
  } catch (error) {
    console.error("Failed to get usage stats:", error);
    return { success: false, message: error.message };
  }
};

// Export the configured Cloudinary instance
export { cloudinary };

// Export default configuration object
export default {
  cloudinary,
  config: cloudinaryConfig,
  isConfigured,
  uploadPresets,
  environmentConfig,
  getUploadOptions,
  generateOptimizedUrl,
  generateImageVariants,
  verifyWebhookSignature,
  cleanupOrphanedImages,
  getUsageStats,
  isCloudinaryConfigured,
  getCloudinaryConfig,
};
