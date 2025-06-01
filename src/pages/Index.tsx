import Layout from "@/components/Layout";
import ImageCarousel from "@/components/ImageCarousel";
import ProductCard from "@/components/ProductCard";
import FeaturedBrands from "@/components/FeaturedBrands";
import NarrowPromoCarousel from "@/components/NarrowPromoCarousel";
import PriceDroppedSection from "@/components/PriceDroppedSection";
import SkeletonLoader from "@/components/SkeletonLoader";
import PromoBanner from "@/components/PromoBanner";
import Footer from "@/components/Footer";
import { ChevronRight, Clock, TrendingUp, Star, Zap, Gift, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

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
    }
  ];

  const trendingProducts = [
    {
      id: "t-1",
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
      id: "t-2",
      name: "Cropped Denim Jacket",
      price: 1599,
      originalPrice: 2999,
      rating: 4.6,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
      brand: "RebelWear",
      isTrending: true
    },
    {
      id: "t-3",
      name: "Aesthetic Phone Case",
      price: 399,
      originalPrice: 799,
      rating: 4.5,
      reviews: 567,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
      brand: "TechStyle",
      isTrending: true
    }
  ];

  const flashSaleProducts = [
    {
      id: "fs-1",
      name: "Premium Wireless Headphones",
      price: 1999,
      originalPrice: 4999,
      rating: 4.9,
      reviews: 342,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      brand: "AudioMax",
      isFlashSale: true
    },
    {
      id: "fs-2",
      name: "Smart Fitness Tracker",
      price: 2499,
      originalPrice: 5999,
      rating: 4.7,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
      brand: "FitTech",
      isFlashSale: true
    }
  ];

  // New data for additional sections
  const categoryFlashSaleProducts = {
    men: [
      {
        id: "men-fs-1",
        name: "Classic Polo Shirt",
        price: 899,
        originalPrice: 1799,
        rating: 4.5,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
        brand: "MenStyle",
        isFlashSale: true
      },
      {
        id: "men-fs-2",
        name: "Cargo Pants",
        price: 1299,
        originalPrice: 2499,
        rating: 4.3,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
        brand: "UrbanMen",
        isFlashSale: true
      }
    ],
    women: [
      {
        id: "women-fs-1",
        name: "Floral Summer Dress",
        price: 1599,
        originalPrice: 2999,
        rating: 4.7,
        reviews: 189,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400",
        brand: "FloralWear",
        isFlashSale: true
      },
      {
        id: "women-fs-2",
        name: "Denim Jacket",
        price: 1199,
        originalPrice: 2299,
        rating: 4.4,
        reviews: 267,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
        brand: "DenimCo",
        isFlashSale: true
      }
    ],
    sports: [
      {
        id: "sports-fs-1",
        name: "Running Shoes",
        price: 2999,
        originalPrice: 5999,
        rating: 4.8,
        reviews: 445,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
        brand: "SportMax",
        isFlashSale: true
      }
    ],
    accessories: [
      {
        id: "acc-fs-1",
        name: "Smart Watch",
        price: 3999,
        originalPrice: 7999,
        rating: 4.6,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
        brand: "TechWear",
        isFlashSale: true
      }
    ]
  };

  const newArrivals = [
    {
      id: "na-1",
      name: "Designer Midi Dress",
      price: 2299,
      originalPrice: 3999,
      rating: 4.8,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400",
      brand: "ElegantWear",
      isNew: true
    },
    {
      id: "na-2",
      name: "Casual Cotton Tee",
      price: 599,
      originalPrice: 999,
      rating: 4.4,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      brand: "BasicWear",
      isNew: true
    },
    {
      id: "na-3",
      name: "Trendy Sneakers",
      price: 3499,
      originalPrice: 5999,
      rating: 4.7,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
      brand: "StreetWear",
      isNew: true
    }
  ];

  const topPicks = [
    {
      id: "tp-1",
      name: "Nike Air Max Sneakers",
      price: 8999,
      originalPrice: 12999,
      rating: 4.9,
      reviews: 892,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
      brand: "Nike",
      isTopRated: true
    },
    {
      id: "tp-2",
      name: "Premium Watch",
      price: 15999,
      originalPrice: 24999,
      rating: 4.8,
      reviews: 345,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      brand: "TimeMaster",
      isTopRated: true
    }
  ];

  const recommendedProducts = [
    {
      id: "r-1",
      name: "Slim Fit Jeans",
      price: 1299,
      originalPrice: 2499,
      rating: 4.6,
      reviews: 456,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
      brand: "DenimCo"
    },
    {
      id: "r-2",
      name: "Canvas Backpack",
      price: 899,
      originalPrice: 1599,
      rating: 4.5,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      brand: "EverydayBags"
    },
    {
      id: "r-3",
      name: "Wireless Earbuds",
      price: 1999,
      originalPrice: 3999,
      rating: 4.7,
      reviews: 567,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      brand: "AudioTech"
    }
  ];

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
      name: "Zara",
      logo: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=100",
      discount: "Up to 30% OFF",
      link: "/brands/zara"
    },
    {
      id: "fb-5",
      name: "H&M",
      logo: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=100",
      discount: "Up to 45% OFF",
      link: "/brands/hm"
    }
  ];

  // Promotional banners data
  const promoBanners = [
    {
      id: "pb-1",
      title: "Mega Sale Weekend",
      subtitle: "Up to 70% off on everything",
      buttonText: "Shop Now",
      buttonLink: "/sale",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
      backgroundColor: "#fc2682"
    },
    {
      id: "pb-2",
      title: "New Collection Drop",
      subtitle: "Fresh styles for the season",
      buttonText: "Explore",
      buttonLink: "/new-arrivals",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800",
      backgroundColor: "#08a0ef"
    },
    {
      id: "pb-3",
      title: "Bank Offers",
      subtitle: "Extra 15% off with HDFC cards",
      buttonText: "Check Offers",
      buttonLink: "/bank-offers",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
      backgroundColor: "#f9b704"
    }
  ];

  const bankOffers = [
    {
      id: "bo-1",
      bank: "HDFC Bank",
      offer: "15% off up to ₹3000",
      code: "HDFC15",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400"
    },
    {
      id: "bo-2",
      bank: "SBI Cards",
      offer: "10% off up to ₹2000",
      code: "SBI10",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400"
    },
    {
      id: "bo-3",
      bank: "ICICI Bank",
      offer: "12% off up to ₹2500",
      code: "ICICI12",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400"
    }
  ];

  const scroll = (direction: 'left' | 'right', ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const SectionHeader = ({ 
    title, 
    icon, 
    viewAllLink, 
    gradient = "from-[#fc2682] to-[#08a0ef]" 
  }: { 
    title: string; 
    icon?: React.ReactNode; 
    viewAllLink?: string;
    gradient?: string;
  }) => (
    <div className="flex items-center justify-between mb-4 px-4">
      <div className="flex items-center gap-2">
        {icon}
        <h2 className={`text-lg font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
          {title}
        </h2>
      </div>
      {viewAllLink && (
        <Link to={viewAllLink} className="text-sm text-obeyyo-blue hover:text-obeyyo-pink flex items-center gap-1 font-medium">
          View All <ChevronRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );

  const ProductSlider = ({ 
    products, 
    showSkeleton = false 
  }: { 
    products: any[];
    showSkeleton?: boolean;
  }) => {
    const sliderRef = useRef<HTMLDivElement>(null);

    return (
      <div 
        ref={sliderRef}
        className="flex overflow-x-auto space-x-4 pb-2 scrollbar-hide scroll-smooth px-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        {showSkeleton ? (
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex-shrink-0 w-48">
              <SkeletonLoader type="product" />
            </div>
          ))
        ) : (
          products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-48">
              <ProductCard product={product} />
            </div>
          ))
        )}
      </div>
    );
  };

  const FlashSaleTimer = () => {
    const [timeLeft, setTimeLeft] = useState({
      hours: 8,
      minutes: 45,
      seconds: 23
    });

    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev.seconds > 0) {
            return { ...prev, seconds: prev.seconds - 1 };
          } else if (prev.minutes > 0) {
            return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
          } else if (prev.hours > 0) {
            return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
          }
          return prev;
        });
      }, 1000);

      return () => clearInterval(timer);
    }, []);

    return (
      <div className="flex items-center gap-2 text-white">
        <Clock className="w-4 h-4" />
        <span className="text-sm font-semibold">
          {String(timeLeft.hours).padStart(2, '0')}:
          {String(timeLeft.minutes).padStart(2, '0')}:
          {String(timeLeft.seconds).padStart(2, '0')}
        </span>
      </div>
    );
  };

  const CategoryFlashSale = () => {
    const [activeCategory, setActiveCategory] = useState('men');
    const categories = [
      { id: 'men', name: "Men's", color: "#fc2682" },
      { id: 'women', name: "Women's", color: "#fc334d" },
      { id: 'sports', name: "Sports", color: "#08a0ef" },
      { id: 'accessories', name: "Accessories", color: "#f9b704" }
    ];

    return (
      <section className="bg-gradient-to-r from-obeyyo-orange to-obeyyo-red mx-4 rounded-2xl p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-white" />
            <h2 className="text-lg font-bold text-white">Category Flash Sale</h2>
          </div>
          <FlashSaleTimer />
        </div>
        
        {/* Category Tabs */}
        <div className="flex gap-2 mb-4 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex-shrink-0 px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                activeCategory === category.id 
                  ? 'bg-white text-gray-800' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <ProductSlider products={categoryFlashSaleProducts[activeCategory as keyof typeof categoryFlashSaleProducts]} showSkeleton={isLoading} />
      </section>
    );
  };

  const BankOffersSection = () => {
    const sliderRef = useRef<HTMLDivElement>(null);

    return (
      <section className="bg-gradient-to-r from-obeyyo-blue to-obeyyo-pink mx-4 rounded-2xl p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-white" />
            <h2 className="text-lg font-bold text-white">Bank Offers</h2>
          </div>
          <Link to="/bank-offers" className="text-sm text-white/80 hover:text-white flex items-center gap-1 font-medium">
            View All <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div 
          ref={sliderRef}
          className="flex overflow-x-auto space-x-4 pb-2 scrollbar-hide scroll-smooth"
        >
          {bankOffers.map((offer) => (
            <div key={offer.id} className="flex-shrink-0 w-72">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-white border border-white/30">
                <div className="flex items-center gap-3 mb-3">
                  <CreditCard className="w-8 h-8" />
                  <div>
                    <h3 className="font-bold text-lg">{offer.bank}</h3>
                    <p className="text-sm opacity-90">{offer.offer}</p>
                  </div>
                </div>
                <div className="bg-white/20 rounded-lg p-2 text-center">
                  <span className="font-bold">Code: {offer.code}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <Layout>
      <div className="space-y-6 bg-gray-50">
        {/* Personalized Greeting */}
        <div className="px-4 pt-4">
          <h1 className="text-xl font-bold bg-gradient-to-r from-obeyyo-pink to-obeyyo-blue bg-clip-text text-transparent">
            Hi there! 👋
          </h1>
          <p className="text-sm text-gray-600 mt-1">Discover amazing deals just for you</p>
        </div>

        {/* Hero Carousel */}
        <div className="px-4">
          <div className="relative w-full h-48 rounded-2xl overflow-hidden">
            {isLoading ? (
              <SkeletonLoader type="banner" />
            ) : (
              <ImageCarousel images={carouselImages} />
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="px-4">
          <div className="grid grid-cols-4 gap-3">
            {[
              { icon: "🔥", label: "Flash Sale", link: "/flash-sale", color: "#fc334d" },
              { icon: "🌟", label: "New Arrivals", link: "/new-arrivals", color: "#f9b704" },
              { icon: "🏆", label: "Top Brands", link: "/top-brands", color: "#08a0ef" },
              { icon: "💰", label: "Budget Picks", link: "/budget", color: "#fb8619" }
            ].map((action) => (
              <Link
                key={action.label}
                to={action.link}
                className="bg-white rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-all"
                style={{ borderTop: `3px solid ${action.color}` }}
              >
                <div className="text-2xl mb-2">{action.icon}</div>
                <span className="text-xs font-medium text-gray-700">{action.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Flash Sale with Timer */}
        <section className="bg-gradient-to-r from-obeyyo-red to-obeyyo-pink mx-4 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-white" />
              <h2 className="text-lg font-bold text-white">Flash Sale</h2>
            </div>
            <FlashSaleTimer />
          </div>
          <ProductSlider products={flashSaleProducts} showSkeleton={isLoading} />
        </section>

        {/* Large Promotional Banner */}
        <div className="px-4">
          <PromoBanner banner={promoBanners[0]} />
        </div>

        {/* Category Flash Sale */}
        <CategoryFlashSale />

        {/* Promotional Banner */}
        <div className="px-4">
          <PromoBanner banner={promoBanners[1]} />
        </div>

        {/* Trending Now */}
        <section className="bg-gradient-to-r from-obeyyo-yellow to-obeyyo-orange mx-4 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-white" />
              <h2 className="text-lg font-bold text-white">Trending Now</h2>
            </div>
            <Link to="/trending" className="text-sm text-white/80 hover:text-white flex items-center gap-1 font-medium">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <ProductSlider products={trendingProducts} showSkeleton={isLoading} />
        </section>

        {/* New Arrivals */}
        <section className="bg-gradient-to-r from-obeyyo-blue to-obeyyo-pink mx-4 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-lg">🌟</span>
              <h2 className="text-lg font-bold text-white">New Arrivals</h2>
            </div>
            <Link to="/new-arrivals" className="text-sm text-white/80 hover:text-white flex items-center gap-1 font-medium">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <ProductSlider products={newArrivals} showSkeleton={isLoading} />
        </section>

        {/* Bank Offers Banner */}
        <div className="px-4">
          <PromoBanner banner={promoBanners[2]} />
        </div>

        {/* Recommended for You */}
        <section className="bg-gradient-to-r from-obeyyo-pink to-obeyyo-red mx-4 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-lg">🧠</span>
              <h2 className="text-lg font-bold text-white">Recommended for You</h2>
            </div>
            <Link to="/recommended" className="text-sm text-white/80 hover:text-white flex items-center gap-1 font-medium">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <ProductSlider products={recommendedProducts} showSkeleton={isLoading} />
        </section>

        {/* Shop by Brands */}
        <section className="bg-gradient-to-r from-obeyyo-orange to-obeyyo-yellow mx-4 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-white" />
              <h2 className="text-lg font-bold text-white">Shop by Brands</h2>
            </div>
            <Link to="/brands" className="text-sm text-white/80 hover:text-white flex items-center gap-1 font-medium">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          {isLoading ? (
            <div className="flex gap-4 overflow-x-auto">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex-shrink-0 w-32">
                  <SkeletonLoader type="brand" />
                </div>
              ))}
            </div>
          ) : (
            <FeaturedBrands brands={featuredBrands} />
          )}
        </section>

        {/* Bank Offers Section */}
        <BankOffersSection />

        {/* Top Picks */}
        <section className="bg-gradient-to-r from-obeyyo-blue to-obeyyo-orange mx-4 rounded-2xl p-4 pb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-lg">🏆</span>
              <h2 className="text-lg font-bold text-white">Top Picks</h2>
            </div>
            <Link to="/top-picks" className="text-sm text-white/80 hover:text-white flex items-center gap-1 font-medium">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <ProductSlider products={topPicks} showSkeleton={isLoading} />
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </Layout>
  );
};

export default Index;
