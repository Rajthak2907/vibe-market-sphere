import { 
  users, categories, brands, products, addresses, orders, orderItems, 
  cart, wishlist, reviews, banners, coupons, paymentMethods,
  type User, type InsertUser, type Category, type InsertCategory,
  type Brand, type InsertBrand, type Product, type InsertProduct,
  type Address, type InsertAddress, type Order, type InsertOrder,
  type OrderItem, type InsertOrderItem, type Cart, type InsertCart,
  type Wishlist, type InsertWishlist, type Review, type InsertReview,
  type Banner, type InsertBanner, type Coupon, type InsertCoupon,
  type PaymentMethod, type InsertPaymentMethod
} from "@shared/schema";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: number, updates: Partial<User>): Promise<User | undefined>;
  deleteUser(id: number): Promise<boolean>;
  getAllUsers(page?: number, limit?: number): Promise<{ users: User[], total: number }>;

  // Category operations
  getCategory(id: number): Promise<Category | undefined>;
  getCategoryBySlug(slug: string): Promise<Category | undefined>;
  createCategory(category: InsertCategory): Promise<Category>;
  updateCategory(id: number, updates: Partial<Category>): Promise<Category | undefined>;
  deleteCategory(id: number): Promise<boolean>;
  getAllCategories(): Promise<Category[]>;

  // Brand operations
  getBrand(id: number): Promise<Brand | undefined>;
  getBrandBySlug(slug: string): Promise<Brand | undefined>;
  createBrand(brand: InsertBrand): Promise<Brand>;
  updateBrand(id: number, updates: Partial<Brand>): Promise<Brand | undefined>;
  deleteBrand(id: number): Promise<boolean>;
  getAllBrands(): Promise<Brand[]>;

  // Product operations
  getProduct(id: number): Promise<Product | undefined>;
  getProductBySlug(slug: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  updateProduct(id: number, updates: Partial<Product>): Promise<Product | undefined>;
  deleteProduct(id: number): Promise<boolean>;
  getProducts(filters: any): Promise<{ products: Product[], total: number }>;
  getProductsByCategory(categoryId: number, page?: number, limit?: number): Promise<{ products: Product[], total: number }>;
  getProductsByBrand(brandId: number, page?: number, limit?: number): Promise<{ products: Product[], total: number }>;
  searchProducts(query: string, filters?: any): Promise<{ products: Product[], total: number }>;

  // Address operations
  getAddress(id: number): Promise<Address | undefined>;
  createAddress(address: InsertAddress): Promise<Address>;
  updateAddress(id: number, updates: Partial<Address>): Promise<Address | undefined>;
  deleteAddress(id: number): Promise<boolean>;
  getUserAddresses(userId: number): Promise<Address[]>;

  // Order operations
  getOrder(id: number): Promise<Order | undefined>;
  getOrderByNumber(orderNumber: string): Promise<Order | undefined>;
  createOrder(order: InsertOrder): Promise<Order>;
  updateOrder(id: number, updates: Partial<Order>): Promise<Order | undefined>;
  getUserOrders(userId: number, page?: number, limit?: number): Promise<{ orders: Order[], total: number }>;
  getAllOrders(page?: number, limit?: number): Promise<{ orders: Order[], total: number }>;

  // Order item operations
  createOrderItem(orderItem: InsertOrderItem): Promise<OrderItem>;
  getOrderItems(orderId: number): Promise<OrderItem[]>;

  // Cart operations
  getCartItem(userId: number, productId: number): Promise<Cart | undefined>;
  addToCart(cartItem: InsertCart): Promise<Cart>;
  updateCartItem(id: number, updates: Partial<Cart>): Promise<Cart | undefined>;
  removeFromCart(id: number): Promise<boolean>;
  getUserCart(userId: number): Promise<Cart[]>;
  clearUserCart(userId: number): Promise<boolean>;

  // Wishlist operations
  getWishlistItem(userId: number, productId: number): Promise<Wishlist | undefined>;
  addToWishlist(wishlistItem: InsertWishlist): Promise<Wishlist>;
  removeFromWishlist(id: number): Promise<boolean>;
  getUserWishlist(userId: number): Promise<Wishlist[]>;

  // Review operations
  getReview(id: number): Promise<Review | undefined>;
  createReview(review: InsertReview): Promise<Review>;
  updateReview(id: number, updates: Partial<Review>): Promise<Review | undefined>;
  deleteReview(id: number): Promise<boolean>;
  getProductReviews(productId: number, page?: number, limit?: number): Promise<{ reviews: Review[], total: number }>;
  getUserReviews(userId: number): Promise<Review[]>;

  // Banner operations
  getBanner(id: number): Promise<Banner | undefined>;
  createBanner(banner: InsertBanner): Promise<Banner>;
  updateBanner(id: number, updates: Partial<Banner>): Promise<Banner | undefined>;
  deleteBanner(id: number): Promise<boolean>;
  getAllBanners(): Promise<Banner[]>;
  getActiveBanners(): Promise<Banner[]>;

  // Coupon operations
  getCoupon(id: number): Promise<Coupon | undefined>;
  getCouponByCode(code: string): Promise<Coupon | undefined>;
  createCoupon(coupon: InsertCoupon): Promise<Coupon>;
  updateCoupon(id: number, updates: Partial<Coupon>): Promise<Coupon | undefined>;
  deleteCoupon(id: number): Promise<boolean>;
  getAllCoupons(): Promise<Coupon[]>;

  // Payment method operations
  getPaymentMethod(id: number): Promise<PaymentMethod | undefined>;
  createPaymentMethod(paymentMethod: InsertPaymentMethod): Promise<PaymentMethod>;
  updatePaymentMethod(id: number, updates: Partial<PaymentMethod>): Promise<PaymentMethod | undefined>;
  deletePaymentMethod(id: number): Promise<boolean>;
  getUserPaymentMethods(userId: number): Promise<PaymentMethod[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User> = new Map();
  private categories: Map<number, Category> = new Map();
  private brands: Map<number, Brand> = new Map();
  private products: Map<number, Product> = new Map();
  private addresses: Map<number, Address> = new Map();
  private orders: Map<number, Order> = new Map();
  private orderItems: Map<number, OrderItem> = new Map();
  private cart: Map<number, Cart> = new Map();
  private wishlist: Map<number, Wishlist> = new Map();
  private reviews: Map<number, Review> = new Map();
  private banners: Map<number, Banner> = new Map();
  private coupons: Map<number, Coupon> = new Map();
  private paymentMethods: Map<number, PaymentMethod> = new Map();
  
  private currentId = 1;

  private generateId(): number {
    return this.currentId++;
  }

  private generateOrderNumber(): string {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `ORD-${year}${month}${day}-${random}`;
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.email === email);
  }

  async createUser(user: InsertUser): Promise<User> {
    const id = this.generateId();
    const now = new Date();
    const newUser: User = {
      ...user,
      id,
      emailVerified: false,
      isActive: true,
      createdAt: now,
      updatedAt: now,
      lastLogin: null,
      resetPasswordToken: null,
      resetPasswordExpires: null,
      emailVerificationToken: null,
    };
    this.users.set(id, newUser);
    return newUser;
  }

  async updateUser(id: number, updates: Partial<User>): Promise<User | undefined> {
    const user = this.users.get(id);
    if (!user) return undefined;
    
    const updatedUser = { ...user, ...updates, updatedAt: new Date() };
    this.users.set(id, updatedUser);
    return updatedUser;
  }

  async deleteUser(id: number): Promise<boolean> {
    return this.users.delete(id);
  }

  async getAllUsers(page = 1, limit = 10): Promise<{ users: User[], total: number }> {
    const allUsers = Array.from(this.users.values());
    const total = allUsers.length;
    const startIndex = (page - 1) * limit;
    const users = allUsers.slice(startIndex, startIndex + limit);
    return { users, total };
  }

  // Category operations
  async getCategory(id: number): Promise<Category | undefined> {
    return this.categories.get(id);
  }

  async getCategoryBySlug(slug: string): Promise<Category | undefined> {
    return Array.from(this.categories.values()).find(category => category.slug === slug);
  }

  async createCategory(category: InsertCategory): Promise<Category> {
    const id = this.generateId();
    const now = new Date();
    const newCategory: Category = {
      ...category,
      id,
      isActive: category.isActive ?? true,
      sortOrder: category.sortOrder ?? 0,
      createdAt: now,
      updatedAt: now,
    };
    this.categories.set(id, newCategory);
    return newCategory;
  }

  async updateCategory(id: number, updates: Partial<Category>): Promise<Category | undefined> {
    const category = this.categories.get(id);
    if (!category) return undefined;
    
    const updatedCategory = { ...category, ...updates, updatedAt: new Date() };
    this.categories.set(id, updatedCategory);
    return updatedCategory;
  }

  async deleteCategory(id: number): Promise<boolean> {
    return this.categories.delete(id);
  }

  async getAllCategories(): Promise<Category[]> {
    return Array.from(this.categories.values()).sort((a, b) => a.sortOrder - b.sortOrder);
  }

  // Brand operations
  async getBrand(id: number): Promise<Brand | undefined> {
    return this.brands.get(id);
  }

  async getBrandBySlug(slug: string): Promise<Brand | undefined> {
    return Array.from(this.brands.values()).find(brand => brand.slug === slug);
  }

  async createBrand(brand: InsertBrand): Promise<Brand> {
    const id = this.generateId();
    const now = new Date();
    const newBrand: Brand = {
      ...brand,
      id,
      isActive: brand.isActive ?? true,
      createdAt: now,
      updatedAt: now,
    };
    this.brands.set(id, newBrand);
    return newBrand;
  }

  async updateBrand(id: number, updates: Partial<Brand>): Promise<Brand | undefined> {
    const brand = this.brands.get(id);
    if (!brand) return undefined;
    
    const updatedBrand = { ...brand, ...updates, updatedAt: new Date() };
    this.brands.set(id, updatedBrand);
    return updatedBrand;
  }

  async deleteBrand(id: number): Promise<boolean> {
    return this.brands.delete(id);
  }

  async getAllBrands(): Promise<Brand[]> {
    return Array.from(this.brands.values()).filter(brand => brand.isActive);
  }

  // Product operations
  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getProductBySlug(slug: string): Promise<Product | undefined> {
    return Array.from(this.products.values()).find(product => product.slug === slug);
  }

  async createProduct(product: InsertProduct): Promise<Product> {
    const id = this.generateId();
    const now = new Date();
    const newProduct: Product = {
      ...product,
      id,
      inventory: product.inventory ?? 0,
      isActive: product.isActive ?? true,
      isFeatured: product.isFeatured ?? false,
      createdAt: now,
      updatedAt: now,
    };
    this.products.set(id, newProduct);
    return newProduct;
  }

  async updateProduct(id: number, updates: Partial<Product>): Promise<Product | undefined> {
    const product = this.products.get(id);
    if (!product) return undefined;
    
    const updatedProduct = { ...product, ...updates, updatedAt: new Date() };
    this.products.set(id, updatedProduct);
    return updatedProduct;
  }

  async deleteProduct(id: number): Promise<boolean> {
    return this.products.delete(id);
  }

  async getProducts(filters: any): Promise<{ products: Product[], total: number }> {
    let allProducts = Array.from(this.products.values()).filter(product => product.isActive);
    
    // Apply filters
    if (filters.categoryId) {
      allProducts = allProducts.filter(product => product.categoryId === filters.categoryId);
    }
    
    if (filters.brandId) {
      allProducts = allProducts.filter(product => product.brandId === filters.brandId);
    }
    
    if (filters.minPrice) {
      allProducts = allProducts.filter(product => parseFloat(product.price) >= filters.minPrice);
    }
    
    if (filters.maxPrice) {
      allProducts = allProducts.filter(product => parseFloat(product.price) <= filters.maxPrice);
    }
    
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      allProducts = allProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description?.toLowerCase().includes(searchTerm)
      );
    }
    
    // Apply sorting
    if (filters.sort) {
      switch (filters.sort) {
        case 'price_asc':
          allProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
          break;
        case 'price_desc':
          allProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
          break;
        case 'newest':
          allProducts.sort((a, b) => b.createdAt!.getTime() - a.createdAt!.getTime());
          break;
      }
    }
    
    const total = allProducts.length;
    const page = filters.page || 1;
    const limit = filters.limit || 10;
    const startIndex = (page - 1) * limit;
    const products = allProducts.slice(startIndex, startIndex + limit);
    
    return { products, total };
  }

  async getProductsByCategory(categoryId: number, page = 1, limit = 10): Promise<{ products: Product[], total: number }> {
    return this.getProducts({ categoryId, page, limit });
  }

  async getProductsByBrand(brandId: number, page = 1, limit = 10): Promise<{ products: Product[], total: number }> {
    return this.getProducts({ brandId, page, limit });
  }

  async searchProducts(query: string, filters: any = {}): Promise<{ products: Product[], total: number }> {
    return this.getProducts({ ...filters, search: query });
  }

  // Address operations
  async getAddress(id: number): Promise<Address | undefined> {
    return this.addresses.get(id);
  }

  async createAddress(address: InsertAddress): Promise<Address> {
    const id = this.generateId();
    const now = new Date();
    const newAddress: Address = {
      ...address,
      id,
      isDefault: address.isDefault ?? false,
      createdAt: now,
      updatedAt: now,
    };
    this.addresses.set(id, newAddress);
    return newAddress;
  }

  async updateAddress(id: number, updates: Partial<Address>): Promise<Address | undefined> {
    const address = this.addresses.get(id);
    if (!address) return undefined;
    
    const updatedAddress = { ...address, ...updates, updatedAt: new Date() };
    this.addresses.set(id, updatedAddress);
    return updatedAddress;
  }

  async deleteAddress(id: number): Promise<boolean> {
    return this.addresses.delete(id);
  }

  async getUserAddresses(userId: number): Promise<Address[]> {
    return Array.from(this.addresses.values()).filter(address => address.userId === userId);
  }

  // Order operations
  async getOrder(id: number): Promise<Order | undefined> {
    return this.orders.get(id);
  }

  async getOrderByNumber(orderNumber: string): Promise<Order | undefined> {
    return Array.from(this.orders.values()).find(order => order.orderNumber === orderNumber);
  }

  async createOrder(order: InsertOrder): Promise<Order> {
    const id = this.generateId();
    const now = new Date();
    const newOrder: Order = {
      ...order,
      id,
      orderNumber: this.generateOrderNumber(),
      status: order.status || "pending",
      tax: order.tax || "0",
      shipping: order.shipping || "0",
      discount: order.discount || "0",
      currency: order.currency || "USD",
      paymentStatus: order.paymentStatus || "pending",
      createdAt: now,
      updatedAt: now,
    };
    this.orders.set(id, newOrder);
    return newOrder;
  }

  async updateOrder(id: number, updates: Partial<Order>): Promise<Order | undefined> {
    const order = this.orders.get(id);
    if (!order) return undefined;
    
    const updatedOrder = { ...order, ...updates, updatedAt: new Date() };
    this.orders.set(id, updatedOrder);
    return updatedOrder;
  }

  async getUserOrders(userId: number, page = 1, limit = 10): Promise<{ orders: Order[], total: number }> {
    const userOrders = Array.from(this.orders.values()).filter(order => order.userId === userId);
    const total = userOrders.length;
    const startIndex = (page - 1) * limit;
    const orders = userOrders.slice(startIndex, startIndex + limit);
    return { orders, total };
  }

  async getAllOrders(page = 1, limit = 10): Promise<{ orders: Order[], total: number }> {
    const allOrders = Array.from(this.orders.values());
    const total = allOrders.length;
    const startIndex = (page - 1) * limit;
    const orders = allOrders.slice(startIndex, startIndex + limit);
    return { orders, total };
  }

  // Order item operations
  async createOrderItem(orderItem: InsertOrderItem): Promise<OrderItem> {
    const id = this.generateId();
    const newOrderItem: OrderItem = {
      ...orderItem,
      id,
      createdAt: new Date(),
    };
    this.orderItems.set(id, newOrderItem);
    return newOrderItem;
  }

  async getOrderItems(orderId: number): Promise<OrderItem[]> {
    return Array.from(this.orderItems.values()).filter(item => item.orderId === orderId);
  }

  // Cart operations
  async getCartItem(userId: number, productId: number): Promise<Cart | undefined> {
    return Array.from(this.cart.values()).find(item => item.userId === userId && item.productId === productId);
  }

  async addToCart(cartItem: InsertCart): Promise<Cart> {
    const id = this.generateId();
    const now = new Date();
    const newCartItem: Cart = {
      ...cartItem,
      id,
      createdAt: now,
      updatedAt: now,
    };
    this.cart.set(id, newCartItem);
    return newCartItem;
  }

  async updateCartItem(id: number, updates: Partial<Cart>): Promise<Cart | undefined> {
    const cartItem = this.cart.get(id);
    if (!cartItem) return undefined;
    
    const updatedCartItem = { ...cartItem, ...updates, updatedAt: new Date() };
    this.cart.set(id, updatedCartItem);
    return updatedCartItem;
  }

  async removeFromCart(id: number): Promise<boolean> {
    return this.cart.delete(id);
  }

  async getUserCart(userId: number): Promise<Cart[]> {
    return Array.from(this.cart.values()).filter(item => item.userId === userId);
  }

  async clearUserCart(userId: number): Promise<boolean> {
    const userCartItems = Array.from(this.cart.values()).filter(item => item.userId === userId);
    userCartItems.forEach(item => this.cart.delete(item.id));
    return true;
  }

  // Wishlist operations
  async getWishlistItem(userId: number, productId: number): Promise<Wishlist | undefined> {
    return Array.from(this.wishlist.values()).find(item => item.userId === userId && item.productId === productId);
  }

  async addToWishlist(wishlistItem: InsertWishlist): Promise<Wishlist> {
    const id = this.generateId();
    const newWishlistItem: Wishlist = {
      ...wishlistItem,
      id,
      createdAt: new Date(),
    };
    this.wishlist.set(id, newWishlistItem);
    return newWishlistItem;
  }

  async removeFromWishlist(id: number): Promise<boolean> {
    return this.wishlist.delete(id);
  }

  async getUserWishlist(userId: number): Promise<Wishlist[]> {
    return Array.from(this.wishlist.values()).filter(item => item.userId === userId);
  }

  // Review operations
  async getReview(id: number): Promise<Review | undefined> {
    return this.reviews.get(id);
  }

  async createReview(review: InsertReview): Promise<Review> {
    const id = this.generateId();
    const now = new Date();
    const newReview: Review = {
      ...review,
      id,
      isVerified: false,
      isApproved: review.isApproved ?? true,
      helpfulCount: 0,
      createdAt: now,
      updatedAt: now,
    };
    this.reviews.set(id, newReview);
    return newReview;
  }

  async updateReview(id: number, updates: Partial<Review>): Promise<Review | undefined> {
    const review = this.reviews.get(id);
    if (!review) return undefined;
    
    const updatedReview = { ...review, ...updates, updatedAt: new Date() };
    this.reviews.set(id, updatedReview);
    return updatedReview;
  }

  async deleteReview(id: number): Promise<boolean> {
    return this.reviews.delete(id);
  }

  async getProductReviews(productId: number, page = 1, limit = 10): Promise<{ reviews: Review[], total: number }> {
    const productReviews = Array.from(this.reviews.values()).filter(review => review.productId === productId && review.isApproved);
    const total = productReviews.length;
    const startIndex = (page - 1) * limit;
    const reviews = productReviews.slice(startIndex, startIndex + limit);
    return { reviews, total };
  }

  async getUserReviews(userId: number): Promise<Review[]> {
    return Array.from(this.reviews.values()).filter(review => review.userId === userId);
  }

  // Banner operations
  async getBanner(id: number): Promise<Banner | undefined> {
    return this.banners.get(id);
  }

  async createBanner(banner: InsertBanner): Promise<Banner> {
    const id = this.generateId();
    const now = new Date();
    const newBanner: Banner = {
      ...banner,
      id,
      position: banner.position || "hero",
      isActive: banner.isActive ?? true,
      sortOrder: banner.sortOrder ?? 0,
      createdAt: now,
      updatedAt: now,
    };
    this.banners.set(id, newBanner);
    return newBanner;
  }

  async updateBanner(id: number, updates: Partial<Banner>): Promise<Banner | undefined> {
    const banner = this.banners.get(id);
    if (!banner) return undefined;
    
    const updatedBanner = { ...banner, ...updates, updatedAt: new Date() };
    this.banners.set(id, updatedBanner);
    return updatedBanner;
  }

  async deleteBanner(id: number): Promise<boolean> {
    return this.banners.delete(id);
  }

  async getAllBanners(): Promise<Banner[]> {
    return Array.from(this.banners.values()).sort((a, b) => a.sortOrder - b.sortOrder);
  }

  async getActiveBanners(): Promise<Banner[]> {
    const now = new Date();
    return Array.from(this.banners.values())
      .filter(banner => {
        if (!banner.isActive) return false;
        if (banner.startDate && banner.startDate > now) return false;
        if (banner.endDate && banner.endDate < now) return false;
        return true;
      })
      .sort((a, b) => a.sortOrder - b.sortOrder);
  }

  // Coupon operations
  async getCoupon(id: number): Promise<Coupon | undefined> {
    return this.coupons.get(id);
  }

  async getCouponByCode(code: string): Promise<Coupon | undefined> {
    return Array.from(this.coupons.values()).find(coupon => coupon.code === code);
  }

  async createCoupon(coupon: InsertCoupon): Promise<Coupon> {
    const id = this.generateId();
    const now = new Date();
    const newCoupon: Coupon = {
      ...coupon,
      id,
      usedCount: 0,
      isActive: coupon.isActive ?? true,
      createdAt: now,
      updatedAt: now,
    };
    this.coupons.set(id, newCoupon);
    return newCoupon;
  }

  async updateCoupon(id: number, updates: Partial<Coupon>): Promise<Coupon | undefined> {
    const coupon = this.coupons.get(id);
    if (!coupon) return undefined;
    
    const updatedCoupon = { ...coupon, ...updates, updatedAt: new Date() };
    this.coupons.set(id, updatedCoupon);
    return updatedCoupon;
  }

  async deleteCoupon(id: number): Promise<boolean> {
    return this.coupons.delete(id);
  }

  async getAllCoupons(): Promise<Coupon[]> {
    return Array.from(this.coupons.values());
  }

  // Payment method operations
  async getPaymentMethod(id: number): Promise<PaymentMethod | undefined> {
    return this.paymentMethods.get(id);
  }

  async createPaymentMethod(paymentMethod: InsertPaymentMethod): Promise<PaymentMethod> {
    const id = this.generateId();
    const now = new Date();
    const newPaymentMethod: PaymentMethod = {
      ...paymentMethod,
      id,
      isDefault: paymentMethod.isDefault ?? false,
      createdAt: now,
      updatedAt: now,
    };
    this.paymentMethods.set(id, newPaymentMethod);
    return newPaymentMethod;
  }

  async updatePaymentMethod(id: number, updates: Partial<PaymentMethod>): Promise<PaymentMethod | undefined> {
    const paymentMethod = this.paymentMethods.get(id);
    if (!paymentMethod) return undefined;
    
    const updatedPaymentMethod = { ...paymentMethod, ...updates, updatedAt: new Date() };
    this.paymentMethods.set(id, updatedPaymentMethod);
    return updatedPaymentMethod;
  }

  async deletePaymentMethod(id: number): Promise<boolean> {
    return this.paymentMethods.delete(id);
  }

  async getUserPaymentMethods(userId: number): Promise<PaymentMethod[]> {
    return Array.from(this.paymentMethods.values()).filter(method => method.userId === userId);
  }
}

export const storage = new MemStorage();
