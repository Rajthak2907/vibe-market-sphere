
import { useRef } from "react";
import ProductCard from "@/components/ProductCard";
import SectionHeader from "@/components/SectionHeader";

const PocketFriendlyBargainSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Sample pocket-friendly products
  const products = [
    {
      id: "pf-1",
      name: "Formal Shoes",
      price: 1249,
      originalPrice: 2499,
      rating: 4.2,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300",
      brand: "StyleCraft",
      category: "Under ₹1249"
    },
    {
      id: "pf-2", 
      name: "Pears Soap Pack",
      price: 199,
      originalPrice: 299,
      rating: 4.5,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300",
      brand: "Pears",
      category: "Under ₹199"
    },
    {
      id: "pf-3",
      name: "Premium Perfume",
      price: 449,
      originalPrice: 899,
      rating: 4.3,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300",
      brand: "Essence",
      category: "Under ₹449"
    },
    {
      id: "pf-4",
      name: "Face Sunscreen",
      price: 299,
      originalPrice: 499,
      rating: 4.4,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300",
      brand: "BellaVita",
      category: "Under ₹299"
    },
    {
      id: "pf-5",
      name: "Natural Shampoo",
      price: 399,
      originalPrice: 599,
      rating: 4.1,
      reviews: 145,
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=300",
      brand: "Herbal",
      category: "Under ₹399"
    }
  ];

  return (
    <section className="px-4 py-6 bg-gradient-to-r from-yellow-50 to-orange-50">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            💰 Pocket Friendly Bargain!
          </h2>
          <p className="text-sm text-gray-600">Where style matches savings</p>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 pb-2 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((product) => (
          <div key={product.id} className="flex-shrink-0 w-40">
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-32 object-cover rounded-lg mb-2"
              />
              <p className="text-xs text-orange-600 font-semibold">{product.category}</p>
              <h3 className="text-sm font-medium text-gray-800 truncate">{product.name}</h3>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-sm font-bold text-gray-900">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xs text-gray-500 line-through">₹{product.originalPrice}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PocketFriendlyBargainSection;
