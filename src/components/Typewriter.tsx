import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as TypewriterSVG } from "../assets/graphics/typewriter.svg";
import { ReactComponent as PaperSVG } from "../assets/graphics/paper.svg";
import { useTheme } from "../ThemeProvider"; // Assume this hook exists

export const Typewriter: React.FC = () => {
  const [text, setText] = useState("");
  const [paperHeight, setPaperHeight] = useState(0);
  const fullText = "Hi! :)\nI'm Christine";
  const paperRef = useRef<SVGSVGElement>(null);
  const typewriterRef = useRef<SVGSVGElement>(null);
  const { darkMode } = useTheme(); // Assume this hook provides darkMode

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index));
      setPaperHeight((index / fullText.length) * 148); // 148 is the full height of the paper
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
      }
    }, 100); // Adjust typing speed here (milliseconds)

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (paperRef.current) {
      const paperElement = paperRef.current.getElementById("paper");
      if (paperElement) {
        paperElement.setAttribute(
          "d",
          `M0 148 H379 V${148 - paperHeight} H0 V148 Z`
        );
      }
    }
  }, [paperHeight]);

  useEffect(() => {
    const color = darkMode ? "white" : "#333333";

    // Update paper color
    const paperElement = paperRef.current;
    if (paperElement) {
      const paths = paperElement.querySelectorAll("path");
      paths.forEach((path) => {
        path.setAttribute("stroke", color);
        path.setAttribute("fill", color);
      });
    }

    // Update typewriter color
    const typewriterElement = typewriterRef.current;
    if (typewriterElement) {
      const paths = typewriterElement.querySelectorAll("path");
      paths.forEach((path) => {
        path.setAttribute("stroke", color);
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
        className="absolute left-[53.5px] w-[379px] transition-all duration-100 ease-linear overflow-hidden"
        style={{
          top: `${31}px`,
          height: `${148}px`,
        }}
      >
        <PaperSVG ref={paperRef} className="w-full h-full" />
        <div
          className={`absolute top-6 left-[24px] w-[331px] font-semibold text-2xl font-mono whitespace-pre-line ${
            darkMode ? "text-[#333333]" : "text-[#FFFAF4]"
          }`}
          style={{ transform: `translateY(${148 - paperHeight}px)` }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};
