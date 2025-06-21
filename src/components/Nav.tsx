import { useTheme } from "../ThemeProvider";
import { HoverTextLink } from "./design system/HoverLink";

export function Nav({ onNavigate }: { onNavigate: (section: string) => void }) {
  return (
    <nav className="fixed right-4 top-24 z-50 flex flex-col items-end gap-4 text-xl">
      <HoverTextLink onClick={() => onNavigate("tldr")}>tl;dr</HoverTextLink>
      <HoverTextLink onClick={() => onNavigate("projects")}>
        projects
      </HoverTextLink>
      <HoverTextLink onClick={() => onNavigate("photos")}>
        photography
      </HoverTextLink>
      <HoverTextLink onClick={() => onNavigate("contact")}>
        contact
      </HoverTextLink>
      <HoverTextLink>resume</HoverTextLink>
    </nav>
  );
}
