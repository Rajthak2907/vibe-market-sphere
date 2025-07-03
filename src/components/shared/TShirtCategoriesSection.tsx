
import { Button } from "@/components/ui/button";

interface TShirtCategory {
  id: string;
  name: string;
  image: string;
  link: string;
}

interface TShirtCategoriesSectionProps {
  categories: TShirtCategory[];
}

const TShirtCategoriesSection = ({ categories }: TShirtCategoriesSectionProps) => {
  return (
    <section className="px-3">
      <div className="bg-white rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-800">👕 T-Shirt Categories</h2>
          <Button variant="outline" size="sm" className="text-xs border-obeyyo-red text-obeyyo-red hover:bg-obeyyo-red hover:text-white rounded-lg px-3 py-1.5">
            View All
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-gray-50 rounded-lg p-3 text-center hover:shadow-md transition-shadow"
            >
              <div className="aspect-square bg-white rounded-lg mb-2 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs font-medium text-gray-800">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TShirtCategoriesSection;
