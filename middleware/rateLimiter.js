import rateLimit from "express-rate-limit";

// Auth endpoints rate limiter
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    success: false,
    error: {
      code: "RATE_LIMIT_EXCEEDED",
      message: "Too many authentication attempts, please try again later",
    },
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Upload endpoints rate limiter
const uploadLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 upload requests per windowMs
  message: {
    success: false,
    error: {
      code: "RATE_LIMIT_EXCEEDED",
      message: "Too many upload attempts, please try again later",
    },
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Analytics endpoints rate limiter
const analyticsLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, // limit each IP to 20 analytics requests per windowMs
  message: {
    success: false,
    error: {
      code: "RATE_LIMIT_EXCEEDED",
      message: "Too many analytics requests, please try again later",
    },
  },
  standardHeaders: true,
  legacyHeaders: false,
});

export const rateLimiters = {
  auth: authLimiter,
  upload: uploadLimiter,
  analytics: analyticsLimiter,
};
