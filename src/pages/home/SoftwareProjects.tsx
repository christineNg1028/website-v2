import { useNavigate } from "react-router";
import { Card } from "../../components/design system/Card";
import { Chip } from "../../components/design system/Chip";
import { useTheme } from "../../ThemeProvider";
import { projects } from "../shared/projects";

export const SoftwareProjects = () => {
  const { darkMode } = useTheme();
  const navigate = useNavigate();

  const handleClickProject = (project: string) => {
    navigate(`/${project}`);
  };

  return (
    <div className="flex flex-col gap-10 text-left">
      <span className="text-2xl">Built for users 🤝</span>
      <div className="flex flex-col gap-6">
        {Object.entries(projects).map(([projectName, projectDetails]) => (
          <Card
            key={projectName}
            img={projectDetails.img}
            onClick={() => handleClickProject(projectName)}
            className="h-[250px]"
          >
            <div className="h-full flex flex-col justify-between text-xl">
              <div className="flex justify-between flex-wrap">
                <span>
                  {projectDetails.logo ? (
                    <img src={projectDetails.logo} className="h-5" />
                  ) : (
                    projectDetails.name
                  )}
                </span>
                <div className="flex gap-2 flex-wrap">
                  {projectDetails.tags.map((tag) => (
                    <Chip key={tag}>{tag}</Chip>
                  ))}
                </div>
              </div>
              <div>{projectDetails.description}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
