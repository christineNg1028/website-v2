import { FC } from "react";
import Me from "../../assets/images/me.jpeg";
import { HoverTextLink } from "../../components/design system/HoverLink";
import { Links } from "../../Links";
import { useTheme } from "../../ThemeProvider";
import { Stick1, Stick2 } from "../../assets/icons/headerIcons";
import {
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
  SpotifyIcon,
} from "../../assets/icons/logoIcons";

export const Contact: FC<{ isCurrentSection: boolean }> = ({
  isCurrentSection,
}) => {
  const { darkMode } = useTheme();

  return (
    <div className="flex flex-col gap-10 text-left">
      <span className="flex gap-3 items-center text-2xl">
        {isCurrentSection ? Stick2(darkMode) : Stick1(darkMode)}Let's be
        internet friends
      </span>
      <div className="flex gap-10 items-center">
        <div className="w-48 h-48">
          <img
            src={Me}
            alt="Me"
            className="rounded-full h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col text-xl">
          <HoverTextLink to={Links.get("LinkedIn") ?? ""} isExternal>
            <div className="flex items-center gap-2">
              {LinkedInIcon(darkMode)}connect with me
            </div>
          </HoverTextLink>
          <HoverTextLink to={Links.get("GitHub") ?? ""} isExternal>
            <div className="flex items-center gap-2">
              {GitHubIcon(darkMode)}code with me
            </div>
          </HoverTextLink>
          <HoverTextLink to={Links.get("Email") ?? ""} isExternal>
            <div className="flex items-center gap-2">
              {EmailIcon(darkMode)}chat with me
            </div>
          </HoverTextLink>
          <HoverTextLink to={Links.get("Spotify") ?? ""} isExternal>
            <div className="flex items-center gap-2">
              {SpotifyIcon(darkMode)}jam with me
            </div>
          </HoverTextLink>
        </div>
      </div>
    </div>
  );
};
