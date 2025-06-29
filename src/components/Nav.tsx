import { Links } from "../Links";
import { HoverTextLink } from "./design system/HoverLink";

export function Nav({
  onNavigate,
  currentSection,
}: {
  onNavigate: (section: string) => void;
  currentSection: string;
}) {
  return (
    <nav className="fixed right-4 top-24 z-50 flex flex-col items-end gap-4 text-xl">
      <HoverTextLink
        onClick={() => onNavigate("tldr")}
        isActive={currentSection === "tldr"}
      >
        tl;dr
      </HoverTextLink>
      <HoverTextLink
        onClick={() => onNavigate("projects")}
        isActive={
          currentSection === "softwareProjects" ||
          currentSection === "otherProjects"
        }
      >
        projects
      </HoverTextLink>
      <HoverTextLink
        onClick={() => onNavigate("photos")}
        isActive={currentSection === "photos"}
      >
        photos
      </HoverTextLink>
      <HoverTextLink
        onClick={() => onNavigate("contact")}
        isActive={currentSection === "contact"}
      >
        contact
      </HoverTextLink>
      <HoverTextLink to={Links.get("Resume") ?? ""} isExternal>
        resume
      </HoverTextLink>
    </nav>
  );
}
