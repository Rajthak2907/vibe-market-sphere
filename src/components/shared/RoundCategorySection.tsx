
import { Link } from "react-router-dom";

interface Category {
  id: string;
  name: string;
  image: string;
  link: string;
}

interface RoundCategorySectionProps {
  categories: Category[];
}

const RoundCategorySection = ({ categories }: RoundCategorySectionProps) => {
  return (
    <section className="px-4 py-4 bg-white">
      <div className="grid grid-cols-6 gap-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={category.link}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 mb-2 group-hover:shadow-lg transition-shadow">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs text-gray-700 font-medium">{category.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RoundCategorySection;
