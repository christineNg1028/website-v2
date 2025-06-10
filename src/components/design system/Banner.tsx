import { FC, ReactNode } from "react";
import { useTheme } from "../../ThemeProvider";

export const Banner: FC<{
  children: ReactNode;
  icon?: ReactNode;
}> = ({ children, icon }) => {
  const { darkMode } = useTheme();
  const color = darkMode ? "bg-gray-600" : "bg-gray-100";

  return (
    <div className={`rounded-xl p-4 font-mono text-base ${color}`}>
      {!!icon ? (
        <div className="flex gap-4 items-center">
          <div className="col-span-1 text-2xl">{icon}</div>
          <div className="col-span-11">{children}</div>
        </div>
      ) : (
        children
      )}
    </div>
  );
};
