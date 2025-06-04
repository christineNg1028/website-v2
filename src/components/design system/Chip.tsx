import { FC, ReactNode } from "react";

export const Chip: FC<{
  children: ReactNode;
  darkMode: boolean;
}> = ({ children, darkMode }) => {
  return (
    <div
      className={`${
        darkMode ? "bg-gray-600" : "bg-gray-100"
      } w-fit px-2 py-1 rounded-2xl font-mono text-xs`}
    >
      {children}
    </div>
  );
};
