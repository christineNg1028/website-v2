import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useTheme } from "./ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";

function App() {
  const { darkMode } = useTheme();

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <ThemeToggle />
    </div>
  );
}

export default App;
