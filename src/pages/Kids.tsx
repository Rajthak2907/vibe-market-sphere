
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import ImageCarousel from "@/components/ImageCarousel";
import PromoBanner from "@/components/PromoBanner";
import ProductSlider from "@/components/ProductSlider";
import PocketFriendlySection from "@/components/PocketFriendlySection";
import DealOfTheDay from "@/components/DealOfTheDay";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Kids = () => {
  const products = [
    {
      id: "k1",
      name: "Cute Cartoon T-Shirt",
      price: 399,
      originalPrice: 699,
      rating: 4.6,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400",
      brand: "KidsFun",
      isNew: true
    },
    {
      id: "k2",
      name: "Comfortable School Uniform",
      price: 899,
      originalPrice: 1299,
      rating: 4.5,
      reviews: 167,
      image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=400",
      brand: "SchoolWear"
    },
    {
      id: "k3",
      name: "Colorful Party Dress",
      price: 1199,
      originalPrice: 1899,
      rating: 4.7,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1518917439142-deacd78191de?w=400",
      brand: "PartyKids",
      isTrending: true
    },
    {
      id: "k4",
      name: "Sports Sneakers",
      price: 799,
      originalPrice: 1299,
      rating: 4.4,
      reviews: 145,
      image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400",
      brand: "ActiveKids"
    }
  ];

  const carouselImages = [
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=800",
      title: "Kids Summer Collection",
      subtitle: "Adorable and comfortable styles"
    },
    {
      id: "2", 
      url: "https://images.unsplash.com/photo-1518917439142-deacd78191de?w=800",
      title: "Back to School Sale",
      subtitle: "Everything your little ones need"
    }
  ];

  const dealProduct = {
    id: "deal-k1",
    name: "Complete School Set",
    price: 1999,
    originalPrice: 3999,
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=400",
    brand: "SchoolComplete",
    isNew: true
  };

  const pocketFriendlyProducts = [
    {
      id: "pf-k1",
      name: "Basic Kids Tee",
      price: 199,
      originalPrice: 399,
      rating: 4.1,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400",
      brand: "KidsBasic"
    },
    {
      id: "pf-k2",
      name: "Casual Shorts",
      price: 299,
      originalPrice: 599,
      rating: 4.0,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400",
      brand: "ComfortKids"
    },
    {
      id: "pf-k3",
      name: "Canvas Shoes",
      price: 499,
      originalPrice: 899,
      rating: 4.2,
      reviews: 123,
      image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400",
      brand: "KidsStep"
    }
  ];

  const genzPicksProducts = [
    {
      id: "gz-k1",
      name: "Trendy Hoodie",
      price: 799,
      originalPrice: 1299,
      rating: 4.5,
      reviews: 134,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
      brand: "TrendyKids"
    },
    {
      id: "gz-k2",
      name: "Cool Sunglasses",
      price: 399,
      originalPrice: 699,
      rating: 4.3,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
      brand: "CoolKids"
    }
  ];

  const topBrandsProducts = [
    {
      id: "tb-k1",
      name: "Nike Kids Sneakers",
      price: 3999,
      originalPrice: 5999,
      rating: 4.8,
      reviews: 456,
      image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400",
      brand: "Nike"
    },
    {
      id: "tb-k2",
      name: "Adidas Kids Tracksuit",
      price: 2999,
      originalPrice: 4999,
      rating: 4.6,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400",
      brand: "Adidas"
    }
  ];

  const genzBrandsProducts = [
    {
      id: "gb-k1",
      name: "Trendy Kids Outfit",
      price: 1299,
      originalPrice: 2299,
      rating: 4.4,
      reviews: 167,
      image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400",
      brand: "KidsTrend"
    }
  ];

  const mensWardrobeProducts = [
    {
      id: "mw-k1",
      name: "Dad-Son Matching Tee",
      price: 899,
      originalPrice: 1599,
      rating: 4.7,
      reviews: 123,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      brand: "FamilyMatch"
    }
  ];

  const brandsDealsProducts = [
    {
      id: "bd-k1",
      name: "Disney Character Tee",
      price: 699,
      originalPrice: 1299,
      rating: 4.8,
      reviews: 345,
      image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400",
      brand: "Disney"
    }
  ];

  const womensWardrobeProducts = [
    {
      id: "ww-k1",
      name: "Mom-Daughter Dress Set",
      price: 1899,
      originalPrice: 3299,
      rating: 4.6,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1518917439142-deacd78191de?w=400",
      brand: "FamilyStyle"
    }
  ];

  const featuredBrandsProducts = [
    {
      id: "fb-k1",
      name: "Premium Kids Watch",
      price: 2999,
      originalPrice: 4999,
      rating: 4.5,
      reviews: 123,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      brand: "KidsTime"
    }
  ];

  const bestBrandsProducts = [
    {
      id: "bb-k1",
      name: "Smart Kids Tracker",
      price: 3999,
      originalPrice: 5999,
      rating: 4.4,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
      brand: "SafeKids"
    }
  ];

  const promoBanners = [
    {
      id: "promo-k1",
      title: "Kids Fashion Week",
      subtitle: "Up to 60% off on adorable styles",
      buttonText: "Shop Now",
      buttonLink: "/kids/sale",
      image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=800",
      backgroundColor: "#4A90E2"
    },
    {
      id: "promo-k2",
      title: "New Arrivals",
      subtitle: "Fresh kids collection just dropped",
      buttonText: "Explore",
      buttonLink: "/kids/new",
      image: "https://images.unsplash.com/photo-1518917439142-deacd78191de?w=800",
      backgroundColor: "#FF9A6B"
    },
    {
      id: "promo-k3",
      title: "Brand Festival",
      subtitle: "Best kids brands, unbeatable prices",
      buttonText: "Shop Brands",
      buttonLink: "/kids/brands",
      image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800",
      backgroundColor: "#FF6B9D"
    },
    {
      id: "promo-k4",
      title: "Final Sale",
      subtitle: "Last chance to grab kids deals",
      buttonText: "Grab Deals",
      buttonLink: "/kids/final-sale",
      image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=800",
      backgroundColor: "#4A90E2"
    }
  ];

  const filterCategories = ["All", "Boys", "Girls", "Shoes", "Toys", "Accessories"];
  const dealEndTime = new Date();
  dealEndTime.setHours(dealEndTime.getHours() + 4);

  return (
    <Layout>
      <div className="space-y-2 bg-gray-50">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-[#4A90E2] to-[#FF9A6B] text-white px-3 py-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold mb-1">Kids Fashion</h1>
            <p className="text-sm sm:text-base opacity-90">Adorable and comfortable clothing for your little ones</p>
          </div>
        </div>

        {/* Hero Carousel */}
        <div className="px-3">
          <ImageCarousel images={carouselImages} />
        </div>

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
        <ProductSlider title="🔥 GenZ Picks" products={genzPicksProducts} />

        {/* Top Brands on Offer */}
        <ProductSlider title="🏆 Top Brands on Offer" products={topBrandsProducts} />

        {/* Promo Banner 2 */}
        <section className="px-3">
          <PromoBanner banner={promoBanners[1]} />
        </section>

        {/* GenZ Brands on Offer */}
        <ProductSlider title="✨ GenZ Brands on Offer" products={genzBrandsProducts} />

        {/* Deals on Men's Wardrobe */}
        <ProductSlider title="👔 Deals on Men's Wardrobe" products={mensWardrobeProducts} />

        {/* Promo Banner 3 */}
        <section className="px-3">
          <PromoBanner banner={promoBanners[2]} />
        </section>

        {/* Brands Deal You Can't Miss */}
        <ProductSlider title="💎 Brands Deal You Can't Miss" products={brandsDealsProducts} />

        {/* Deals on Women's Wardrobe */}
        <ProductSlider title="👗 Deals on Women's Wardrobe" products={womensWardrobeProducts} />

        {/* Featured Brands */}
        <ProductSlider title="⭐ Featured Brands" products={featuredBrandsProducts} />

        {/* Best Brands */}
        <ProductSlider title="🎯 Best Brands" products={bestBrandsProducts} />

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
                      ? "bg-[#4A90E2] hover:bg-[#4A90E2]/90" 
                      : "border-gray-300 hover:border-[#4A90E2] hover:text-[#4A90E2]"
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

export default Kids;
