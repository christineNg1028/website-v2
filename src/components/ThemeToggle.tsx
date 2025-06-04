import { useTheme } from "../ThemeProvider";
import SunIcon from "../assets/icons/sun.svg";
import MoonIcon from "../assets/icons/moon.svg";

export const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className={`z-50 fixed top-4 right-4 border-2 rounded-full border-dotted w-12 h-12 flex items-center justify-center transition-shadow duration-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.3)] ${
        darkMode
          ? "border-white hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          : "border-[rgba(0,0,0,0.8)] hover:shadow-[0_0_10px_rgba(0,0,0,0.5)]"
      }`}
    >
      <img
        src={darkMode ? SunIcon : MoonIcon}
        alt="Toggle Theme"
        className="w-5 h-5"
      />
    </button>
  );
};
