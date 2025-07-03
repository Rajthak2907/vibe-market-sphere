
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ProductSlider from "@/components/ProductSlider";

interface RecommendedSectionProps {
  isLoading: boolean;
}

const RecommendedSection = ({ isLoading }: RecommendedSectionProps) => {
  const recommendedProducts = [{
    id: "r-1",
    name: "Slim Fit Jeans",
    price: 1299,
    originalPrice: 2499,
    rating: 4.6,
    reviews: 456,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
    brand: "DenimCo"
  }, {
    id: "r-2",
    name: "Canvas Backpack",
    price: 899,
    originalPrice: 1599,
    rating: 4.5,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    brand: "EverydayBags"
  }, {
    id: "r-3",
    name: "Wireless Earbuds",
    price: 1999,
    originalPrice: 3999,
    rating: 4.7,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    brand: "AudioTech"
  }];

  return (
    <section className="bg-gradient-to-r from-obeyyo-pink to-obeyyo-red mx-4 rounded-2xl p-4 bg-amber-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">🧠</span>
          <h2 className="text-lg font-bold text-zinc-950">Recommended for You</h2>
        </div>
        <Link to="/recommended" className="text-sm text-white/80 hover:text-white flex items-center gap-1 font-medium">
          View All <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
      <ProductSlider title="" products={recommendedProducts} />
    </section>
  );
};

export default RecommendedSection;
