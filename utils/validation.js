import { z } from "zod";

// Common validation schemas
export const emailSchema = z.string().email("Invalid email format");

export const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/\d/, "Password must contain at least one number")
  .regex(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character");

export const phoneSchema = z
  .string()
  .regex(/^\+?[\d\s\-\(\)]+$/, "Invalid phone number format")
  .min(10, "Phone number must be at least 10 digits")
  .max(20, "Phone number must not exceed 20 characters");

export const urlSchema = z.string().url("Invalid URL format");

export const slugSchema = z
  .string()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must contain only lowercase letters, numbers, and hyphens");

export const priceSchema = z
  .number()
  .positive("Price must be positive")
  .max(999999.99, "Price cannot exceed $999,999.99");

export const ratingSchema = z
  .number()
  .min(1, "Rating must be at least 1")
  .max(5, "Rating cannot exceed 5");

// Pagination validation
export const paginationSchema = z.object({
  page: z.number().int().positive("Page must be a positive integer").default(1),
  limit: z.number().int().positive("Limit must be a positive integer").max(100, "Limit cannot exceed 100").default(10),
});

// Search validation
export const searchSchema = z.object({
  q: z.string().min(1, "Search query is required").max(100, "Search query too long"),
  page: z.number().int().positive().default(1),
  limit: z.number().int().positive().max(50).default(10),
});

// Date range validation
export const dateRangeSchema = z.object({
  startDate: z.string().datetime("Invalid start date format"),
  endDate: z.string().datetime("Invalid end date format"),
}).refine(
  (data) => new Date(data.startDate) <= new Date(data.endDate),
  {
    message: "Start date must be before or equal to end date",
    path: ["endDate"],
  }
);

// File validation
export const imageFileSchema = z.object({
  mimetype: z.string().regex(/^image\/(jpeg|jpg|png|gif|webp)$/, "Invalid image format"),
  size: z.number().max(5 * 1024 * 1024, "Image size cannot exceed 5MB"),
});

// Product validation schemas
export const productFilterSchema = z.object({
  page: z.number().int().positive().default(1),
  limit: z.number().int().positive().max(100).default(10),
  category: z.number().int().positive().optional(),
  brand: z.number().int().positive().optional(),
  minPrice: z.number().positive().optional(),
  maxPrice: z.number().positive().optional(),
  search: z.string().max(100).optional(),
  sort: z.enum(["newest", "oldest", "price_asc", "price_desc", "rating", "popularity"]).default("newest"),
  inStock: z.boolean().default(false),
});

// Order validation schemas
export const orderItemSchema = z.object({
  productId: z.number().int().positive("Product ID is required"),
  quantity: z.number().int().positive("Quantity must be positive"),
});

export const addressSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50),
  lastName: z.string().min(1, "Last name is required").max(50),
  company: z.string().max(100).optional(),
  street: z.string().min(1, "Street address is required").max(200),
  apartment: z.string().max(50).optional(),
  city: z.string().min(1, "City is required").max(100),
  state: z.string().min(1, "State is required").max(100),
  zipCode: z.string().min(1, "ZIP code is required").max(20),
  country: z.string().min(1, "Country is required").max(100),
  phone: phoneSchema.optional(),
});

// Review validation
export const reviewContentSchema = z.object({
  rating: ratingSchema,
  title: z.string().max(100, "Review title too long").optional(),
  comment: z.string().max(1000, "Review comment too long").optional(),
  images: z.array(z.string().url()).max(5, "Maximum 5 images allowed").optional(),
});

// Banner validation
export const bannerValidationSchema = z.object({
  title: z.string().min(1, "Title is required").max(100),
  subtitle: z.string().max(200).optional(),
  description: z.string().max(500).optional(),
  image: z.string().url("Valid image URL is required"),
  link: urlSchema.optional(),
  buttonText: z.string().max(50).optional(),
  position: z.enum(["hero", "sidebar", "footer"]).default("hero"),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
}).refine(
  (data) => {
    if (data.startDate && data.endDate) {
      return new Date(data.startDate) <= new Date(data.endDate);
    }
    return true;
  },
  {
    message: "Start date must be before end date",
    path: ["endDate"],
  }
);

// Coupon validation
export const couponValidationSchema = z.object({
  code: z.string().min(3, "Coupon code must be at least 3 characters").max(20).regex(/^[A-Z0-9]+$/, "Coupon code must contain only uppercase letters and numbers"),
  type: z.enum(["percentage", "fixed"]),
  value: z.number().positive("Value must be positive"),
  minimumAmount: z.number().positive().optional(),
  maximumDiscount: z.number().positive().optional(),
  usageLimit: z.number().int().positive().optional(),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
}).refine(
  (data) => {
    if (data.type === "percentage" && data.value > 100) {
      return false;
    }
    return true;
  },
  {
    message: "Percentage discount cannot exceed 100%",
    path: ["value"],
  }
).refine(
  (data) => {
    if (data.startDate && data.endDate) {
      return new Date(data.startDate) <= new Date(data.endDate);
    }
    return true;
  },
  {
    message: "Start date must be before end date",
    path: ["endDate"],
  }
);

// Analytics validation
export const analyticsQuerySchema = z.object({
  period: z.enum(["daily", "weekly", "monthly", "yearly"]).default("monthly"),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
  groupBy: z.enum(["day", "week", "month"]).default("day"),
});

// Utility functions for validation
export const validateId = (id) => {
  const numId = parseInt(id);
  if (isNaN(numId) || numId <= 0) {
    throw new Error("Invalid ID format");
  }
  return numId;
};

export const validateEmail = (email) => {
  try {
    return emailSchema.parse(email);
  } catch (error) {
    throw new Error("Invalid email format");
  }
};

export const validatePassword = (password) => {
  try {
    return passwordSchema.parse(password);
  } catch (error) {
    throw new Error(error.errors[0]?.message || "Invalid password format");
  }
};

export const sanitizeInput = (input) => {
  if (typeof input !== "string") return input;
  
  return input
    .trim()
    .replace(/[<>]/g, "") // Remove potential HTML tags
    .slice(0, 1000); // Limit length
};

export const validateSortOption = (sort, allowedOptions) => {
  if (!allowedOptions.includes(sort)) {
    throw new Error(`Invalid sort option. Allowed values: ${allowedOptions.join(", ")}`);
  }
  return sort;
};

export const validatePagination = (page, limit, maxLimit = 100) => {
  const validatedPage = Math.max(1, parseInt(page) || 1);
  const validatedLimit = Math.min(maxLimit, Math.max(1, parseInt(limit) || 10));
  
  return {
    page: validatedPage,
    limit: validatedLimit,
    offset: (validatedPage - 1) * validatedLimit,
  };
};

// Custom validation middleware creator
export const createValidationMiddleware = (schema, source = "body") => {
  return (req, res, next) => {
    try {
      const data = source === "body" ? req.body : 
                  source === "query" ? req.query : 
                  source === "params" ? req.params : req.body;
      
      const validatedData = schema.parse(data);
      
      if (source === "body") req.body = validatedData;
      else if (source === "query") req.query = validatedData;
      else if (source === "params") req.params = validatedData;
      
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(422).json({
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message: "Validation failed",
            details: error.errors.map(err => ({
              field: err.path.join("."),
              message: err.message,
            })),
          },
        });
      }
      
      next(error);
    }
  };
};
