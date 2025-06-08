import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "your-cloud-name",
  api_key: process.env.CLOUDINARY_API_KEY || "your-api-key",
  api_secret: process.env.CLOUDINARY_API_SECRET || "your-api-secret",
  secure: true,
});

export const uploadImageToCloudinary = async (filePath, options = {}) => {
  try {
    const {
      folder = "obeyyo",
      transformation = {},
      publicId,
      overwrite = false,
      resourceType = "image",
    } = options;

    const uploadOptions = {
      folder,
      resource_type: resourceType,
      overwrite,
      transformation: {
        quality: "auto",
        fetch_format: "auto",
        ...transformation,
      },
    };

    if (publicId) {
      uploadOptions.public_id = publicId;
    }

    const result = await cloudinary.uploader.upload(filePath, uploadOptions);

    // Delete local file after successful upload
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    return {
      success: true,
      url: result.secure_url,
      publicId: result.public_id,
      width: result.width,
      height: result.height,
      format: result.format,
      bytes: result.bytes,
    };
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    
    // Clean up local file on error
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    
    throw new Error(`Failed to upload image: ${error.message}`);
  }
};

export const uploadMultipleImages = async (filePaths, options = {}) => {
  try {
    const uploadPromises = filePaths.map(filePath => 
      uploadImageToCloudinary(filePath, options)
    );
    
    const results = await Promise.allSettled(uploadPromises);
    
    const successful = results
      .filter(result => result.status === "fulfilled")
      .map(result => result.value);
    
    const failed = results
      .filter(result => result.status === "rejected")
      .map(result => result.reason);
    
    return {
      success: true,
      uploaded: successful,
      failed,
      total: filePaths.length,
      successCount: successful.length,
      failureCount: failed.length,
    };
  } catch (error) {
    console.error("Multiple upload error:", error);
    throw new Error(`Failed to upload multiple images: ${error.message}`);
  }
};

export const deleteImageFromCloudinary = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    
    return {
      success: result.result === "ok",
      result: result.result,
    };
  } catch (error) {
    console.error("Cloudinary delete error:", error);
    throw new Error(`Failed to delete image: ${error.message}`);
  }
};

export const generateImageUrl = (publicId, transformations = {}) => {
  try {
    return cloudinary.url(publicId, {
      secure: true,
      transformation: {
        quality: "auto",
        fetch_format: "auto",
        ...transformations,
      },
    });
  } catch (error) {
    console.error("Generate URL error:", error);
    return null;
  }
};

export const getImageThumbnail = (publicId, width = 300, height = 300) => {
  return generateImageUrl(publicId, {
    width,
    height,
    crop: "fill",
    gravity: "auto",
  });
};

export const optimizeImageForWeb = (publicId, quality = "auto") => {
  return generateImageUrl(publicId, {
    quality,
    format: "auto",
    dpr: "auto",
  });
};

export const createImageVariants = (publicId) => {
  return {
    thumbnail: getImageThumbnail(publicId, 150, 150),
    small: getImageThumbnail(publicId, 300, 300),
    medium: getImageThumbnail(publicId, 600, 600),
    large: getImageThumbnail(publicId, 1200, 1200),
    original: generateImageUrl(publicId),
  };
};

// Product image specific functions
export const uploadProductImage = async (filePath, productId, imageIndex = 0) => {
  const options = {
    folder: "obeyyo/products",
    publicId: `product_${productId}_${imageIndex}`,
    transformation: {
      width: 1200,
      height: 1200,
      crop: "limit",
      quality: "auto:good",
    },
  };
  
  return uploadImageToCloudinary(filePath, options);
};

export const uploadBannerImage = async (filePath, bannerId) => {
  const options = {
    folder: "obeyyo/banners",
    publicId: `banner_${bannerId}`,
    transformation: {
      width: 1920,
      height: 600,
      crop: "fill",
      gravity: "center",
      quality: "auto:good",
    },
  };
  
  return uploadImageToCloudinary(filePath, options);
};

export const uploadAvatarImage = async (filePath, userId) => {
  const options = {
    folder: "obeyyo/avatars",
    publicId: `avatar_${userId}`,
    transformation: {
      width: 200,
      height: 200,
      crop: "fill",
      gravity: "face",
      quality: "auto:good",
    },
  };
  
  return uploadImageToCloudinary(filePath, options);
};

// Check if Cloudinary is configured
export const isCloudinaryConfigured = () => {
  return !!(
    process.env.CLOUDINARY_CLOUD_NAME &&
    process.env.CLOUDINARY_API_KEY &&
    process.env.CLOUDINARY_API_SECRET
  );
};
