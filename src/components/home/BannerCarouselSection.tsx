
interface Banner {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  link: string;
}

interface BannerCarouselSectionProps {
  banners: Banner[];
}

const BannerCarouselSection = ({ banners }: BannerCarouselSectionProps) => {
  return (
    <section className="px-3">
      <div className="grid grid-cols-1 gap-3">
        {banners.map((banner) => (
          <div key={banner.id} className="relative rounded-lg overflow-hidden h-40">
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-lg font-bold">{banner.title}</h3>
                <p className="text-sm">{banner.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BannerCarouselSection;
