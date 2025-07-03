
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import QuickActions from "@/components/home/QuickActions";
import FlashSaleSection from "@/components/home/FlashSaleSection";
import FeaturedBrandsSection from "@/components/home/FeaturedBrandsSection";
import NewArrivalsSection from "@/components/home/NewArrivalsSection";
import BestsellerCategorySection from "@/components/home/BestsellerCategorySection";
import TrendingSection from "@/components/home/TrendingSection";
import CategoryFlashSaleSection from "@/components/home/CategoryFlashSaleSection";
import PocketFriendlyBargainSection from "@/components/home/PocketFriendlyBargainSection";
import BannerCarouselSection from "@/components/home/BannerCarouselSection";
import BankOffersSection from "@/components/home/BankOffersSection";
import TodaysSpecialsSection from "@/components/home/TodaysSpecialsSection";
import TrendyThisWeekSection from "@/components/home/TrendyThisWeekSection";
import TopPicksSection from "@/components/home/TopPicksSection";
import RecommendedSection from "@/components/home/RecommendedSection";
import UniqueBestOfObeyyoSection from "@/components/home/UniqueBestOfObeyyoSection";
import StarsFromInstagramSection from "@/components/home/StarsFromInstagramSection";
import ShopByBrandsSection from "@/components/home/ShopByBrandsSection";
import { homePageData } from "@/data/homePageData";

const HomePage = () => {
  return (
    <Layout>
      <div className="space-y-2 bg-gray-50">
        <HeroSection 
          carouselImages={homePageData.carouselImages}
          isLoading={false}
          categories={homePageData.categories}
        />
        <QuickActions />
        <FlashSaleSection products={homePageData.flashSaleProducts} />
        <FeaturedBrandsSection brands={homePageData.featuredBrands} />
        <NewArrivalsSection products={homePageData.newArrivals} />
        <BestsellerCategorySection categories={homePageData.bestsellerCategories} />
        <TrendingSection products={homePageData.trendingProducts} />
        <CategoryFlashSaleSection categories={homePageData.categoryFlashSale} />
        <PocketFriendlyBargainSection products={homePageData.pocketFriendlyProducts} />
        <BannerCarouselSection banners={homePageData.bannerCarousel} />
        <BankOffersSection offers={homePageData.bankOffers} />
        <TodaysSpecialsSection products={homePageData.todaysSpecials} />
        <TrendyThisWeekSection products={homePageData.trendyThisWeek} />
        <TopPicksSection products={homePageData.topPicks} />
        <RecommendedSection products={homePageData.recommended} />
        <UniqueBestOfObeyyoSection products={homePageData.uniqueBestProducts} />
        <StarsFromInstagramSection posts={homePageData.instagramPosts} />
        <ShopByBrandsSection brands={homePageData.shopByBrands} />
      </div>
    </Layout>
  );
};

export default HomePage;
