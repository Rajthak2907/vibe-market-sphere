import { storage } from "../storage.js";

export const searchController = {
  async globalSearch(req, res) {
    try {
      const query = req.query.q;
      const limit = parseInt(req.query.limit) || 10;
      
      if (!query || query.length < 2) {
        return res.status(400).json({
          success: false,
          error: {
            code: "INVALID_QUERY",
            message: "Search query must be at least 2 characters long",
          },
        });
      }
      
      // Search products
      const { products } = await storage.searchProducts(query, { limit });
      
      // Search categories
      const categories = await storage.getAllCategories();
      const matchingCategories = categories.filter(category =>
        category.name.toLowerCase().includes(query.toLowerCase()) ||
        category.description?.toLowerCase().includes(query.toLowerCase())
      ).slice(0, limit);
      
      // Search brands
      const brands = await storage.getAllBrands();
      const matchingBrands = brands.filter(brand =>
        brand.name.toLowerCase().includes(query.toLowerCase()) ||
        brand.description?.toLowerCase().includes(query.toLowerCase())
      ).slice(0, limit);
      
      res.json({
        success: true,
        data: {
          query,
          results: {
            products: products.map(product => ({
              id: product.id,
              name: product.name,
              slug: product.slug,
              price: product.price,
              image: product.images?.[0],
              type: "product",
            })),
            categories: matchingCategories.map(category => ({
              id: category.id,
              name: category.name,
              slug: category.slug,
              type: "category",
            })),
            brands: matchingBrands.map(brand => ({
              id: brand.id,
              name: brand.name,
              slug: brand.slug,
              type: "brand",
            })),
          },
          totalResults: products.length + matchingCategories.length + matchingBrands.length,
        },
      });
    } catch (error) {
      console.error("Global search error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "SEARCH_FAILED",
          message: "Search operation failed",
        },
      });
    }
  },

  async getSearchSuggestions(req, res) {
    try {
      const query = req.query.q;
      const limit = parseInt(req.query.limit) || 5;
      
      if (!query || query.length < 1) {
        return res.json({
          success: true,
          data: {
            suggestions: [],
          },
        });
      }
      
      // Get product suggestions
      const { products } = await storage.searchProducts(query, { limit });
      
      const suggestions = products.map(product => ({
        text: product.name,
        type: "product",
        id: product.id,
      }));
      
      // Add category suggestions
      const categories = await storage.getAllCategories();
      const categoryMatches = categories
        .filter(category => category.name.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 3)
        .map(category => ({
          text: category.name,
          type: "category",
          id: category.id,
        }));
      
      // Add brand suggestions
      const brands = await storage.getAllBrands();
      const brandMatches = brands
        .filter(brand => brand.name.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 3)
        .map(brand => ({
          text: brand.name,
          type: "brand",
          id: brand.id,
        }));
      
      const allSuggestions = [...suggestions, ...categoryMatches, ...brandMatches]
        .slice(0, limit);
      
      res.json({
        success: true,
        data: {
          suggestions: allSuggestions,
        },
      });
    } catch (error) {
      console.error("Get search suggestions error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "GET_SUGGESTIONS_FAILED",
          message: "Failed to get search suggestions",
        },
      });
    }
  },

  async filterProducts(req, res) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 12;
      const categoryIds = req.query.categories ? req.query.categories.split(",").map(id => parseInt(id)) : [];
      const brandIds = req.query.brands ? req.query.brands.split(",").map(id => parseInt(id)) : [];
      const minPrice = req.query.min_price ? parseFloat(req.query.min_price) : undefined;
      const maxPrice = req.query.max_price ? parseFloat(req.query.max_price) : undefined;
      const sizes = req.query.sizes ? req.query.sizes.split(",") : [];
      const colors = req.query.colors ? req.query.colors.split(",") : [];
      const minRating = req.query.min_rating ? parseInt(req.query.min_rating) : undefined;
      const inStock = req.query.in_stock === "true";
      const sort = req.query.sort || "newest";
      const search = req.query.search;
      
      // Build filters object
      const filters = {
        page,
        limit,
        minPrice,
        maxPrice,
        sort,
        search,
      };
      
      // Get products with basic filters
      let { products, total } = await storage.getProducts(filters);
      
      // Apply additional filters
      if (categoryIds.length > 0) {
        products = products.filter(product => categoryIds.includes(product.categoryId));
      }
      
      if (brandIds.length > 0) {
        products = products.filter(product => brandIds.includes(product.brandId));
      }
      
      if (inStock) {
        products = products.filter(product => product.inventory > 0);
      }
      
      // Filter by product specifications (size, color)
      if (sizes.length > 0 || colors.length > 0) {
        products = products.filter(product => {
          if (!product.specifications) return false;
          
          if (sizes.length > 0) {
            const productSize = product.specifications.size?.toLowerCase();
            const matchesSize = sizes.some(size => size.toLowerCase() === productSize);
            if (!matchesSize) return false;
          }
          
          if (colors.length > 0) {
            const productColor = product.specifications.color?.toLowerCase();
            const matchesColor = colors.some(color => color.toLowerCase() === productColor);
            if (!matchesColor) return false;
          }
          
          return true;
        });
      }
      
      // Filter by rating (would need to calculate from reviews)
      if (minRating) {
        // This is a simplified implementation
        // In a real app, you'd calculate average ratings from reviews
        products = products.filter(product => {
          // Mock rating calculation
          const mockRating = Math.floor(Math.random() * 5) + 1;
          return mockRating >= minRating;
        });
      }
      
      // Update total after filtering
      const filteredTotal = products.length;
      
      // Apply pagination to filtered results
      const startIndex = (page - 1) * limit;
      const paginatedProducts = products.slice(startIndex, startIndex + limit);
      
      // Get additional data for products
      const productsWithDetails = await Promise.all(
        paginatedProducts.map(async (product) => {
          let category = null;
          let brand = null;
          
          if (product.categoryId) {
            category = await storage.getCategory(product.categoryId);
          }
          
          if (product.brandId) {
            brand = await storage.getBrand(product.brandId);
          }
          
          return {
            ...product,
            category,
            brand,
          };
        })
      );
      
      res.json({
        success: true,
        data: {
          products: productsWithDetails,
          pagination: {
            page,
            limit,
            total: filteredTotal,
            pages: Math.ceil(filteredTotal / limit),
          },
          appliedFilters: {
            categories: categoryIds,
            brands: brandIds,
            priceRange: { min: minPrice, max: maxPrice },
            sizes,
            colors,
            minRating,
            inStock,
            sort,
            search,
          },
        },
      });
    } catch (error) {
      console.error("Filter products error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "FILTER_PRODUCTS_FAILED",
          message: "Failed to filter products",
        },
      });
    }
  },

  async getPriceRange(req, res) {
    try {
      const categoryId = req.query.category ? parseInt(req.query.category) : undefined;
      const brandId = req.query.brand ? parseInt(req.query.brand) : undefined;
      
      // Get products for price range calculation
      const filters = {};
      if (categoryId) filters.categoryId = categoryId;
      if (brandId) filters.brandId = brandId;
      
      const { products } = await storage.getProducts({ ...filters, limit: 10000 });
      
      if (products.length === 0) {
        return res.json({
          success: true,
          data: {
            priceRange: {
              min: 0,
              max: 0,
            },
          },
        });
      }
      
      const prices = products.map(product => parseFloat(product.price));
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      
      res.json({
        success: true,
        data: {
          priceRange: {
            min: Math.floor(minPrice),
            max: Math.ceil(maxPrice),
          },
        },
      });
    } catch (error) {
      console.error("Get price range error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "GET_PRICE_RANGE_FAILED",
          message: "Failed to get price range",
        },
      });
    }
  },

  async getFilters(req, res) {
    try {
      // Get all categories and brands for filter options
      const categories = await storage.getAllCategories();
      const brands = await storage.getAllBrands();
      
      // Get available sizes and colors from products
      const { products } = await storage.getProducts({ limit: 10000 });
      
      const sizes = new Set();
      const colors = new Set();
      
      products.forEach(product => {
        if (product.specifications) {
          if (product.specifications.size) {
            sizes.add(product.specifications.size);
          }
          if (product.specifications.color) {
            colors.add(product.specifications.color);
          }
        }
      });
      
      res.json({
        success: true,
        data: {
          filters: {
            categories: categories.map(category => ({
              id: category.id,
              name: category.name,
              slug: category.slug,
            })),
            brands: brands.map(brand => ({
              id: brand.id,
              name: brand.name,
              slug: brand.slug,
            })),
            sizes: Array.from(sizes).sort(),
            colors: Array.from(colors).sort(),
            sortOptions: [
              { value: "newest", label: "Newest" },
              { value: "price_asc", label: "Price: Low to High" },
              { value: "price_desc", label: "Price: High to Low" },
              { value: "rating", label: "Highest Rated" },
              { value: "popularity", label: "Most Popular" },
            ],
          },
        },
      });
    } catch (error) {
      console.error("Get filters error:", error);
      res.status(500).json({
        success: false,
        error: {
          code: "GET_FILTERS_FAILED",
          message: "Failed to get filter options",
        },
      });
    }
  },
};
