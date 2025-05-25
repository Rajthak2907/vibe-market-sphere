
import Layout from "@/components/Layout";
import ImageCarousel from "@/components/ImageCarousel";
import TabSection from "@/components/TabSection";
import RoundCategorySection from "@/components/RoundCategorySection";
import FeaturesBanner from "@/components/FeaturesBanner";
import TopCategoriesOffer from "@/components/TopCategoriesOffer";
import PocketFriendlySection from "@/components/PocketFriendlySection";
import DealOfTheDay from "@/components/DealOfTheDay";
import PromoBanner from "@/components/PromoBanner";
import ProductSlider from "@/components/ProductSlider";
import Footer from "@/components/Footer";

const Index = () => {
  // Mock data
  const carouselImages = [
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
      title: "Summer Edit 2025",
      subtitle: "Big collection 40% off"
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
      title: "Flash Sale",
      subtitle: "Limited Time Offer - Don't Miss Out!"
    }
  ];

  // Categories matching the reference design
  const categories = [
    { id: "1", name: "T-Shirts", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300", itemCount: 1200, link: "/men" },
    { id: "2", name: "Kurtas", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300", itemCount: 800, link: "/women" },
    { id: "3", name: "Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300", itemCount: 950, link: "/men" },
    { id: "4", name: "Shoes", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300", itemCount: 600, link: "/accessories" },
    { id: "5", name: "Bags", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300", itemCount: 450, link: "/accessories" },
    { id: "6", name: "Watches", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300", itemCount: 320, link: "/accessories" },
    { id: "7", name: "Sarees", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300", itemCount: 750, link: "/women" },
    { id: "8", name: "Sports", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300", itemCount: 540, link: "/men" }
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

  // Tab section data - simplified since we're not showing products in the All tab
  const tabData = [
    {
      name: "All",
      value: "all",
      products: []
    },
    {
      name: "Men", 
      value: "men",
      products: []
    },
    {
      name: "Women",
      value: "women", 
      products: []
    },
    {
      name: "Kids",
      value: "kids",
      products: []
    }
  ];

  // Top categories on offer matching reference design
  const topOfferCategories = [
    { id: "1", name: "Casual Shirts", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300", discount: "Up to 70% OFF", link: "/men" },
    { id: "2", name: "Designer Dresses", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300", discount: "Up to 50% OFF", link: "/women" },
    { id: "3", name: "Accessories", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300", discount: "Up to 60% OFF", link: "/accessories" },
    { id: "4", name: "Luxury Watches", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300", discount: "Up to 40% OFF", link: "/accessories" }
  ];

  // Pocket friendly products
  const pocketFriendlyProducts = [
    {
      id: "pf-1",
      name: "Casual Cotton Tee",
      price: 299,
      originalPrice: 599,
      rating: 4.2,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      brand: "BasicWear"
    },
    {
      id: "pf-2",
      name: "Slim Fit Jeans",
      price: 799,
      originalPrice: 1599,
      rating: 4.0,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
      brand: "DenimCo"
    },
    {
      id: "pf-3",
      name: "Canvas Backpack",
      price: 599,
      originalPrice: 999,
      rating: 4.3,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      brand: "EverydayBags"
    },
    {
      id: "pf-4",
      name: "Sports Sneakers",
      price: 699,
      originalPrice: 1299,
      rating: 4.1,
      reviews: 123,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
      brand: "SportFit"
    },
    {
      id: "pf-5",
      name: "Cotton Kurta",
      price: 449,
      originalPrice: 899,
      rating: 4.4,
      reviews: 78,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400",
      brand: "EthnicWear"
    },
    {
      id: "pf-6",
      name: "Casual Shirt",
      price: 599,
      originalPrice: 1199,
      rating: 4.2,
      reviews: 134,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400",
      brand: "StyleCo"
    }
  ];

  // GenZ picks products
  const genzPicksProducts = [
    {
      id: "gz-1",
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
      id: "gz-2",
      name: "Cropped Denim Jacket",
      price: 1599,
      originalPrice: 2999,
      rating: 4.6,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
      brand: "RebelWear"
    },
    {
      id: "gz-3",
      name: "Aesthetic Phone Case",
      price: 399,
      originalPrice: 799,
      rating: 4.5,
      reviews: 567,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
      brand: "TechStyle"
    }
  ];

  // Top brands products
  const topBrandsProducts = [
    {
      id: "tb-1",
      name: "Nike Air Max Sneakers",
      price: 8999,
      originalPrice: 12999,
      rating: 4.9,
      reviews: 892,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
      brand: "Nike"
    },
    {
      id: "tb-2",
      name: "Adidas Track Jacket",
      price: 3999,
      originalPrice: 5999,
      rating: 4.7,
      reviews: 445,
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400",
      brand: "Adidas"
    },
    {
      id: "tb-3",
      name: "Levi's Classic Jeans",
      price: 2999,
      originalPrice: 4999,
      rating: 4.6,
      reviews: 723,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
      brand: "Levi's"
    }
  ];

  // GenZ brands products
  const genzBrandsProducts = [
    {
      id: "gb-1",
      name: "Aesthetic Crop Top",
      price: 899,
      originalPrice: 1599,
      rating: 4.4,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400",
      brand: "VibeCheck"
    },
    {
      id: "gb-2",
      name: "Y2K Style Sunglasses",
      price: 699,
      originalPrice: 1299,
      rating: 4.3,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
      brand: "RetroFuture"
    },
    {
      id: "gb-3",
      name: "Baggy Cargo Pants",
      price: 1799,
      originalPrice: 2999,
      rating: 4.5,
      reviews: 345,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400",
      brand: "StreetCore"
    }
  ];

  // Men's wardrobe products
  const mensWardrobeProducts = [
    {
      id: "mw-1",
      name: "Formal White Shirt",
      price: 1299,
      originalPrice: 2499,
      rating: 4.6,
      reviews: 456,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",
      brand: "ClassicMen"
    },
    {
      id: "mw-2",
      name: "Casual Chinos",
      price: 1599,
      originalPrice: 2999,
      rating: 4.4,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400",
      brand: "SmartCasual"
    },
    {
      id: "mw-3",
      name: "Leather Belt",
      price: 799,
      originalPrice: 1499,
      rating: 4.7,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      brand: "LeatherCraft"
    }
  ];

  // Women's wardrobe products
  const womensWardrobeProducts = [
    {
      id: "ww-1",
      name: "Elegant Midi Dress",
      price: 2299,
      originalPrice: 3999,
      rating: 4.8,
      reviews: 567,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400",
      brand: "ElegantWear"
    },
    {
      id: "ww-2",
      name: "Designer Handbag",
      price: 3999,
      originalPrice: 6999,
      rating: 4.6,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      brand: "LuxeBags"
    },
    {
      id: "ww-3",
      name: "Silk Scarf",
      price: 899,
      originalPrice: 1599,
      rating: 4.5,
      reviews: 123,
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400",
      brand: "SilkTouch"
    }
  ];

  // Featured brands products
  const featuredBrandsProducts = [
    {
      id: "fb-1",
      name: "Premium Watch",
      price: 15999,
      originalPrice: 24999,
      rating: 4.9,
      reviews: 345,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      brand: "TimeMaster"
    },
    {
      id: "fb-2",
      name: "Designer Perfume",
      price: 4999,
      originalPrice: 7999,
      rating: 4.7,
      reviews: 456,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400",
      brand: "FragrancePro"
    },
    {
      id: "fb-3",
      name: "Luxury Wallet",
      price: 2999,
      originalPrice: 4999,
      rating: 4.8,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      brand: "LeatherLux"
    }
  ];

  // Best brands products
  const bestBrandsProducts = [
    {
      id: "bb-1",
      name: "Smart Fitness Tracker",
      price: 8999,
      originalPrice: 12999,
      rating: 4.6,
      reviews: 789,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
      brand: "FitTech"
    },
    {
      id: "bb-2",
      name: "Wireless Earbuds",
      price: 3999,
      originalPrice: 6999,
      rating: 4.5,
      reviews: 567,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
      brand: "AudioPro"
    },
    {
      id: "bb-3",
      name: "Gaming Mouse",
      price: 2499,
      originalPrice: 3999,
      rating: 4.7,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400",
      brand: "GameGear"
    }
  ];

  // Brands deal products
  const brandsDealsProducts = [
    {
      id: "bd-1",
      name: "Ray-Ban Sunglasses",
      price: 7999,
      originalPrice: 12999,
      rating: 4.8,
      reviews: 456,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
      brand: "Ray-Ban"
    },
    {
      id: "bd-2",
      name: "Calvin Klein Perfume",
      price: 3499,
      originalPrice: 5999,
      rating: 4.6,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400",
      brand: "Calvin Klein"
    },
    {
      id: "bd-3",
      name: "Tommy Hilfiger Shirt",
      price: 2999,
      originalPrice: 4999,
      rating: 4.5,
      reviews: 345,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",
      brand: "Tommy Hilfiger"
    }
  ];

  // Promo banners data
  const promoBanners = [
    {
      id: "promo-1",
      title: "Summer Sale",
      subtitle: "Up to 70% off on all categories",
      buttonText: "Shop Now",
      buttonLink: "/sale",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
      backgroundColor: "#FF6B9D"
    },
    {
      id: "promo-2",
      title: "New Arrivals",
      subtitle: "Fresh styles just dropped",
      buttonText: "Explore",
      buttonLink: "/new",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800",
      backgroundColor: "#FF9A6B"
    },
    {
      id: "promo-3",
      title: "Brand Festival",
      subtitle: "Biggest brands, best prices",
      buttonText: "Shop Brands",
      buttonLink: "/brands",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800",
      backgroundColor: "#4A90E2"
    },
    {
      id: "promo-4",
      title: "Final Sale",
      subtitle: "Last chance to save big",
      buttonText: "Grab Deals",
      buttonLink: "/final-sale",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
      backgroundColor: "#FF6B9D"
    }
  ];

  const dealEndTime = new Date();
  dealEndTime.setHours(dealEndTime.getHours() + 8);

  return (
    <Layout>
      <div className="space-y-6 bg-white">
        {/* 1. Navbar (handled by Layout) */}
        
        {/* 2. Category Tab Section */}
        <TabSection tabs={tabData} />

        {/* 3. Round Product Category Component */}
        <RoundCategorySection categories={categories} />

        {/* 4. Hero Carousel */}
        <div className="px-3 sm:px-4 lg:px-6">
          <ImageCarousel images={carouselImages} />
        </div>

        {/* 5. Features Banner */}
        <FeaturesBanner />

        {/* 6. Top Categories on Offer */}
        <TopCategoriesOffer categories={topOfferCategories} />

        {/* 7. ⚡ Deal of the Day */}
        <section className="px-3 sm:px-4 lg:px-6">
          <DealOfTheDay product={dealProduct} endTime={dealEndTime} />
        </section>

        {/* 8. Pocket Friendly Section with Slider */}
        <PocketFriendlySection products={pocketFriendlyProducts} />

        {/* 9. Promo Banner 1 */}
        <section className="px-3 sm:px-4 lg:px-6">
          <PromoBanner banner={promoBanners[0]} />
        </section>

        {/* 10. GenZ Picks */}
        <section className="px-3 sm:px-4 lg:px-6">
          <ProductSlider title="🔥 GenZ Picks" products={genzPicksProducts} />
        </section>

        {/* 11. Top Brands on Offer */}
        <section className="px-3 sm:px-4 lg:px-6">
          <ProductSlider title="🏆 Top Brands on Offer" products={topBrandsProducts} />
        </section>

        {/* 12. Promo Banner 2 */}
        <section className="px-3 sm:px-4 lg:px-6">
          <PromoBanner banner={promoBanners[1]} />
        </section>

        {/* 13. GenZ Brands on Offer */}
        <section className="px-3 sm:px-4 lg:px-6">
          <ProductSlider title="✨ GenZ Brands on Offer" products={genzBrandsProducts} />
        </section>

        {/* 14. Deals on Men's Wardrobe */}
        <section className="px-3 sm:px-4 lg:px-6">
          <ProductSlider title="👔 Deals on Men's Wardrobe" products={mensWardrobeProducts} />
        </section>

        {/* 15. Promo Banner 3 */}
        <section className="px-3 sm:px-4 lg:px-6">
          <PromoBanner banner={promoBanners[2]} />
        </section>

        {/* 16. Brands Deal You Can't Miss */}
        <section className="px-3 sm:px-4 lg:px-6">
          <ProductSlider title="💎 Brands Deal You Can't Miss" products={brandsDealsProducts} />
        </section>

        {/* 17. Deals on Women's Wardrobe */}
        <section className="px-3 sm:px-4 lg:px-6">
          <ProductSlider title="👗 Deals on Women's Wardrobe" products={womensWardrobeProducts} />
        </section>

        {/* 18. Featured Brands */}
        <section className="px-3 sm:px-4 lg:px-6">
          <ProductSlider title="⭐ Featured Brands" products={featuredBrandsProducts} />
        </section>

        {/* 19. Best Brands */}
        <section className="px-3 sm:px-4 lg:px-6">
          <ProductSlider title="🎯 Best Brands" products={bestBrandsProducts} />
        </section>

        {/* 20. Final Promo Banner */}
        <section className="px-3 sm:px-4 lg:px-6">
          <PromoBanner banner={promoBanners[3]} />
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </Layout>
  );
};

export default Index;
