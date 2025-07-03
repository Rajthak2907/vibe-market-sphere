
interface Brand {
  id: string;
  name: string;
  logo: string;
  link: string;
}

interface ShopByBrandsSectionProps {
  brands: Brand[];
}

const ShopByBrandsSection = ({ brands }: ShopByBrandsSectionProps) => {
  return (
    <section className="px-3">
      <div className="bg-white rounded-lg p-4">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-800">🏷️ Shop by Brands</h2>
          <p className="text-sm text-gray-600 mt-1">Explore your favorite brands</p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {brands.map((brand) => (
            <div key={brand.id} className="text-center">
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 mb-2 p-4">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-xs text-gray-600">{brand.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByBrandsSection;
