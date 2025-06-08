import type { Express } from "express";
import { createServer, type Server } from "http";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import mongoSanitize from "express-mongo-sanitize";
import rateLimit from "express-rate-limit";
import { storage } from "./storage";

// Import controllers
import { authController } from "./controllers/auth.js";
import { userController } from "./controllers/user.js";
import { adminController } from "./controllers/admin.js";
import { vendorController } from "./controllers/vendor.js";
import { productController } from "./controllers/product.js";
import { categoryController } from "./controllers/category.js";
import { brandController } from "./controllers/brand.js";
import { orderController } from "./controllers/order.js";
import { cartController } from "./controllers/cart.js";
import { wishlistController } from "./controllers/wishlist.js";
import { reviewController } from "./controllers/review.js";
import { bannerController } from "./controllers/banner.js";
import { paymentController } from "./controllers/payment.js";
import { analyticsController } from "./controllers/analytics.js";
import { searchController } from "./controllers/search.js";

// Import middleware
import { auth } from "./middleware/auth.js";
import { roleCheck } from "./middleware/roleCheck.js";
import { validateRequest } from "./middleware/validation.js";
import { upload } from "./middleware/upload.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { rateLimiters } from "./middleware/rateLimiter.js";

export async function registerRoutes(app: Express): Promise<Server> {
  // Security middleware
  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        scriptSrc: ["'self'"],
        imgSrc: ["'self'", "data:", "https:"],
      },
    },
  }));

  app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  }));

  app.use(compression());
  app.use(mongoSanitize());

  // Rate limiting
  const generalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP",
  });

  app.use("/api", generalLimiter);

  // Authentication routes
  app.post("/api/auth/register", rateLimiters.auth, authController.register);
  app.post("/api/auth/login", rateLimiters.auth, authController.login);
  app.post("/api/auth/refresh", authController.refreshToken);
  app.post("/api/auth/logout", auth, authController.logout);
  app.post("/api/auth/forgot-password", rateLimiters.auth, authController.forgotPassword);
  app.post("/api/auth/reset-password", rateLimiters.auth, authController.resetPassword);
  app.post("/api/auth/verify-email", authController.verifyEmail);
  app.post("/api/auth/resend-verification", rateLimiters.auth, authController.resendVerification);

  // User routes
  app.get("/api/users/profile", auth, userController.getProfile);
  app.put("/api/users/profile", auth, userController.updateProfile);
  app.get("/api/users/orders", auth, userController.getOrders);
  app.get("/api/users/wishlist", auth, userController.getWishlist);
  app.post("/api/users/address", auth, userController.addAddress);
  app.put("/api/users/address/:id", auth, userController.updateAddress);
  app.delete("/api/users/address/:id", auth, userController.deleteAddress);

  // Admin routes
  app.get("/api/admin/users", auth, roleCheck(["admin"]), adminController.getUsers);
  app.put("/api/admin/users/:id/status", auth, roleCheck(["admin"]), adminController.updateUserStatus);
  app.delete("/api/admin/users/:id", auth, roleCheck(["admin"]), adminController.deleteUser);
  app.get("/api/admin/analytics", auth, roleCheck(["admin"]), analyticsController.getAdminAnalytics);

  // Vendor routes
  app.get("/api/vendor/products", auth, roleCheck(["vendor", "admin"]), vendorController.getProducts);
  app.post("/api/vendor/products", auth, roleCheck(["vendor", "admin"]), vendorController.createProduct);
  app.put("/api/vendor/products/:id", auth, roleCheck(["vendor", "admin"]), vendorController.updateProduct);
  app.delete("/api/vendor/products/:id", auth, roleCheck(["vendor", "admin"]), vendorController.deleteProduct);
  app.get("/api/vendor/orders", auth, roleCheck(["vendor", "admin"]), vendorController.getOrders);
  app.get("/api/vendor/analytics", auth, roleCheck(["vendor", "admin"]), analyticsController.getVendorAnalytics);

  // Product routes
  app.get("/api/products", productController.getProducts);
  app.get("/api/products/featured", productController.getFeaturedProducts);
  app.get("/api/products/trending", productController.getTrendingProducts);
  app.get("/api/products/:id", productController.getProduct);
  app.post("/api/products", auth, roleCheck(["admin", "vendor"]), productController.createProduct);
  app.put("/api/products/:id", auth, roleCheck(["admin", "vendor"]), productController.updateProduct);
  app.delete("/api/products/:id", auth, roleCheck(["admin", "vendor"]), productController.deleteProduct);
  app.post("/api/products/:id/images", auth, roleCheck(["admin", "vendor"]), upload.array("images", 10), productController.uploadImages);

  // Category routes
  app.get("/api/categories", categoryController.getCategories);
  app.get("/api/categories/:id/products", categoryController.getCategoryProducts);
  app.post("/api/admin/categories", auth, roleCheck(["admin"]), categoryController.createCategory);
  app.put("/api/admin/categories/:id", auth, roleCheck(["admin"]), categoryController.updateCategory);
  app.delete("/api/admin/categories/:id", auth, roleCheck(["admin"]), categoryController.deleteCategory);

  // Brand routes
  app.get("/api/brands", brandController.getBrands);
  app.get("/api/brands/:id/products", brandController.getBrandProducts);
  app.post("/api/admin/brands", auth, roleCheck(["admin"]), brandController.createBrand);
  app.put("/api/admin/brands/:id", auth, roleCheck(["admin"]), brandController.updateBrand);
  app.delete("/api/admin/brands/:id", auth, roleCheck(["admin"]), brandController.deleteBrand);

  // Order routes
  app.post("/api/orders", auth, orderController.createOrder);
  app.get("/api/orders", auth, orderController.getUserOrders);
  app.get("/api/orders/:id", auth, orderController.getOrder);
  app.put("/api/orders/:id/status", auth, roleCheck(["admin", "vendor"]), orderController.updateOrderStatus);
  app.post("/api/orders/:id/cancel", auth, orderController.cancelOrder);
  app.post("/api/orders/:id/return", auth, orderController.returnOrder);
  app.get("/api/admin/orders", auth, roleCheck(["admin"]), orderController.getAllOrders);

  // Cart routes
  app.get("/api/cart", auth, cartController.getCart);
  app.post("/api/cart/add", auth, cartController.addToCart);
  app.put("/api/cart/update", auth, cartController.updateCartItem);
  app.delete("/api/cart/remove", auth, cartController.removeFromCart);
  app.delete("/api/cart/clear", auth, cartController.clearCart);

  // Wishlist routes
  app.get("/api/wishlist", auth, wishlistController.getWishlist);
  app.post("/api/wishlist/add", auth, wishlistController.addToWishlist);
  app.delete("/api/wishlist/remove", auth, wishlistController.removeFromWishlist);

  // Review routes
  app.get("/api/products/:id/reviews", reviewController.getProductReviews);
  app.post("/api/products/:id/reviews", auth, reviewController.createReview);
  app.put("/api/reviews/:id", auth, reviewController.updateReview);
  app.delete("/api/reviews/:id", auth, reviewController.deleteReview);

  // Banner routes
  app.get("/api/banners", bannerController.getBanners);
  app.post("/api/admin/banners", auth, roleCheck(["admin"]), bannerController.createBanner);
  app.put("/api/admin/banners/:id", auth, roleCheck(["admin"]), bannerController.updateBanner);
  app.delete("/api/admin/banners/:id", auth, roleCheck(["admin"]), bannerController.deleteBanner);

  // Payment routes
  app.post("/api/payment/create", auth, paymentController.createPayment);
  app.post("/api/payment/confirm", auth, paymentController.confirmPayment);
  app.get("/api/payment/methods", auth, paymentController.getPaymentMethods);
  app.post("/api/payment/methods", auth, paymentController.savePaymentMethod);
  app.delete("/api/payment/methods/:id", auth, paymentController.deletePaymentMethod);

  // Search routes
  app.get("/api/search", searchController.globalSearch);
  app.get("/api/search/suggestions", searchController.getSearchSuggestions);
  app.get("/api/products/filter", searchController.filterProducts);
  app.get("/api/products/price-range", searchController.getPriceRange);

  // File upload routes
  app.post("/api/upload", auth, rateLimiters.upload, upload.single("file"), (req, res) => {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No file uploaded" });
    }
    
    res.json({
      success: true,
      data: {
        url: `/uploads/${req.file.filename}`,
        filename: req.file.filename,
        originalName: req.file.originalname,
        size: req.file.size,
      },
    });
  });

  // Error handling middleware
  app.use(errorHandler);

  // 404 handler
  app.use("/api/*", (req, res) => {
    res.status(404).json({
      success: false,
      error: {
        code: "NOT_FOUND",
        message: "API endpoint not found",
      },
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
