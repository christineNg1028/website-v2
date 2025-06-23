import React from "react";
import "./App.css";
import { useTheme } from "./ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router";
import Project from "./pages/project/Project";
import { Footer } from "./components/Footer";

function App() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`App ${
        darkMode ? "dark" : ""
      } flex flex-col items-center min-h-screen w-full overflow-x-hidden`}
    >
      <ThemeToggle />
      <Routes>
        <Route index element={<Home />} />
        <Route path=":project" element={<Project />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
