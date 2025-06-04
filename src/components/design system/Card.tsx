import { FC, ReactNode } from "react";
import { useTheme } from "../../ThemeProvider";

export const Card: FC<{
  children: ReactNode;
  img?: string;
  className?: string;
}> = ({ img, children, className }) => {
  const { darkMode } = useTheme();
  const borderColor = darkMode
    ? "border-white hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]"
    : "border-[rgba(0,0,0,0.8)] hover:shadow-[0_0_10px_rgba(0,0,0,0.5)]";

  return (
    <div
      className={`border-2 border-dotted rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.3)] ${borderColor} ${className}`}
    >
      {!!img ? (
        <div className="grid grid-cols-10 h-full">
          <div className="col-span-4 overflow-hidden">
            <img
              src={img}
              className={`h-full w-full object-cover object-[0%_0%] border-r rounded-tl-xl rounded-bl-xl ${
                darkMode ? "border-white" : "border-[rgba(0,0,0,0.8)]"
              }`}
            />
          </div>
          <div className="p-4 col-span-6">{children}</div>
        </div>
      ) : (
        <div className="p-4">{children}</div>
      )}
    </div>
  );
};
