import { FC, useState } from "react";

type CarouselImage = {
  src: string;
  caption?: string;
  width?: string;
};

interface ImageCarouselProps {
  images: CarouselImage[];
}

export const ImageCarousel: FC<ImageCarouselProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const hasMultipleImages = images.length > 1;

  const nextImage = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative flex flex-col group w-full">
      <div className="relative w-full overflow-hidden">
        <img
          width={images[current].width ?? "100%"}
          src={images[current].src}
          alt={images[current].caption}
          className="block mx-auto object-cover rounded-xl transition-opacity duration-300 ease-in-out"
        />
        {hasMultipleImages && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white text-lg px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition duration-200"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white text-lg px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition duration-200"
            >
              →
            </button>
          </>
        )}
      </div>
      <span className="w-full text-center text-sm mt-2">
        {images[current].caption}
      </span>
    </div>
  );
};
