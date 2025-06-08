export const errorHandler = (err, req, res, next) => {
  console.error("Error:", err);

  // Multer errors
  if (err.code === "LIMIT_FILE_SIZE") {
    return res.status(400).json({
      success: false,
      error: {
        code: "FILE_TOO_LARGE",
        message: "File size exceeds the 5MB limit",
      },
    });
  }

  if (err.code === "LIMIT_FILE_COUNT") {
    return res.status(400).json({
      success: false,
      error: {
        code: "TOO_MANY_FILES",
        message: "Too many files uploaded",
      },
    });
  }

  // JWT errors
  if (err.name === "JsonWebTokenError") {
    return res.status(401).json({
      success: false,
      error: {
        code: "INVALID_TOKEN",
        message: "Invalid authentication token",
      },
    });
  }

  if (err.name === "TokenExpiredError") {
    return res.status(401).json({
      success: false,
      error: {
        code: "TOKEN_EXPIRED",
        message: "Authentication token has expired",
      },
    });
  }

  // Default error response
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal server error";

  res.status(status).json({
    success: false,
    error: {
      code: "INTERNAL_ERROR",
      message,
    },
  });
};
