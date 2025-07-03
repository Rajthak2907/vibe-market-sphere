
import { useRef } from "react";
import { Link } from "react-router-dom";

const FeaturedBrandsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const brands = [
    {
      id: "fb-1",
      name: "RENÉE",
      logo: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=100",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400",
      discount: "Up to 70% OFF",
      link: "/brands/renee"
    },
    {
      id: "fb-2",
      name: "Streax",
      logo: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=100", 
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400",
      discount: "Up to 50% OFF",
      link: "/brands/streax"
    },
    {
      id: "fb-3",
      name: "Lakme",
      logo: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=100",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400", 
      discount: "Up to 60% OFF",
      link: "/brands/lakme"
    }
  ];

  return (
    <section className="px-4 py-6 bg-white">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">FEATURED BRANDS</h2>
        <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-xs">AD</span>
      </div>
      
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 pb-2 scrollbar-hide scroll-smooth"
        style={{
          // 2.5 cards: each card is ~40% width, total = 2*40 + 20 = 100
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {brands.map((brand) => (
          <Link
            key={brand.id}
            to={brand.link}
            className="flex-shrink-0 w-[40vw] md:w-[30vw] max-w-xs"
            style={{ minWidth: "220px" }}
          >
            <div className="relative rounded-xl overflow-hidden h-64 group shadow-lg transition-all border-2 border-pink-100 hover:border-pink-300">
              <img 
                src={brand.image} 
                alt={brand.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white pointer-events-none">
                <h3 className="text-lg font-bold drop-shadow">{brand.name}</h3>
                <p className="text-sm bg-pink-500 px-2 py-1 rounded-full inline-block mt-1 drop-shadow">
                  {brand.discount}
                </p>
              </div>
              <div className="absolute top-4 left-4">
                <img src={brand.logo} alt={`${brand.name} logo`} className="w-10 h-10 rounded-full border-2 border-white shadow" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBrandsSection;
