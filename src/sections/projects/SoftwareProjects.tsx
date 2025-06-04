import { Card } from "../../components/design system/Card";
import { projects } from "./projects";

export const SoftwareProjects = () => {
  return (
    <div className="flex flex-col gap-10 text-left">
      <span className="text-2xl">Built for users 🤝</span>
      <div className="flex flex-col gap-6">
        {Object.values(projects).map(({ name, logo, img, description }) => (
          <Card img={img} className="h-[250px]">
            <div className="h-full flex flex-col justify-between text-xl">
              <span>{logo ? <img src={logo} className="h-5" /> : name}</span>
              <div>{description}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
