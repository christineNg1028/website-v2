import { FC } from "react";
import { useNavigate } from "react-router";
import { useTheme } from "../../ThemeProvider";

export const BackButton: FC = () => {
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <button
      className={`w-fit ${darkMode ? "text-white" : "text-[#333333]"}`}
      onClick={handleClick}
    >
      <span className="text-3xl">&larr;</span>
    </button>
  );
};
