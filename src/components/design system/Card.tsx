import { FC, ReactNode } from "react";
import { useTheme } from "../../ThemeProvider";

export const Card: FC<{
  children: ReactNode;
  format?: "horizontal" | "vertical";
  img?: string;
  alt?: string;
  onClick?: () => void;
  className?: string;
}> = ({ img, alt, onClick, children, format = "horizontal", className }) => {
  const { darkMode } = useTheme();
  const borderColor = darkMode ? "border-white" : "border-[rgba(0,0,0,0.8)]";
  const onClickStyles = !!onClick
    ? darkMode
      ? "hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] cursor-pointer"
      : "hover:shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-pointer"
    : "";
  const isHorizontal = format === "horizontal";
  const gridLayout = isHorizontal ? "grid-cols-10" : "grid-rows-11";
  const imgSpan = isHorizontal ? "col-span-4" : "row-span-8";
  const contentSpan = isHorizontal ? "col-span-6" : "row-span-3";
  const imgStyles = `
  h-full w-full object-cover object-top rounded-tl-xl
  ${darkMode ? "border-white" : "border-[rgba(0,0,0,0.8)]"}
  ${isHorizontal ? "border-r rounded-bl-xl" : "border-b rounded-tr-xl"}
`;

  return (
    <div
      className={`border-2 border-dotted rounded-xl overflow-hidden transition-shadow duration-300 ${borderColor} ${onClickStyles} ${className}`}
      onClick={onClick}
    >
      {!!img ? (
        <div className={`grid ${gridLayout} h-full`}>
          <div className={`${imgSpan} overflow-hidden`}>
            <img src={img} alt={alt} className={imgStyles} />
          </div>
          <div className={contentSpan}>{children}</div>
        </div>
      ) : (
        children
      )}
    </div>
  );
};
