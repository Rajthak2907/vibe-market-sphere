
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import ImageCarousel from "@/components/ImageCarousel";
import CategoryCard from "@/components/CategoryCard";
import PromoBanner from "@/components/PromoBanner";
import ProductSlider from "@/components/ProductSlider";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Men = () => {
  const products = [
    {
      id: "m1",
      name: "Classic Cotton T-Shirt",
      price: 599,
      originalPrice: 999,
      rating: 4.5,
      reviews: 128,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      brand: "StyleCo",
      isNew: true
    },
    {
      id: "m2",
      name: "Slim Fit Denim Jeans",
      price: 1299,
      originalPrice: 2199,
      rating: 4.3,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
      brand: "DenimCo"
    },
    {
      id: "m3",
      name: "Formal Dress Shirt",
      price: 899,
      originalPrice: 1499,
      rating: 4.7,
      reviews: 245,
      image: "https://images.unsplash.com/photo-1620001390628-11f5a2f0ab91?w=400",
      brand: "FormalWear"
    },
    {
      id: "m4",
      name: "Sports Running Shoes",
      price: 2499,
      originalPrice: 3999,
      rating: 4.8,
      reviews: 167,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
      brand: "SportMax",
      isTrending: true
    },
    {
      id: "m5",
      name: "Leather Jacket",
      price: 3499,
      originalPrice: 4999,
      rating: 4.6,
      reviews: 94,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
      brand: "LeatherCo",
      isTrending: true
    },
    {
      id: "m6",
      name: "Casual Polo Shirt",
      price: 799,
      originalPrice: 1299,
      rating: 4.4,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400",
      brand: "CasualWear"
    }
  ];

  const carouselImages = [
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
      title: "Men's Summer Collection",
      subtitle: "Discover the latest trends"
    },
    {
      id: "2", 
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      title: "Formal Wear Sale",
      subtitle: "Up to 50% off on suits & shirts"
    }
  ];

  const categories = [
    {
      id: "shirts",
      name: "Shirts",
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=200",
      itemCount: 45,
      link: "/men/shirts"
    },
    {
      id: "jeans", 
      name: "Jeans",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=200",
      itemCount: 32,
      link: "/men/jeans"
    },
    {
      id: "shoes",
      name: "Shoes", 
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200",
      itemCount: 28,
      link: "/men/shoes"
    },
    {
      id: "jackets",
      name: "Jackets",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200", 
      itemCount: 19,
      link: "/men/jackets"
    }
  ];

  const filterCategories = ["All", "T-Shirts", "Shirts", "Jeans", "Shoes", "Accessories"];

  return (
    <Layout>
      <div className="bg-white min-h-screen">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-[#FF6B9D] to-[#4A90E2] text-white px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Men's Fashion</h1>
            <p className="text-lg opacity-90">Discover the latest trends in men's clothing</p>
          </div>
        </div>

        <div className="px-4 sm:px-6 lg:px-8 py-6 space-y-8">
          {/* Image Carousel */}
          <ImageCarousel images={carouselImages} />

          {/* Category Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Shop by Category</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} size="medium" />
              ))}
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4 py-4 border-t border-gray-200">
            <div className="flex overflow-x-auto space-x-2 pb-2">
              {filterCategories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className={`whitespace-nowrap rounded-full ${
                    category === "All" 
                      ? "bg-[#FF6B9D] hover:bg-[#FF6B9D]/90" 
                      : "border-gray-300 hover:border-[#FF6B9D] hover:text-[#FF6B9D]"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="ml-auto">
              <Select>
                <SelectTrigger className="w-48 rounded-full">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Men;
