import { FC, ReactNode } from "react";
import { useTheme } from "../../ThemeProvider";

export const Card: FC<{
  children: ReactNode;
  img?: string;
  alt?: string;
  onClick?: () => void;
  className?: string;
}> = ({ img, alt, onClick, children, className }) => {
  const { darkMode } = useTheme();
  const borderColor = darkMode ? "border-white" : "border-[rgba(0,0,0,0.8)]";
  const onClickStyles = !!onClick
    ? darkMode
      ? "hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] cursor-pointer"
      : "hover:shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-pointer"
    : "";

  return (
    <div
      className={`border-2 border-dotted rounded-xl overflow-hidden transition-shadow duration-300 ${borderColor} ${onClickStyles} ${className}`}
      onClick={onClick}
    >
      {!!img ? (
        <div className="grid grid-cols-10 h-full">
          <div className="col-span-4 overflow-hidden">
            <img
              src={img}
              alt={alt}
              className={`h-full w-full object-cover object-top border-r rounded-tl-xl rounded-bl-xl ${
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
