import React, { useRef } from "react";
import "../../App.css";
import { AboutMe } from "./AboutMe";
import { SoftwareProjects } from "./SoftwareProjects";
import { Divider } from "../../components/design system/Divider";
import { OtherProjects } from "./OtherProjects";
import { Photography } from "./Photography";
import { Contact } from "./Contact";
import { Nav } from "../../components/Nav";

function Home() {
  const tldrRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const photosRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Nav
        onNavigate={(section: string) => {
          const sectionMap: Record<string, React.RefObject<HTMLDivElement>> = {
            tldr: tldrRef,
            projects: projectsRef,
            photos: photosRef,
            contact: contactRef,
          };
          const ref = sectionMap[section];
          ref?.current?.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <div
        ref={tldrRef}
        id="tl;dr"
        className="flex flex-col w-full max-w-4xl px-4 py-10 gap-12"
      >
        <AboutMe />
        <Divider />
        <div className="flex flex-col gap-12" ref={projectsRef} id="projects">
          <SoftwareProjects />
          <Divider />
          <OtherProjects />
        </div>
        <Divider />
        <div ref={photosRef} id="photos">
          <Photography />
        </div>
        <Divider />
        <div ref={contactRef} id="contact">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default Home;
