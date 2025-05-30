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
import NarrowPromoBanner from "@/components/NarrowPromoBanner";
import SectionHeader from "@/components/SectionHeader";
import FeaturedBrands from "@/components/FeaturedBrands";
import NarrowPromoCarousel from "@/components/NarrowPromoCarousel";
import PriceDroppedSection from "@/components/PriceDroppedSection";

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

  // Featured brands data
  const featuredBrands = [
    {
      id: "fb-1",
      name: "Nike",
      logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100",
      discount: "Up to 50% OFF",
      link: "/brands/nike"
    },
    {
      id: "fb-2",
      name: "Adidas",
      logo: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=100",
      discount: "Up to 40% OFF",
      link: "/brands/adidas"
    },
    {
      id: "fb-3",
      name: "Puma",
      logo: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=100",
      discount: "Up to 60% OFF",
      link: "/brands/puma"
    },
    {
      id: "fb-4",
      name: "Levi's",
      logo: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=100",
      discount: "Up to 45% OFF",
      link: "/brands/levis"
    },
    {
      id: "fb-5",
      name: "Ray-Ban",
      logo: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=100",
      discount: "Up to 35% OFF",
      link: "/brands/rayban"
    }
  ];

  // Top rated brands data
  const topRatedBrands = [
    {
      id: "tr-1",
      name: "Apple",
      logo: "https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?w=100",
      discount: "Up to 15% OFF",
      link: "/brands/apple"
    },
    {
      id: "tr-2",
      name: "Samsung",
      logo: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=100",
      discount: "Up to 25% OFF",
      link: "/brands/samsung"
    },
    {
      id: "tr-3",
      name: "Sony",
      logo: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100",
      discount: "Up to 30% OFF",
      link: "/brands/sony"
    },
    {
      id: "tr-4",
      name: "Canon",
      logo: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=100",
      discount: "Up to 20% OFF",
      link: "/brands/canon"
    }
  ];

  // Narrow promo carousel data
  const narrowPromos = [
    {
      id: "np-1",
      text: "🎉 Free Shipping on Orders Above ₹999",
      link: "/free-shipping",
      bgColor: "#FF6B9D"
    },
    {
      id: "np-2",
      text: "⚡ Lightning Deal: 70% OFF Electronics",
      link: "/electronics-deal",
      bgColor: "#4A90E2"
    },
    {
      id: "np-3",
      text: "🔥 Hot Sale: Buy 2 Get 1 Free on Fashion",
      link: "/fashion-sale",
      bgColor: "#FF9A6B"
    }
  ];

  // Price dropped products
  const priceDroppedProducts = [
    {
      id: "pd-1",
      name: "Wireless Headphones",
      price: 1999,
      originalPrice: 4999,
      rating: 4.5,
      reviews: 245,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      brand: "AudioTech",
      priceDropPercent: 60
    },
    {
      id: "pd-2",
      name: "Smart Watch",
      price: 2999,
      originalPrice: 7999,
      rating: 4.3,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      brand: "TechWear",
      priceDropPercent: 62
    },
    {
      id: "pd-3",
      name: "Running Shoes",
      price: 1599,
      originalPrice: 3999,
      rating: 4.6,
      reviews: 567,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
      brand: "SportFit",
      priceDropPercent: 60
    },
    {
      id: "pd-4",
      name: "Bluetooth Speaker",
      price: 899,
      originalPrice: 2499,
      rating: 4.2,
      reviews: 123,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
      brand: "SoundMax",
      priceDropPercent: 64
    }
  ];

  return (
    <Layout>
      <div className="space-y-4 bg-gray-50">
        {/* Category Tab Section */}
        <TabSection tabs={tabData} />

        {/* Round Product Category Component */}
        <RoundCategorySection categories={categories} />

        {/* Narrow Promo Banner */}
        <NarrowPromoBanner />

        {/* Hero Carousel - Full Width and Increased Height */}
        <div className="px-0">
          <div className="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden">
            <ImageCarousel images={carouselImages} />
          </div>
        </div>

        {/* Features Banner - Compact */}
        <FeaturesBanner />

        {/* Top Categories on Offer */}
        <section className="px-4">
          <SectionHeader title="🔥 Top Categories on Offer" viewAllLink="/categories" />
          <TopCategoriesOffer categories={topOfferCategories} />
        </section>

        {/* Deal of the Day */}
        <section className="px-4">
          <SectionHeader title="⚡ Deal of the Day" viewAllLink="/deals" />
          <DealOfTheDay product={dealProduct} endTime={dealEndTime} />
        </section>

        {/* Pocket Friendly Section */}
        <section className="px-4">
          <SectionHeader title="💰 Pocket Friendly" viewAllLink="/pocket-friendly" />
          <PocketFriendlySection products={pocketFriendlyProducts} />
        </section>

        {/* Featured Brands */}
        <section className="px-4">
          <SectionHeader title="⭐ Featured Brands" viewAllLink="/featured-brands" />
          <FeaturedBrands brands={featuredBrands} />
        </section>

        {/* Narrow Promo Carousel */}
        <NarrowPromoCarousel promos={narrowPromos} />

        {/* Top Rated Brands */}
        <section className="px-4">
          <SectionHeader title="🏆 Top Rated Brands" viewAllLink="/top-rated-brands" />
          <FeaturedBrands brands={topRatedBrands} />
        </section>

        {/* Price Dropped */}
        <section className="px-4">
          <SectionHeader title="📉 Price Dropped" viewAllLink="/price-dropped" />
          <PriceDroppedSection products={priceDroppedProducts} />
        </section>

        {/* Promo Banner 1 */}
        <section className="px-4">
          <PromoBanner banner={promoBanners[0]} />
        </section>

        {/* GenZ Picks */}
        <section className="px-4">
          <SectionHeader title="🔥 GenZ Picks" viewAllLink="/genz-picks" />
          <ProductSlider title="" products={genzPicksProducts} />
        </section>

        {/* Top Brands on Offer */}
        <section className="px-4">
          <SectionHeader title="🏆 Top Brands on Offer" viewAllLink="/top-brands" />
          <ProductSlider title="" products={topBrandsProducts} />
        </section>

        {/* Promo Banner 2 */}
        <section className="px-4">
          <PromoBanner banner={promoBanners[1]} />
        </section>

        {/* GenZ Brands on Offer */}
        <section className="px-4">
          <SectionHeader title="✨ GenZ Brands on Offer" viewAllLink="/genz-brands" />
          <ProductSlider title="" products={genzBrandsProducts} />
        </section>

        {/* Deals on Men's Wardrobe */}
        <section className="px-4">
          <SectionHeader title="👔 Deals on Men's Wardrobe" viewAllLink="/mens-deals" />
          <ProductSlider title="" products={mensWardrobeProducts} />
        </section>

        {/* Promo Banner 3 */}
        <section className="px-4">
          <PromoBanner banner={promoBanners[2]} />
        </section>

        {/* Brands Deal You Can't Miss */}
        <section className="px-4">
          <SectionHeader title="💎 Brands Deal You Can't Miss" viewAllLink="/brand-deals" />
          <ProductSlider title="" products={brandsDealsProducts} />
        </section>

        {/* Deals on Women's Wardrobe */}
        <section className="px-4">
          <SectionHeader title="👗 Deals on Women's Wardrobe" viewAllLink="/womens-deals" />
          <ProductSlider title="" products={womensWardrobeProducts} />
        </section>

        {/* Featured Brands */}
        <section className="px-4">
          <SectionHeader title="⭐ Featured Brands" viewAllLink="/featured-brands" />
          <ProductSlider title="" products={featuredBrandsProducts} />
        </section>

        {/* Best Brands */}
        <section className="px-4">
          <SectionHeader title="🎯 Best Brands" viewAllLink="/best-brands" />
          <ProductSlider title="" products={bestBrandsProducts} />
        </section>

        {/* Final Promo Banner */}
        <section className="px-4">
          <PromoBanner banner={promoBanners[3]} />
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </Layout>
  );
};

export default Index;
