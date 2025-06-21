import { FC, ReactNode, useEffect, useRef, useState } from "react";

export const Carousel: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const scrollByAmount = 350;

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -scrollByAmount, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: scrollByAmount, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();

    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  return (
    <div className="relative group">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className={`absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white text-lg px-2 py-1 rounded-full z-10
              transition-opacity duration-200 ease-in-out
              ${
                canScrollLeft
                  ? "opacity-0 group-hover:opacity-100"
                  : "opacity-0 pointer-events-none"
              }
            `}
      >
        ←
      </button>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className={`absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white text-lg px-2 py-1 rounded-full z-10
              transition-opacity duration-200 ease-in-out
              ${
                canScrollRight
                  ? "opacity-0 group-hover:opacity-100"
                  : "opacity-0 pointer-events-none"
              }
            `}
      >
        →
      </button>

      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto flex-nowrap pb-2 scroll-smooth no-scrollbar"
      >
        {children}
      </div>
    </div>
  );
};
