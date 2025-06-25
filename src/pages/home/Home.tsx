import React, { useRef } from "react";
import "../../App.css";
import { AboutMe } from "./AboutMe";
import { SoftwareProjects } from "./SoftwareProjects";
import { Divider } from "../../components/design system/Divider";
import { OtherProjects } from "./OtherProjects";
import { Photography } from "./Photography";
import { Contact } from "./Contact";
import { Nav } from "../../components/Nav";
import { useCurrentSection } from "../../hooks/useCurrentSection";

function Home() {
  const currentSection = useCurrentSection([
    "tldr",
    "softwareProjects",
    "otherProjects",
    "photos",
    "contact",
  ]);

  const tldrRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const photosRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Nav
        onNavigate={(section) => {
          const sectionMap: Record<string, React.RefObject<HTMLDivElement>> = {
            tldr: tldrRef,
            projects: projectsRef,
            photos: photosRef,
            contact: contactRef,
          };
          const ref = sectionMap[section];
          ref?.current?.scrollIntoView({ behavior: "smooth" });
        }}
        currentSection={currentSection}
      />
      <div
        ref={tldrRef}
        id="tldr"
        className="flex flex-col w-full max-w-4xl px-4 py-10 gap-12"
      >
        <AboutMe />
        <Divider />
        <div ref={projectsRef} id="softwareProjects">
          <SoftwareProjects
            isCurrentSection={currentSection === "softwareProjects"}
          />
        </div>
        <Divider />
        <div id="otherProjects">
          <OtherProjects
            isCurrentSection={currentSection === "otherProjects"}
          />
        </div>
        <Divider />
        <div ref={photosRef} id="photos">
          <Photography isCurrentSection={currentSection === "photos"} />
        </div>
        <Divider />
        <div ref={contactRef} id="contact">
          <Contact isCurrentSection={currentSection === "contact"} />
        </div>
      </div>
    </>
  );
}

export default Home;
