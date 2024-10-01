import { FC } from "react";

export const Divider: FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <hr
      className={`w-full ${darkMode ? "border-white" : "border-[#333333]"}`}
    />
  );
};
