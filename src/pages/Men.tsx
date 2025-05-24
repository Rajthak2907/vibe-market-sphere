
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

  const highlightProducts = products.slice(0, 4);
  const trendingProducts = products.filter(p => p.isTrending).concat(products.slice(2, 4));
  const featuredBrands = products.slice(1, 5);

  const carouselImages = [
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
      title: "Summer Collection",
      subtitle: "Discover the latest trends for men"
    },
    {
      id: "2", 
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      title: "Formal Wear",
      subtitle: "Professional looks for every occasion"
    },
    {
      id: "3",
      url: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=800", 
      title: "Casual Comfort",
      subtitle: "Relaxed styles for everyday"
    },
    {
      id: "4",
      url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800",
      title: "Athletic Gear",
      subtitle: "Performance wear for active lifestyle"
    },
    {
      id: "5",
      url: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800",
      title: "Accessories",
      subtitle: "Complete your look with style"
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
    },
    {
      id: "accessories",
      name: "Accessories",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200",
      itemCount: 67,
      link: "/men/accessories"
    },
    {
      id: "sportswear",
      name: "Sportswear",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200",
      itemCount: 41,
      link: "/men/sportswear"
    },
    {
      id: "watches",
      name: "Watches",
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=200",
      itemCount: 23,
      link: "/men/watches"
    },
    {
      id: "bags",
      name: "Bags",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200",
      itemCount: 15,
      link: "/men/bags"
    }
  ];

  const categories2 = [
    {
      id: "formal",
      name: "Formal Wear",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
      itemCount: 34,
      link: "/men/formal"
    },
    {
      id: "casual",
      name: "Casual Wear", 
      image: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=200",
      itemCount: 52,
      link: "/men/casual"
    },
    {
      id: "winter",
      name: "Winter Wear",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200",
      itemCount: 26,
      link: "/men/winter"
    },
    {
      id: "ethnic",
      name: "Ethnic Wear",
      image: "https://images.unsplash.com/photo-1506629905607-d48aeb5cb8c1?w=200", 
      itemCount: 18,
      link: "/men/ethnic"
    },
    {
      id: "grooming",
      name: "Grooming",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=200",
      itemCount: 29,
      link: "/men/grooming"
    },
    {
      id: "sunglasses",
      name: "Sunglasses",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=200",
      itemCount: 21,
      link: "/men/sunglasses"
    }
  ];

  const midSeasonBanner = {
    id: "mid-season",
    title: "MID SEASON SALE",
    subtitle: "Up to 50% off on selected items",
    buttonText: "Shop Now",
    buttonLink: "/men/sale",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
    backgroundColor: "#1f2937"
  };

  const offerBanner1 = {
    id: "offer1",
    title: "Buy 2 Get 1 Free",
    subtitle: "On all casual wear collection",
    buttonText: "Explore Deals",
    buttonLink: "/men/offers",
    image: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=800",
    backgroundColor: "#dc2626"
  };

  const offerBanner2 = {
    id: "offer2", 
    title: "Flat 30% Off",
    subtitle: "On premium brands and accessories",
    buttonText: "Shop Collection",
    buttonLink: "/men/premium",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800",
    backgroundColor: "#059669"
  };

  const filterCategories = ["All", "T-Shirts", "Shirts", "Jeans", "Shoes", "Accessories"];

  return (
    <Layout>
      <div className="px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Men's Fashion</h1>
          <p className="text-gray-600">Discover the latest trends in men's clothing and accessories</p>
        </div>

        {/* Image Carousel */}
        <div className="mb-8">
          <ImageCarousel images={carouselImages} />
        </div>

        {/* First Category Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Shop by Category</h2>
          <div className="overflow-x-auto">
            <div className="flex space-x-4 pb-4 animate-scroll-left" style={{width: 'calc(100% + 200px)'}}>
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} size="medium" />
              ))}
            </div>
          </div>
        </div>

        {/* Second Category Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Style Collections</h2>
          <div className="overflow-x-auto">
            <div className="flex space-x-4 pb-4 animate-scroll-left" style={{width: 'calc(100% + 200px)'}}>
              {categories2.map((category) => (
                <CategoryCard key={category.id} category={category} size="medium" />
              ))}
            </div>
          </div>
        </div>

        {/* Highlight of the Day */}
        <ProductSlider title="Highlight of the day" products={highlightProducts} />

        {/* Featured Brands */}
        <ProductSlider title="Featured brands" products={featuredBrands} />

        {/* Mid Season Sale Banner */}
        <PromoBanner banner={midSeasonBanner} />

        {/* Trending Products */}
        <ProductSlider title="Trending products" products={trendingProducts} />

        {/* Offer Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PromoBanner banner={offerBanner1} />
          <PromoBanner banner={offerBanner2} />
        </div>

        {/* Filters and All Products */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="flex overflow-x-auto space-x-2 pb-2">
            {filterCategories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="ml-auto">
            <Select>
              <SelectTrigger className="w-48">
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
    </Layout>
  );
};

export default Men;
