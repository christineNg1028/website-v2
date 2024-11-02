import { Card } from "../../components/design system/Card";
import { projects } from "./projects";

export const SoftwareProjects = () => {
  return (
    <div className="flex flex-col gap-10 text-left">
      <span className="text-2xl">Software projects</span>
      <div className="flex flex-col gap-6">
        {Object.values(projects).map(({ name, img, description }) => (
          <Card img={img}>
            <div className="h-full flex flex-col justify-between text-xl">
              <span>{name}</span>
              <div>{description}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
