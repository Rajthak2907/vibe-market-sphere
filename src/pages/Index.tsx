
import Layout from "@/components/Layout";
import ImageCarousel from "@/components/ImageCarousel";
import ProductCard from "@/components/ProductCard";
import FeaturedBrands from "@/components/FeaturedBrands";
import NarrowPromoCarousel from "@/components/NarrowPromoCarousel";
import PriceDroppedSection from "@/components/PriceDroppedSection";
import SkeletonLoader from "@/components/SkeletonLoader";
import PromoBanner from "@/components/PromoBanner";
import Footer from "@/components/Footer";
import ProductSlider from "@/components/ProductSlider";
import HeroSection from "@/components/home/HeroSection";
import QuickActions from "@/components/home/QuickActions";
import FlashSaleSection from "@/components/home/FlashSaleSection";
import CategoryFlashSaleSection from "@/components/home/CategoryFlashSaleSection";
import TrendingSection from "@/components/home/TrendingSection";
import NewArrivalsSection from "@/components/home/NewArrivalsSection";
import RecommendedSection from "@/components/home/RecommendedSection";
import ShopByBrandsSection from "@/components/home/ShopByBrandsSection";
import BankOffersSection from "@/components/home/BankOffersSection";
import TopPicksSection from "@/components/home/TopPicksSection";
import { useRef, useState, useEffect } from "react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const carouselImages = [{
    id: "1",
    url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
    title: "Summer Edit 2025",
    subtitle: "Big collection 40% off"
  }, {
    id: "2",
    url: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800",
    title: "Fashion Week Special",
    subtitle: "Exclusive Designer Wear"
  }];

  // Promotional banners data
  const promoBanners = [{
    id: "pb-1",
    title: "Mega Sale Weekend",
    subtitle: "Up to 70% off on everything",
    buttonText: "Shop Now",
    buttonLink: "/sale",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
    backgroundColor: "#fc2682"
  }, {
    id: "pb-2",
    title: "New Collection Drop",
    subtitle: "Fresh styles for the season",
    buttonText: "Explore",
    buttonLink: "/new-arrivals",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800",
    backgroundColor: "#08a0ef"
  }, {
    id: "pb-3",
    title: "Bank Offers",
    subtitle: "Extra 15% off with HDFC cards",
    buttonText: "Check Offers",
    buttonLink: "/bank-offers",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
    backgroundColor: "#f9b704"
  }];

  return (
    <Layout>
      <div className="space-y-6 bg-gray-50">
        <HeroSection carouselImages={carouselImages} isLoading={isLoading} />
        <QuickActions />
        <FlashSaleSection isLoading={isLoading} />
        
        {/* Large Promotional Banner */}
        <div className="px-4">
          <PromoBanner banner={promoBanners[0]} />
        </div>

        <CategoryFlashSaleSection isLoading={isLoading} />

        {/* Promotional Banner */}
        <div className="px-4">
          <PromoBanner banner={promoBanners[1]} />
        </div>

        <TrendingSection isLoading={isLoading} />
        <NewArrivalsSection isLoading={isLoading} />

        {/* Bank Offers Banner */}
        <div className="px-4">
          <PromoBanner banner={promoBanners[2]} />
        </div>

        <RecommendedSection isLoading={isLoading} />
        <ShopByBrandsSection isLoading={isLoading} />
        <BankOffersSection />
        <TopPicksSection isLoading={isLoading} />

        {/* Footer */}
        <Footer />
      </div>
    </Layout>
  );
};

export default Index;
