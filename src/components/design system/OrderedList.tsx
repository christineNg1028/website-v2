import { FC, ReactNode } from "react";
import { useTheme } from "../../ThemeProvider";

export const OrderedList: FC<{
  items: string[];
}> = ({ items }) => {
  const { darkMode } = useTheme();

  return (
    <div className="flex flex-col gap-6">
      {items.map((item, i) => (
        <div className="grid grid-cols-12">
          <div
            className={`col-span-1 border-2 rounded-full border-dotted w-10 h-10 flex items-center justify-center ${
              darkMode ? "border-white" : "border-[rgba(0,0,0,0.8)]"
            }`}
          >
            {i + 1}
          </div>
          <div className="col-span-11">{item}</div>
        </div>
      ))}
    </div>
  );
};
