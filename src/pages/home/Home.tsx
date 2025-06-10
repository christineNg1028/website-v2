import React from "react";
import "../../App.css";
import { useTheme } from "../../ThemeProvider";
import { AboutMe } from "./AboutMe";
import { SoftwareProjects } from "./SoftwareProjects";
import { Divider } from "../../components/design system/Divider";

function Home() {
  const { darkMode } = useTheme();

  return (
    <div className="flex flex-col w-full max-w-4xl px-4 py-10 gap-12">
      <AboutMe />
      <Divider />
      <SoftwareProjects />
    </div>
  );
}

export default Home;
