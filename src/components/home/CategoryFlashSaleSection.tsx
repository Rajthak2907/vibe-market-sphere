
interface Category {
  id: string;
  name: string;
  image: string;
  discount: string;
}

interface CategoryFlashSaleSectionProps {
  categories: Category[];
}

const CategoryFlashSaleSection = ({ categories }: CategoryFlashSaleSectionProps) => {
  return (
    <section className="px-3">
      <div className="bg-white rounded-lg p-4">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-800">⚡ Category Flash Sale</h2>
          <p className="text-sm text-gray-600 mt-1">Category-wise amazing deals</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {categories.map((category) => (
            <div key={category.id} className="relative rounded-lg overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-32 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-3">
                <span className="text-white font-semibold">{category.name}</span>
                <span className="text-yellow-400 text-sm">{category.discount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFlashSaleSection;
