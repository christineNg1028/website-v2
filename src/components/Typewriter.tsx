import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as TypewriterSVG } from "../assets/graphics/typewriter.svg";
import { ReactComponent as PaperSVG } from "../assets/graphics/paper.svg";
import { useTheme } from "../ThemeProvider"; // Assume this hook exists

export const Typewriter: React.FC = () => {
  const [text, setText] = useState("");
  const [paperPosition, setPaperPosition] = useState(110);
  const fullText = "Hi!\nI'm Christine";
  const paperRef = useRef<SVGSVGElement>(null);
  const typewriterRef = useRef<SVGSVGElement>(null);
  const { darkMode } = useTheme();

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index));
      setPaperPosition(110 - (index / fullText.length) * 80); // Move paper upwards
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
      }
    }, 100); // Adjust typing speed here (milliseconds)

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const strokeColor = darkMode ? "white" : "#333333";
    const fillColor = darkMode ? "#333333" : "white";

    // Update paper color
    const paperElement = paperRef.current;
    if (paperElement) {
      const rect = paperElement.querySelector("rect");
      if (rect) {
        rect.setAttribute("stroke", strokeColor);
      }
    }

    // Update typewriter color
    const typewriterElement = typewriterRef.current;
    if (typewriterElement) {
      const paths = typewriterElement.querySelectorAll("path");
      paths.forEach((path) => {
        path.setAttribute("stroke", strokeColor);
        path.setAttribute("fill", fillColor);
      });
    }
  }, [darkMode]);

  return (
    <div className="relative w-[486px] h-[450px]">
      <TypewriterSVG
        ref={typewriterRef}
        className="w-full h-full absolute top-0 left-0 z-10"
        style={{
          transform: "scale(0.8)",
          transformOrigin: "bottom center",
        }}
      />
      <div
        className="absolute left-[64px] w-[379px] transition-all duration-100 ease-linear overflow-hidden"
        style={{
          top: `${31}px`,
          height: `${150}px`,
        }}
      >
        <div
          className="relative"
          style={{
            transform: `translateY(${paperPosition}px)`,
          }}
        >
          <PaperSVG ref={paperRef} className="w-full h-[150px]" />
          <div
            className={`absolute top-6 left-[24px] w-[331px] font-semibold text-2xl font-mono whitespace-pre-line ${
              darkMode ? "text-white" : "text-[#333333]"
            }`}
          >
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};
