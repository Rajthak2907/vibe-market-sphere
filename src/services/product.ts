
import { apiCall, ApiResponse } from './api';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  salePrice?: number;
  images: string[];
  brand?: {
    id: string;
    name: string;
  };
  category?: {
    id: string;
    name: string;
  };
  stockQuantity: number;
  sku?: string;
  tags?: string[];
  isFeatured: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProductFilters {
  category?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  tags?: string[];
  featured?: boolean;
  search?: string;
  page?: number;
  limit?: number;
  sortBy?: 'price' | 'name' | 'createdAt';
  sortOrder?: 'asc' | 'desc';
}

export const productService = {
  // Get all products with filters
  async getProducts(filters: ProductFilters = {}): Promise<{ products: Product[]; total: number; page: number; limit: number }> {
    const queryParams = new URLSearchParams();
    
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        queryParams.append(key, value.toString());
      }
    });

    const response = await apiCall.get<{ products: Product[]; total: number; page: number; limit: number }>(`/products?${queryParams}`);
    
    if (response.success && response.data) {
      return response.data;
    }
    
    throw new Error(response.error?.message || 'Failed to fetch products');
  },

  // Get featured products
  async getFeaturedProducts(): Promise<Product[]> {
    const response = await apiCall.get<Product[]>('/products/featured');
    
    if (response.success && response.data) {
      return response.data;
    }
    
    throw new Error(response.error?.message || 'Failed to fetch featured products');
  },

  // Get trending products
  async getTrendingProducts(): Promise<Product[]> {
    const response = await apiCall.get<Product[]>('/products/trending');
    
    if (response.success && response.data) {
      return response.data;
    }
    
    throw new Error(response.error?.message || 'Failed to fetch trending products');
  },

  // Get single product
  async getProduct(id: string): Promise<Product> {
    const response = await apiCall.get<Product>(`/products/${id}`);
    
    if (response.success && response.data) {
      return response.data;
    }
    
    throw new Error(response.error?.message || 'Failed to fetch product');
  },

  // Search products
  async searchProducts(query: string, filters: ProductFilters = {}): Promise<{ products: Product[]; total: number }> {
    const searchFilters = { ...filters, search: query };
    const result = await this.getProducts(searchFilters);
    return {
      products: result.products,
      total: result.total
    };
  },
};
