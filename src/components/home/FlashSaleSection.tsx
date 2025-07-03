
import ProductCard from "@/components/shared/ProductCard";

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

interface FlashSaleSectionProps {
  products: Product[];
}

const FlashSaleSection = ({ products }: FlashSaleSectionProps) => {
  return (
    <section className="px-3">
      <div className="bg-white rounded-lg p-4">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-800">⚡ Flash Sale</h2>
          <p className="text-sm text-gray-600 mt-1">Limited time offers!</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashSaleSection;
