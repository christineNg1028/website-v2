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
      className={`border-2 border-dotted rounded-xl transition-shadow duration-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.3)] ${borderColor} ${className}`}
    >
      {!!img ? (
        <div className="grid grid-cols-10">
          <div className="col-span-4">
            <img
              src={img}
              className={`rounded-tl-xl rounded-bl-xl border-r ${
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
