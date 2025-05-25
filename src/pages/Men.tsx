import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import ImageCarousel from "@/components/ImageCarousel";
import PromoBanner from "@/components/PromoBanner";
import ProductSlider from "@/components/ProductSlider";
import PocketFriendlySection from "@/components/PocketFriendlySection";
import DealOfTheDay from "@/components/DealOfTheDay";
import TabSection from "@/components/TabSection";
import RoundCategorySection from "@/components/RoundCategorySection";
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

  const dealProduct = {
    id: "deal-m1",
    name: "Premium Leather Jacket",
    price: 2999,
    originalPrice: 5999,
    rating: 4.8,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
    brand: "LeatherCraft",
    isNew: true
  };

  const pocketFriendlyProducts = [
    {
      id: "pf-m1",
      name: "Basic Cotton Tee",
      price: 299,
      originalPrice: 599,
      rating: 4.2,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      brand: "BasicWear"
    },
    {
      id: "pf-m2",
      name: "Casual Shorts",
      price: 499,
      originalPrice: 899,
      rating: 4.0,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400",
      brand: "CasualCo"
    },
    {
      id: "pf-m3",
      name: "Canvas Sneakers",
      price: 699,
      originalPrice: 1299,
      rating: 4.3,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
      brand: "SneakerHub"
    }
  ];

  const genzPicksProducts = [
    {
      id: "gz-m1",
      name: "Oversized Graphic Hoodie",
      price: 1299,
      originalPrice: 2499,
      rating: 4.8,
      reviews: 245,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
      brand: "UrbanVibe",
      isTrending: true
    },
    {
      id: "gz-m2",
      name: "Distressed Denim Jacket",
      price: 1599,
      originalPrice: 2999,
      rating: 4.6,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
      brand: "RebelWear"
    }
  ];

  const topBrandsProducts = [
    {
      id: "tb-m1",
      name: "Nike Air Max Sneakers",
      price: 8999,
      originalPrice: 12999,
      rating: 4.9,
      reviews: 892,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
      brand: "Nike"
    },
    {
      id: "tb-m2",
      name: "Adidas Track Jacket",
      price: 3999,
      originalPrice: 5999,
      rating: 4.7,
      reviews: 445,
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400",
      brand: "Adidas"
    }
  ];

  const genzBrandsProducts = [
    {
      id: "gb-m1",
      name: "Supreme Style Hoodie",
      price: 2999,
      originalPrice: 4999,
      rating: 4.5,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
      brand: "StreetCore"
    }
  ];

  const mensWardrobeProducts = [
    {
      id: "mw-m1",
      name: "Formal White Shirt",
      price: 1299,
      originalPrice: 2499,
      rating: 4.6,
      reviews: 456,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",
      brand: "ClassicMen"
    }
  ];

  const brandsDealsProducts = [
    {
      id: "bd-m1",
      name: "Ray-Ban Sunglasses",
      price: 7999,
      originalPrice: 12999,
      rating: 4.8,
      reviews: 456,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
      brand: "Ray-Ban"
    }
  ];

  const womensWardrobeProducts = [
    {
      id: "ww-m1",
      name: "Gift for Her - Silk Scarf",
      price: 899,
      originalPrice: 1599,
      rating: 4.5,
      reviews: 123,
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400",
      brand: "SilkTouch"
    }
  ];

  const featuredBrandsProducts = [
    {
      id: "fb-m1",
      name: "Premium Watch",
      price: 15999,
      originalPrice: 24999,
      rating: 4.9,
      reviews: 345,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      brand: "TimeMaster"
    }
  ];

  const bestBrandsProducts = [
    {
      id: "bb-m1",
      name: "Smart Fitness Tracker",
      price: 8999,
      originalPrice: 12999,
      rating: 4.6,
      reviews: 789,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
      brand: "FitTech"
    }
  ];

  const promoBanners = [
    {
      id: "promo-m1",
      title: "Men's Fashion Week",
      subtitle: "Up to 70% off on trending styles",
      buttonText: "Shop Now",
      buttonLink: "/men/sale",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
      backgroundColor: "#4A90E2"
    },
    {
      id: "promo-m2",
      title: "New Arrivals",
      subtitle: "Fresh men's collection just dropped",
      buttonText: "Explore",
      buttonLink: "/men/new",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      backgroundColor: "#FF9A6B"
    },
    {
      id: "promo-m3",
      title: "Brand Festival",
      subtitle: "Best men's brands, unbeatable prices",
      buttonText: "Shop Brands",
      buttonLink: "/men/brands",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d2d5f?w=800",
      backgroundColor: "#FF6B9D"
    },
    {
      id: "promo-m4",
      title: "Final Sale",
      subtitle: "Last chance to grab men's deals",
      buttonText: "Grab Deals",
      buttonLink: "/men/final-sale",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
      backgroundColor: "#4A90E2"
    }
  ];

  const categories = [
    {
      id: "c1",
      name: "T-Shirts",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100",
      link: "/men/tshirts"
    },
    {
      id: "c2",
      name: "Shirts",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=100",
      link: "/men/shirts"
    },
    {
      id: "c3",
      name: "Jeans",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=100",
      link: "/men/jeans"
    },
    {
      id: "c4",
      name: "Shoes",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100",
      link: "/men/shoes"
    },
    {
      id: "c5",
      name: "Jackets",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=100",
      link: "/men/jackets"
    },
    {
      id: "c6",
      name: "Watches",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100",
      link: "/men/watches"
    }
  ];

  const subcategories = [
    { id: "s1", name: "Casual Wear", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=80", link: "/men/casual" },
    { id: "s2", name: "Formal Wear", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=80", link: "/men/formal" },
    { id: "s3", name: "Sports Wear", image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=80", link: "/men/sports" },
    { id: "s4", name: "Party Wear", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80", link: "/men/party" },
    { id: "s5", name: "Winter Wear", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=80", link: "/men/winter" },
    { id: "s6", name: "Summer Collection", image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=80", link: "/men/summer" },
    { id: "s7", name: "Footwear", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=80", link: "/men/footwear" },
    { id: "s8", name: "Accessories", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=80", link: "/men/accessories" }
  ];

  const tabs = [
    { name: "All", value: "all", products: [] },
    { name: "Men", value: "men", products: [] },
    { name: "Women", value: "women", products: [] },
    { name: "Kids", value: "kids", products: [] }
  ];

  const filterCategories = ["All", "T-Shirts", "Shirts", "Jeans", "Shoes", "Accessories"];
  const dealEndTime = new Date();
  dealEndTime.setHours(dealEndTime.getHours() + 6);

  return (
    <Layout>
      <div className="space-y-2 bg-gray-50">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-[#FF6B9D] to-[#4A90E2] text-white px-3 py-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold mb-1">Men's Fashion</h1>
            <p className="text-sm sm:text-base opacity-90">Discover the latest trends in men's clothing</p>
          </div>
        </div>

        {/* Tabs Section */}
        <TabSection tabs={tabs} />

        {/* Shop by Category */}
        <RoundCategorySection categories={categories} />

        {/* Hero Carousel */}
        <div className="px-3">
          <ImageCarousel images={carouselImages} />
        </div>

        {/* Subcategory Section */}
        <section className="px-3">
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-semibold text-gray-800">Shop by Style</h2>
              <Button variant="outline" size="sm" className="text-xs border-[#FF6B9D] text-[#FF6B9D] hover:bg-[#FF6B9D] hover:text-white rounded-lg px-3 py-1.5">
                View All
              </Button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {subcategories.map((subcategory) => (
                <div key={subcategory.id} className="text-center">
                  <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 mb-1">
                    <img
                      src={subcategory.image}
                      alt={subcategory.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs text-gray-600 leading-tight">{subcategory.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deal of the Day */}
        <section className="px-3">
          <DealOfTheDay product={dealProduct} endTime={dealEndTime} />
        </section>

        {/* Pocket Friendly Section */}
        <PocketFriendlySection products={pocketFriendlyProducts} />

        {/* Promo Banner 1 */}
        <section className="px-3">
          <PromoBanner banner={promoBanners[0]} />
        </section>

        {/* GenZ Picks */}
        <section className="px-3">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-800">🔥 GenZ Picks</h2>
            <Button variant="outline" size="sm" className="text-xs border-[#FF6B9D] text-[#FF6B9D] hover:bg-[#FF6B9D] hover:text-white rounded-lg px-3 py-1.5">
              View All
            </Button>
          </div>
          <ProductSlider title="" products={genzPicksProducts} />
        </section>

        {/* Top Brands on Offer */}
        <section className="px-3">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-800">🏆 Top Brands on Offer</h2>
            <Button variant="outline" size="sm" className="text-xs border-[#FF6B9D] text-[#FF6B9D] hover:bg-[#FF6B9D] hover:text-white rounded-lg px-3 py-1.5">
              View All
            </Button>
          </div>
          <ProductSlider title="" products={topBrandsProducts} />
        </section>

        {/* Promo Banner 2 */}
        <section className="px-3">
          <PromoBanner banner={promoBanners[1]} />
        </section>

        {/* GenZ Brands on Offer */}
        <section className="px-3">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-800">✨ GenZ Brands on Offer</h2>
            <Button variant="outline" size="sm" className="text-xs border-[#FF6B9D] text-[#FF6B9D] hover:bg-[#FF6B9D] hover:text-white rounded-lg px-3 py-1.5">
              View All
            </Button>
          </div>
          <ProductSlider title="" products={genzBrandsProducts} />
        </section>

        {/* Deals on Men's Wardrobe */}
        <section className="px-3">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-800">👔 Deals on Men's Wardrobe</h2>
            <Button variant="outline" size="sm" className="text-xs border-[#FF6B9D] text-[#FF6B9D] hover:bg-[#FF6B9D] hover:text-white rounded-lg px-3 py-1.5">
              View All
            </Button>
          </div>
          <ProductSlider title="" products={mensWardrobeProducts} />
        </section>

        {/* Promo Banner 3 */}
        <section className="px-3">
          <PromoBanner banner={promoBanners[2]} />
        </section>

        {/* Brands Deal You Can't Miss */}
        <section className="px-3">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-800">💎 Brands Deal You Can't Miss</h2>
            <Button variant="outline" size="sm" className="text-xs border-[#FF6B9D] text-[#FF6B9D] hover:bg-[#FF6B9D] hover:text-white rounded-lg px-3 py-1.5">
              View All
            </Button>
          </div>
          <ProductSlider title="" products={brandsDealsProducts} />
        </section>

        {/* Deals on Women's Wardrobe */}
        <section className="px-3">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-800">👗 Deals on Women's Wardrobe</h2>
            <Button variant="outline" size="sm" className="text-xs border-[#FF6B9D] text-[#FF6B9D] hover:bg-[#FF6B9D] hover:text-white rounded-lg px-3 py-1.5">
              View All
            </Button>
          </div>
          <ProductSlider title="" products={womensWardrobeProducts} />
        </section>

        {/* Featured Brands */}
        <section className="px-3">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-800">⭐ Featured Brands</h2>
            <Button variant="outline" size="sm" className="text-xs border-[#FF6B9D] text-[#FF6B9D] hover:bg-[#FF6B9D] hover:text-white rounded-lg px-3 py-1.5">
              View All
            </Button>
          </div>
          <ProductSlider title="" products={featuredBrandsProducts} />
        </section>

        {/* Best Brands */}
        <section className="px-3">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-800">🎯 Best Brands</h2>
            <Button variant="outline" size="sm" className="text-xs border-[#FF6B9D] text-[#FF6B9D] hover:bg-[#FF6B9D] hover:text-white rounded-lg px-3 py-1.5">
              View All
            </Button>
          </div>
          <ProductSlider title="" products={bestBrandsProducts} />
        </section>

        {/* Final Promo Banner */}
        <section className="px-3">
          <PromoBanner banner={promoBanners[3]} />
        </section>

        {/* Filters */}
        <div className="px-3">
          <div className="flex flex-wrap items-center gap-3 py-3 border-t border-gray-200 bg-white rounded-lg">
            <div className="flex overflow-x-auto space-x-2 pb-2">
              {filterCategories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className={`whitespace-nowrap rounded-full text-xs px-3 py-1.5 ${
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
                <SelectTrigger className="w-40 rounded-full text-xs">
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
        </div>

        {/* Products Grid */}
        <div className="px-3">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
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
