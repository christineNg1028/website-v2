import { FC, ReactNode } from "react";
import { useTheme } from "../../ThemeProvider";

export const Card: FC<{ img?: string; children: ReactNode }> = ({
  img,
  children,
}) => {
  const { darkMode } = useTheme();
  const borderColor = darkMode
    ? "border-white hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]"
    : "border-[rgba(0,0,0,0.8)] hover:shadow-[0_0_10px_rgba(0,0,0,0.5)]";

  return (
    <div
      className={`border-2 border-dotted rounded-xl p-4 transition-shadow duration-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.3)] ${borderColor}`}
    >
      {!!img ? (
        <div className="grid grid-cols-10">
          <div className="col-span-4">
            <img
              src={img}
              className={`-m-4 rounded-tl-xl rounded-bl-xl border-r ${borderColor}`}
            />
          </div>
          <div className="col-span-6">{children}</div>
        </div>
      ) : (
        children
      )}
    </div>
  );
};
