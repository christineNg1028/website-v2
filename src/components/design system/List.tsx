import { FC } from "react";
import { useTheme } from "../../ThemeProvider";

export const List: FC<{
  items: string[];
  isOrdered?: boolean;
}> = ({ items, isOrdered = false }) => {
  const { darkMode } = useTheme();

  const NumberMarker = ({ index }: { index: number }) => (
    <div
      className={`w-10 h-10 flex items-center justify-center rounded-full border-2 border-dotted shrink-0 ${
        darkMode ? "border-white" : "border-[rgba(0,0,0,0.8)]"
      }`}
    >
      {index + 1}
    </div>
  );

  const BulletMarker = () => (
    <div
      className={`w-2 h-2 rounded-full mt-[10px] shrink-0 ${
        darkMode ? "bg-white" : "bg-[rgba(0,0,0,0.8)]"
      }`}
    />
  );

  const ListTag = isOrdered ? "ol" : "ul";

  return (
    <ListTag className="flex flex-col gap-6 list-none">
      {items.map((item, i) => (
        <li key={i} className="flex gap-4 items-start">
          {isOrdered ? <NumberMarker index={i} /> : <BulletMarker />}
          <span className="leading-snug">{item}</span>
        </li>
      ))}
    </ListTag>
  );
};
