import { FC, ReactNode } from "react";
import { useTheme } from "../../ThemeProvider";

export const Card: FC<{ children: ReactNode }> = ({ children }) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`border-2 border-dotted rounded-xl p-4 transition-shadow duration-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.3)] ${
        darkMode
          ? "border-white hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          : "border-[rgba(0,0,0,0.8)] hover:shadow-[0_0_10px_rgba(0,0,0,0.5)]"
      }`}
    >
      {children}
    </div>
  );
};
