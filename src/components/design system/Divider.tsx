import { FC } from "react";
import { useTheme } from "../../ThemeProvider";

export const Divider: FC = () => {
  const { darkMode } = useTheme();

  return (
    <hr
      className={`w-full ${darkMode ? "border-white" : "border-[#333333]"}`}
    />
  );
};
