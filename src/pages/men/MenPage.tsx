
import Layout from "@/components/layout/Layout";
import MenHeroSection from "@/components/men/MenHeroSection";
import MenShopByStyle from "@/components/men/MenShopByStyle";
import MenBrandsSection from "@/components/men/MenBrandsSection";
import MenProductSections from "@/components/men/MenProductSections";
import MenOffersSection from "@/components/men/MenOffersSection";
import { menPageData } from "@/data/menPageData";

const MenPage = () => {
  return (
    <Layout>
      <div className="space-y-2 bg-gray-50">
        <MenHeroSection 
          carouselImages={menPageData.carouselImages}
          categories={menPageData.categories}
        />
        <MenShopByStyle subcategories={menPageData.subcategories} />
        <MenBrandsSection 
          brandsFlexData={menPageData.brandsFlexData}
          topBrandsProducts={menPageData.topBrandsProducts}
          tshirtCategories={menPageData.tshirtCategories}
        />
        <MenOffersSection 
          couponsData={menPageData.couponsData}
          biggestOfferProducts={menPageData.biggestOfferProducts}
          everythingInOfferCategories={menPageData.everythingInOfferCategories}
          promoBanners={menPageData.promoBanners}
        />
        <MenProductSections 
          beautyProducts={menPageData.beautyProducts}
          footwearProducts={menPageData.footwearProducts}
          watchesProducts={menPageData.watchesProducts}
          perfumeProducts={menPageData.perfumeProducts}
          dealProduct={menPageData.dealProduct}
          dealEndTime={menPageData.dealEndTime}
          products={menPageData.products}
        />
      </div>
    </Layout>
  );
};

export default MenPage;
