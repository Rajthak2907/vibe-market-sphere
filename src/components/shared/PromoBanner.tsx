
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PromoBannerProps {
  banner: {
    id: string;
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
    image: string;
    backgroundColor: string;
  };
}

const PromoBanner = ({ banner }: PromoBannerProps) => {
  return (
    <div 
      className="relative rounded-lg overflow-hidden h-32"
      style={{ backgroundColor: banner.backgroundColor }}
    >
      <div className="absolute inset-0">
        <img
          src={banner.image}
          alt={banner.title}
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      <div className="absolute inset-0 bg-black/30 flex items-center justify-between p-4">
        <div className="text-white">
          <h3 className="text-lg font-bold mb-1">{banner.title}</h3>
          <p className="text-sm">{banner.subtitle}</p>
        </div>
        <Link to={banner.buttonLink}>
          <Button 
            size="sm" 
            className="bg-white text-gray-800 hover:bg-gray-100 font-semibold"
          >
            {banner.buttonText}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PromoBanner;
