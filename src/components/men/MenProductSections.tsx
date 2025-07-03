
import ProductSlider from "@/components/shared/ProductSlider";
import DealOfTheDay from "@/components/shared/DealOfTheDay";
import ProductCard from "@/components/shared/ProductCard";
import { Button } from "@/components/ui/button";

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

interface MenProductSectionsProps {
  beautyProducts: Product[];
  footwearProducts: Product[];
  watchesProducts: Product[];
  perfumeProducts: Product[];
  dealProduct: Product;
  dealEndTime: Date;
  products: Product[];
}

const MenProductSections = ({ 
  beautyProducts, 
  footwearProducts, 
  watchesProducts, 
  perfumeProducts, 
  dealProduct, 
  dealEndTime, 
  products 
}: MenProductSectionsProps) => {
  return (
    <>
      <section className="px-3">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold text-gray-800">🧴 Men's Grooming & Beauty</h2>
          <Button variant="outline" size="sm" className="text-xs border-obeyyo-red text-obeyyo-red hover:bg-obeyyo-red hover:text-white rounded-lg px-3 py-1.5">
            View All
          </Button>
        </div>
        <ProductSlider title="" products={beautyProducts} />
      </section>

      <section className="px-3">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold text-gray-800">👟 Men's Footwear</h2>
          <Button variant="outline" size="sm" className="text-xs border-obeyyo-red text-obeyyo-red hover:bg-obeyyo-red hover:text-white rounded-lg px-3 py-1.5">
            View All
          </Button>
        </div>
        <ProductSlider title="" products={footwearProducts} />
      </section>

      <section className="px-3">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold text-gray-800">⌚ Men's Watches</h2>
          <Button variant="outline" size="sm" className="text-xs border-obeyyo-red text-obeyyo-red hover:bg-obeyyo-red hover:text-white rounded-lg px-3 py-1.5">
            View All
          </Button>
        </div>
        <ProductSlider title="" products={watchesProducts} />
      </section>

      <section className="px-3">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold text-gray-800">🌟 Men's Fragrances</h2>
          <Button variant="outline" size="sm" className="text-xs border-obeyyo-red text-obeyyo-red hover:bg-obeyyo-red hover:text-white rounded-lg px-3 py-1.5">
            View All
          </Button>
        </div>
        <ProductSlider title="" products={perfumeProducts} />
      </section>

      <section className="px-3">
        <DealOfTheDay product={dealProduct} endTime={dealEndTime} />
      </section>

      <div className="px-3">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MenProductSections;
