
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselImage {
  id: string;
  url: string;
  title: string;
  subtitle: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-48 rounded-lg overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-xl font-bold mb-2">{image.title}</h3>
              <p className="text-sm">{image.subtitle}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="sm"
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 rounded-full p-2"
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 rounded-full p-2"
      >
        <ChevronRight className="w-5 h-5" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
