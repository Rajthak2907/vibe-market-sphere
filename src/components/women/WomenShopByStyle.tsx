
import { Button } from "@/components/ui/button";

interface Subcategory {
  id: string;
  name: string;
  image: string;
  link: string;
}

interface WomenShopByStyleProps {
  subcategories: Subcategory[];
}

const WomenShopByStyle = ({ subcategories }: WomenShopByStyleProps) => {
  return (
    <section className="px-3">
      <div className="bg-white rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-semibold text-gray-800">Shop by Style</h2>
          <Button variant="outline" size="sm" className="text-xs border-obeyyo-red text-obeyyo-red hover:bg-obeyyo-red hover:text-white rounded-lg px-3 py-1.5">
            View All
          </Button>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {subcategories.map((subcategory) => (
            <div key={subcategory.id} className="text-center">
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 mb-1">
                <img
                  src={subcategory.image}
                  alt={subcategory.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-gray-600 leading-tight">{subcategory.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WomenShopByStyle;
