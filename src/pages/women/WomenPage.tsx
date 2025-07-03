
import Layout from "@/components/layout/Layout";
import WomenHeroSection from "@/components/women/WomenHeroSection";
import WomenShopByStyle from "@/components/women/WomenShopByStyle";
import WomenBrandsSection from "@/components/women/WomenBrandsSection";
import WomenProductSections from "@/components/women/WomenProductSections";
import WomenOffersSection from "@/components/women/WomenOffersSection";
import { womenPageData } from "@/data/womenPageData";

const WomenPage = () => {
  return (
    <Layout>
      <div className="space-y-4 bg-gray-50">
        <WomenHeroSection 
          carouselImages={womenPageData.carouselImages}
          categories={womenPageData.categories}
        />
        <WomenShopByStyle subcategories={womenPageData.subcategories} />
        <WomenBrandsSection 
          brandsFlexData={womenPageData.brandsFlexData}
          topBrandsProducts={womenPageData.topBrandsProducts}
          tshirtCategories={womenPageData.tshirtCategories}
        />
        <WomenOffersSection 
          couponsData={womenPageData.couponsData}
          biggestOfferProducts={womenPageData.biggestOfferProducts}
          everythingInOfferCategories={womenPageData.everythingInOfferCategories}
          promoBanners={womenPageData.promoBanners}
        />
        <WomenProductSections 
          beautyProducts={womenPageData.beautyProducts}
          footwearProducts={womenPageData.footwearProducts}
          watchesProducts={womenPageData.watchesProducts}
          perfumeProducts={womenPageData.perfumeProducts}
          dealProduct={womenPageData.dealProduct}
          dealEndTime={womenPageData.dealEndTime}
          products={womenPageData.products}
        />
      </div>
    </Layout>
  );
};

export default WomenPage;
