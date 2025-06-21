import React from "react";
import "../../App.css";
import { AboutMe } from "./AboutMe";
import { SoftwareProjects } from "./SoftwareProjects";
import { Divider } from "../../components/design system/Divider";
import { OtherProjects } from "./OtherProjects";
import { Photography } from "./Photography";
import { Connect } from "./Connect";

function Home() {
  return (
    <div className="flex flex-col w-full max-w-4xl px-4 py-10 gap-12">
      <AboutMe />
      <Divider />
      <SoftwareProjects />
      <Divider />
      <OtherProjects />
      <Divider />
      <Photography />
      <Divider />
      <Connect />
    </div>
  );
}

export default Home;
