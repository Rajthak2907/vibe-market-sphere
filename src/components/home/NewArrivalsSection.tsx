
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ProductSlider from "@/components/ProductSlider";
import SectionBanner from "@/components/SectionBanner";

interface NewArrivalsSectionProps {
  isLoading: boolean;
}

const NewArrivalsSection = ({ isLoading }: NewArrivalsSectionProps) => {
  const newArrivals = [{
    id: "na-1",
    name: "Designer Midi Dress",
    price: 2299,
    originalPrice: 3999,
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400",
    brand: "ElegantWear",
    isNew: true
  }, {
    id: "na-2",
    name: "Casual Cotton Tee",
    price: 599,
    originalPrice: 999,
    rating: 4.4,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    brand: "BasicWear",
    isNew: true
  }, {
    id: "na-3",
    name: "Trendy Sneakers",
    price: 3499,
    originalPrice: 5999,
    rating: 4.7,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    brand: "StreetWear",
    isNew: true
  }];

  return (
    <section className="bg-gradient-to-r from-obeyyo-blue to-obeyyo-pink mx-4 rounded-2xl p-4 bg-zinc-200">
      <div className="mb-4">
        <SectionBanner
          title="New Arrivals"
          subtitle="Fresh styles for the season"
          imageUrl="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800"
          height="h-28"
        />
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">🌟</span>
          <h2 className="text-lg font-bold text-zinc-800">Latest Collection</h2>
        </div>
        <Link to="/new-arrivals" className="text-sm text-white/80 hover:text-white flex items-center gap-1 font-medium">
          View All <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
      <ProductSlider title="" products={newArrivals} />
    </section>
  );
};

export default NewArrivalsSection;
