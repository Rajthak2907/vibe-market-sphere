
import { useRef } from "react";
import ProductCard from "@/components/ProductCard";

interface ProductSliderProps {
  title: string;
  products: Array<{
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
  }>;
}

const ProductSlider = ({ title, products }: ProductSliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <section className="px-4 py-4 bg-white">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-semibold text-gray-800">{title}</h2>
      </div>
      
      <div 
        ref={sliderRef}
        className="flex overflow-x-auto space-x-3 pb-2 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((product) => (
          <div key={product.id} className="flex-shrink-0 w-40">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSlider;
