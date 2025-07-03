import { FC } from "react";
import { HoverTextLink } from "../../components/design system/HoverLink";
import { Links } from "../../Links";
import { useTheme } from "../../ThemeProvider";
import { Eye1, Eye2 } from "../../assets/icons/headerIcons";
import { InstagramIcon } from "../../assets/icons/logoIcons";

export const Photography: FC<{ isCurrentSection: boolean }> = ({
  isCurrentSection,
}) => {
  const { darkMode } = useTheme();

  return (
    <div className="flex flex-col gap-10 text-left">
      <span className="flex gap-3 items-center text-2xl">
        {isCurrentSection ? Eye2(darkMode) : Eye1(darkMode)}Through my lens
      </span>
      <div className="flex flex-col gap-6">
        <HoverTextLink to={Links.get("Photography") ?? ""} isExternal>
          <div className="flex items-center gap-2 text-xl">
            {InstagramIcon(darkMode)}ng.is.king
          </div>
        </HoverTextLink>
        <script src="https://snapwidget.com/js/snapwidget.js"></script>
        <iframe
          src="https://snapwidget.com/embed/1100245"
          className="h-[405px] md:h-[870px] snapwidget-widget pointer-events-none"
          style={{
            border: "none",
            overflow: "hidden",
            width: "100%",
          }}
          title="Posts from Instagram"
        ></iframe>
      </div>
    </div>
  );
};
