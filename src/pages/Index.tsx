
import Layout from "@/components/Layout";
import ImageCarousel from "@/components/ImageCarousel";
import TabSection from "@/components/TabSection";
import SquareCategorySection from "@/components/SquareCategorySection";
import FeaturesBanner from "@/components/FeaturesBanner";
import TopCategoriesOffer from "@/components/TopCategoriesOffer";
import PocketFriendlySection from "@/components/PocketFriendlySection";
import PromoBanner from "@/components/PromoBanner";
import DealOfTheDay from "@/components/DealOfTheDay";
import ProductSlider from "@/components/ProductSlider";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";

const Index = () => {
  // Mock data
  const carouselImages = [
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
      title: "Summer Collection 2024",
      subtitle: "Up to 70% Off on Latest Trends"
    },
    {
      id: "2", 
      url: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800",
      title: "Fashion Week Special",
      subtitle: "Exclusive Designer Wear"
    },
    {
      id: "3",
      url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800",
      title: "Monsoon Sale",
      subtitle: "Flat 50% Off on Everything"
    },
    {
      id: "4",
      url: "https://images.unsplash.com/photo-1516762689617-e1cfddf819d1?w=800", 
      title: "New Arrivals",
      subtitle: "Latest Fashion Trends"
    }
  ];

  const categories = [
    { id: "1", name: "T-Shirts", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300", itemCount: 1200, link: "/men" },
    { id: "2", name: "Dresses", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300", itemCount: 800, link: "/women" },
    { id: "3", name: "Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300", itemCount: 950, link: "/men" },
    { id: "4", name: "Shoes", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300", itemCount: 600, link: "/accessories" },
    { id: "5", name: "Bags", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300", itemCount: 450, link: "/accessories" },
    { id: "6", name: "Watches", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300", itemCount: 320, link: "/accessories" },
  ];

  const subCategories = [
    { id: "1", name: "Casual Wear", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300", itemCount: 2100, link: "/men" },
    { id: "2", name: "Ethnic Wear", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300", itemCount: 1500, link: "/women" },
    { id: "3", name: "Kids Fashion", image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=300", itemCount: 890, link: "/kids" },
    { id: "4", name: "Sports Wear", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300", itemCount: 670, link: "/men" },
    { id: "5", name: "Party Wear", image: "https://images.unsplash.com/photo-1566479179817-c0e1b4cf9572?w=300", itemCount: 480, link: "/women" },
    { id: "6", name: "Winter Wear", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300", itemCount: 720, link: "/men" },
  ];

  const featuredProducts = [
    {
      id: "1",
      name: "Stylish Cotton T-Shirt with Premium Quality Fabric",
      price: 599,
      originalPrice: 999,
      rating: 4.5,
      reviews: 128,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      brand: "StyleCo",
      isNew: true
    },
    {
      id: "2", 
      name: "Designer Floral Print Dress for Special Occasions",
      price: 1299,
      originalPrice: 2199,
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400",
      brand: "FashionHub",
      isTrending: true
    },
    {
      id: "3",
      name: "Premium Denim Jeans with Perfect Fit and Comfort",
      price: 899,
      originalPrice: 1499,
      rating: 4.3,
      reviews: 245,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
      brand: "DenimCo"
    },
    {
      id: "4",
      name: "Luxury Leather Handbag with Multiple Compartments",
      price: 2499,
      originalPrice: 3999,
      rating: 4.7,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      brand: "LuxeBags",
      isTrending: true
    }
  ];

  const dealProduct = {
    id: "deal-1",
    name: "Premium Wireless Headphones with Noise Cancellation",
    price: 1999,
    originalPrice: 4999,
    rating: 4.9,
    reviews: 342,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    brand: "AudioMax",
    isNew: true
  };

  // Tab section data
  const tabData = [
    {
      name: "All",
      value: "all",
      products: featuredProducts
    },
    {
      name: "Men", 
      value: "men",
      products: featuredProducts.slice(0, 2)
    },
    {
      name: "Women",
      value: "women", 
      products: featuredProducts.slice(1, 3)
    },
    {
      name: "Kids",
      value: "kids",
      products: featuredProducts.slice(2, 4)
    }
  ];

  // Square categories data
  const squareCategories = [
    { id: "1", name: "T-Shirts", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300", link: "/men" },
    { id: "2", name: "Dresses", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300", link: "/women" },
    { id: "3", name: "Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300", link: "/men" },
    { id: "4", name: "Shoes", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300", link: "/accessories" }
  ];

  // Top categories on offer
  const topOfferCategories = [
    { id: "1", name: "Summer Wear", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300", discount: "Up to 70% OFF", link: "/women" },
    { id: "2", name: "Footwear", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300", discount: "Up to 50% OFF", link: "/accessories" },
    { id: "3", name: "Accessories", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300", discount: "Up to 60% OFF", link: "/accessories" },
    { id: "4", name: "Ethnic Wear", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300", discount: "Up to 40% OFF", link: "/women" }
  ];

  // Pocket friendly products
  const pocketFriendlyProducts = [
    {
      id: "pf-1",
      name: "Basic Cotton T-Shirt",
      price: 299,
      originalPrice: 599,
      rating: 4.2,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      brand: "BasicWear"
    },
    {
      id: "pf-2",
      name: "Casual Sneakers",
      price: 799,
      originalPrice: 1599,
      rating: 4.0,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
      brand: "ComfortFeet"
    },
    {
      id: "pf-3",
      name: "Simple Backpack",
      price: 599,
      originalPrice: 999,
      rating: 4.3,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      brand: "EverydayBags"
    },
    {
      id: "pf-4",
      name: "Classic Jeans",
      price: 699,
      originalPrice: 1299,
      rating: 4.1,
      reviews: 123,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
      brand: "DenimBasics"
    }
  ];

  const mainPromoBanner = {
    id: "main-promo",
    title: "FLASH SALE",
    subtitle: "Limited Time Offer - Don't Miss Out!",
    buttonText: "Shop Now",
    buttonLink: "/women",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600",
    backgroundColor: "#FF6B9D"
  };

  const promoBanners = [
    {
      id: "1",
      title: "MEGA FASHION SALE",
      subtitle: "Up to 80% Off on Top Brands",
      buttonText: "Shop Now",
      buttonLink: "/women",
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600",
      backgroundColor: "#FF6B9D"
    },
    {
      id: "2",
      title: "NEW ARRIVALS",
      subtitle: "Latest Trends Just Dropped",
      buttonText: "Explore",
      buttonLink: "/men",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600",
      backgroundColor: "#8B5CF6"
    }
  ];

  const brandOffers = [
    {
      id: "1",
      brand: "Nike",
      discount: "40% OFF",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300",
      link: "/brands/nike"
    },
    {
      id: "2",
      brand: "Adidas", 
      discount: "35% OFF",
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=300",
      link: "/brands/adidas"
    },
    {
      id: "3",
      brand: "Zara",
      discount: "50% OFF",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=300",
      link: "/brands/zara"
    },
    {
      id: "4",
      brand: "H&M",
      discount: "30% OFF", 
      image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=300",
      link: "/brands/hm"
    }
  ];

  const sponsoredProducts = [
    {
      id: "sp-1",
      name: "Smart Fitness Watch with Health Monitoring",
      price: 3499,
      originalPrice: 5999,
      rating: 4.6,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      brand: "TechFit"
    },
    {
      id: "sp-2",
      name: "Wireless Bluetooth Earbuds with Charging Case",
      price: 1299,
      originalPrice: 2499,
      rating: 4.4,
      reviews: 267,
      image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400",
      brand: "SoundWave"
    }
  ];

  const dealEndTime = new Date();
  dealEndTime.setHours(dealEndTime.getHours() + 8);

  return (
    <Layout>
      <div className="space-y-4 md:space-y-6">
        {/* Tab Section with All, Men, Women, Kids - Moved after navbar */}
        <TabSection tabs={tabData} />

        {/* Square Category Section - After tab section */}
        <SquareCategorySection categories={squareCategories} />

        {/* Hero Carousel */}
        <div className="px-2 sm:px-4 lg:px-6">
          <ImageCarousel images={carouselImages} />
        </div>

        {/* Features Banner */}
        <FeaturesBanner />

        {/* Top Categories on Offer */}
        <TopCategoriesOffer categories={topOfferCategories} />

        {/* Pocket Friendly Section */}
        <PocketFriendlySection products={pocketFriendlyProducts} />

        {/* Main Promo Banner */}
        <section className="px-2 sm:px-4 lg:px-6">
          <PromoBanner banner={mainPromoBanner} />
        </section>

        {/* Shop by Category - Mobile optimized */}
        <section className="px-2 sm:px-4 lg:px-6">
          <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Shop by Category</h2>
          <div className="flex overflow-x-auto space-x-3 md:space-x-4 pb-2">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>

        {/* Trending Collections - Mobile optimized */}
        <section className="px-2 sm:px-4 lg:px-6">
          <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Trending Collections</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
            {subCategories.map((category) => (
              <CategoryCard key={category.id} category={category} size="small" />
            ))}
          </div>
        </section>

        {/* Promo Banners */}
        <section className="px-2 sm:px-4 lg:px-6">
          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            {promoBanners.map((banner) => (
              <PromoBanner key={banner.id} banner={banner} />
            ))}
          </div>
        </section>

        {/* Deal of the Day */}
        <section className="px-2 sm:px-4 lg:px-6">
          <DealOfTheDay product={dealProduct} endTime={dealEndTime} />
        </section>

        {/* Brand Offers - Mobile optimized */}
        <section className="px-2 sm:px-4 lg:px-6">
          <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">🔥 Brand Offers</h2>
          <div className="flex overflow-x-auto space-x-3 md:space-x-4 pb-2">
            {brandOffers.map((offer) => (
              <div key={offer.id} className="flex-shrink-0 w-40 md:w-48 bg-white rounded-lg md:rounded-xl shadow-sm overflow-hidden">
                <div className="relative">
                  <img src={offer.image} alt={offer.brand} className="w-full h-24 md:h-32 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-1 md:bottom-2 left-1 md:left-2">
                    <h3 className="text-white font-bold text-sm md:text-base">{offer.brand}</h3>
                    <p className="text-white text-xs md:text-sm">{offer.discount}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="px-2 sm:px-4 lg:px-6">
          <ProductSlider title="Featured Products" products={featuredProducts} />
        </section>

        {/* Sponsored Products - Mobile optimized */}
        <section className="px-2 sm:px-4 lg:px-6">
          <div className="bg-gradient-to-r from-brand-blue/10 to-brand-pink/10 rounded-lg md:rounded-xl p-3 md:p-4">
            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">📱 Sponsored Products</h2>
            <div className="grid md:grid-cols-2 gap-3 md:gap-4">
              {sponsoredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
