import { useNavigate } from "react-router";
import { Card } from "../../components/design system/Card";
import { otherProjects } from "../shared/projects";
import { Carousel } from "../../components/design system/Carousel";
import { FC } from "react";
import { useTheme } from "../../ThemeProvider";
import { LightBulb1, LightBulb2 } from "../../assets/icons/headerIcons";

export const OtherProjects: FC<{ isCurrentSection: boolean }> = ({
  isCurrentSection,
}) => {
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  const handleClickProject = (project: string) => {
    navigate(`/${project}`);
  };

  return (
    <div className="flex flex-col gap-10 text-left">
      <span className="flex gap-3 items-center text-2xl">
        {isCurrentSection ? LightBulb2(darkMode) : LightBulb1(darkMode)}Built
        for curiosity
      </span>
      <Carousel>
        {Object.entries(otherProjects).map(([projectName, projectDetails]) => (
          <Card
            key={projectName}
            format="vertical"
            img={projectDetails.img}
            alt={projectDetails.name}
            {...(projectDetails.pageContent && {
              onClick: () => handleClickProject(projectName),
            })}
            className="w-[344px] h-[250px] shrink-0"
          >
            <div className="py-2 px-4 h-full flex flex-col justify-between text-xl">
              <span className="font-semibold text-base">
                {projectDetails.name}
              </span>
              <div className="text-sm">{projectDetails.description}</div>
            </div>
          </Card>
        ))}
      </Carousel>
    </div>
  );
};
