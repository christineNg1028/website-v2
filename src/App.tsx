import React from "react";
import "./App.css";
import { useTheme } from "./ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";
import { AboutMe } from "./sections/AboutMe";
import { SoftwareProjects } from "./sections/projects/SoftwareProjects";
import { Divider } from "./components/design system/Divider";

function App() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`App ${
        darkMode ? "dark" : ""
      } flex flex-col items-center min-h-screen w-full overflow-x-hidden`}
    >
      <ThemeToggle />
      <div className="flex flex-col w-full max-w-4xl px-4 py-10 gap-12">
        <AboutMe />
        <Divider darkMode={darkMode} />
        <SoftwareProjects />
      </div>
    </div>
  );
}

export default App;
