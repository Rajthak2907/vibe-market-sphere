
import BrandsFlexSection from "@/components/shared/BrandsFlexSection";
import TShirtCategoriesSection from "@/components/shared/TShirtCategoriesSection";
import ProductSlider from "@/components/shared/ProductSlider";
import { Button } from "@/components/ui/button";

interface Brand {
  id: string;
  name: string;
  logo: string;
  discount?: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  brand: string;
  isNew?: boolean;
  isTrending?: boolean;
}

interface TShirtCategory {
  id: string;
  name: string;
  image: string;
  link: string;
}

interface WomenBrandsSectionProps {
  brandsFlexData: Brand[];
  topBrandsProducts: Product[];
  tshirtCategories: TShirtCategory[];
}

const WomenBrandsSection = ({ brandsFlexData, topBrandsProducts, tshirtCategories }: WomenBrandsSectionProps) => {
  return (
    <>
      <BrandsFlexSection brands={brandsFlexData} />
      
      <section className="px-3">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold text-gray-800">🏆 Biggest Brands On Offers</h2>
          <Button variant="outline" size="sm" className="text-xs border-obeyyo-red text-obeyyo-red hover:bg-obeyyo-red hover:text-white rounded-lg px-3 py-1.5">
            View All
          </Button>
        </div>
        <ProductSlider title="" products={topBrandsProducts} />
      </section>

      <TShirtCategoriesSection categories={tshirtCategories} />
    </>
  );
};

export default WomenBrandsSection;
