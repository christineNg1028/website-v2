import React from "react";
import "./App.css";
import { useTheme } from "./ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";
import { AboutMe } from "./sections/AboutMe";

function App() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`App ${
        darkMode ? "dark" : ""
      } flex flex-col items-center min-h-screen`}
    >
      <ThemeToggle />
      <div className="flex flex-col items-center max-w-2xl py-10 gap-12">
        <AboutMe />
        <hr
          className={`w-full ${darkMode ? "border-white" : "border-[#333333]"}`}
        />
      </div>
    </div>
  );
}

export default App;
