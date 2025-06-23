import { useEffect, useState } from "react";

export function useCurrentSection(sectionIds: string[]) {
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      let maxVisibleRatio = 0;
      let visibleSection = currentSection;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const visibleHeight =
          Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
        const sectionHeight = rect.height;

        const visibleRatio =
          visibleHeight > 0 ? visibleHeight / sectionHeight : 0;

        if (visibleRatio > maxVisibleRatio) {
          maxVisibleRatio = visibleRatio;
          visibleSection = id;
        }
      }

      if (visibleSection !== currentSection) {
        setCurrentSection(visibleSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, currentSection]);

  return currentSection;
}
