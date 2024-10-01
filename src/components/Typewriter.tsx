import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as TypewriterSVG } from "../assets/typewriter-light.svg";
import { ReactComponent as PaperSVG } from "../assets/paper.svg";

export const Typewriter: React.FC = () => {
  const [text, setText] = useState("");
  const [paperHeight, setPaperHeight] = useState(0);
  const fullText = "Hi! :)\nI'm Christine";
  const paperRef = useRef<SVGSVGElement>(null);

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

  return (
    <div className="relative w-[486px] h-[450px]">
      <TypewriterSVG
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
          className="absolute top-6 left-[24px] w-[331px] text-[#333333] font-semibold text-2xl font-mono whitespace-pre-line"
          style={{ transform: `translateY(${148 - paperHeight}px)` }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};
