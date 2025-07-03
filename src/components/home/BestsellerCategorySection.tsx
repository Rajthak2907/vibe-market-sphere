
interface Category {
  id: string;
  name: string;
  image: string;
  link: string;
}

interface BestsellerCategorySectionProps {
  categories: Category[];
}

const BestsellerCategorySection = ({ categories }: BestsellerCategorySectionProps) => {
  return (
    <section className="px-3">
      <div className="bg-white rounded-lg p-4">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-800">🏆 Bestseller Categories</h2>
          <p className="text-sm text-gray-600 mt-1">Most popular categories</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {categories.map((category) => (
            <div key={category.id} className="relative rounded-lg overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-24 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white font-semibold">{category.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestsellerCategorySection;
