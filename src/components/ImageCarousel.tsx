import { useEffect, useState } from 'react';
import { MyImages } from '../data/MyImages';

const SLIDE_DURATION = 3000; // 3 seconds per slide

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const selectedArtworks = MyImages.slice(0, 4); // Get first 5 artworks

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => 
        current === selectedArtworks.length - 1 ? 0 : current + 1
      );
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl">
      {/* Images */}
      <div 
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {selectedArtworks.map((artwork) => (
          <div 
            key={artwork.id}
            className="flex-shrink-0 w-full h-full"
          >
            <img
              src={artwork.imageUrl}
              alt={artwork.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {selectedArtworks.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white w-4' 
                : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}