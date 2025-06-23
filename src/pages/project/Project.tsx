import React, { useEffect } from "react";
import "../../App.css";
import { useTheme } from "../../ThemeProvider";
import { useNavigate, useParams } from "react-router";
import { otherProjects, softwareProjects } from "../shared/projects";
import { BackButton } from "../../components/design system/BackButton";
import {
  HoverImageLink,
  HoverTextLink,
} from "../../components/design system/HoverLink";

function Project() {
  const { darkMode } = useTheme();
  const { project } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !project ||
      (!(project in softwareProjects) && !(project in otherProjects))
    ) {
      navigate("/", { replace: true });
    }
  }, [project, navigate]);

  if (
    !project ||
    (!(project in softwareProjects) && !(project in otherProjects))
  )
    return null;

  const currentProject = softwareProjects[project] || otherProjects[project];

  const formatDateRange = (startDate: Date, endDate: Date) => {
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const startMonth = month[startDate.getUTCMonth()];
    const startYear = startDate.getUTCFullYear();
    const endMonth = month[endDate.getUTCMonth()];
    const endYear = endDate.getUTCFullYear();
    return `${startMonth} ${
      startYear === endYear ? "" : startYear
    } - ${endMonth} ${endYear}`;
  };

  const content =
    currentProject.logoLight && currentProject.logoDark ? (
      <img
        src={darkMode ? currentProject.logoLight : currentProject.logoDark}
        alt={currentProject.name}
        className="h-10 block"
      />
    ) : (
      <span className="text-4xl">{currentProject.name}</span>
    );

  const projectTitle = currentProject.link ? (
    currentProject.logoLight && currentProject.logoDark ? (
      <HoverImageLink to={currentProject.link}>{content}</HoverImageLink>
    ) : (
      <HoverTextLink to={currentProject.link} isExternal>
        {content}
      </HoverTextLink>
    )
  ) : (
    content
  );

  return (
    <div className="flex flex-col w-full max-w-4xl px-4 py-10 gap-12 text-left text-xl">
      <BackButton />
      <img
        src={currentProject.img}
        alt={currentProject.name}
        className={"h-full w-full object-cover object-[0%_0%] rounded-xl"}
      />
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          {projectTitle}
          {formatDateRange(currentProject.startDate, currentProject.endDate)}
        </div>
        <div>
          <span className="font-semibold">Skills: </span>
          <span>{currentProject.skills.join(", ")}</span>
        </div>
        {currentProject.pageContent && <currentProject.pageContent />}
      </div>
      <div className="text-center text-base">
        <HoverTextLink
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          &uarr; Back to top
        </HoverTextLink>
      </div>
    </div>
  );
}

export default Project;
