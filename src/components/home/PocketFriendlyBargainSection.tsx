
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

interface PocketFriendlyBargainSectionProps {
  products: Product[];
}

const PocketFriendlyBargainSection = ({ products }: PocketFriendlyBargainSectionProps) => {
  return (
    <section className="px-3">
      <div className="bg-white rounded-lg p-4">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-800">💰 Pocket Friendly Bargains</h2>
          <p className="text-sm text-gray-600 mt-1">Great products at amazing prices</p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {products.slice(0, 6).map((product) => (
            <div key={product.id} className="aspect-[3/4]">
              <ProductCard product={product} compact />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PocketFriendlyBargainSection;
