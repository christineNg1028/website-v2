import { Card } from "../../components/design system/Card";
import { Chip } from "../../components/design system/Chip";
import { useTheme } from "../../ThemeProvider";
import { projects } from "../shared/projects";

export const SoftwareProjects = () => {
  const { darkMode } = useTheme();

  return (
    <div className="flex flex-col gap-10 text-left">
      <span className="text-2xl">Built for users 🤝</span>
      <div className="flex flex-col gap-6">
        {Object.values(projects).map(
          ({ name, logo, img, description, tags }) => (
            <Card img={img} className="h-[250px]">
              <div className="h-full flex flex-col justify-between text-xl">
                <div className="flex justify-between flex-wrap">
                  <span>
                    {logo ? <img src={logo} className="h-5" /> : name}
                  </span>
                  <div className="flex gap-2 flex-wrap">
                    {tags.map((tag) => (
                      <Chip darkMode={darkMode}>{tag}</Chip>
                    ))}
                  </div>
                </div>
                <div>{description}</div>
              </div>
            </Card>
          )
        )}
      </div>
    </div>
  );
};
