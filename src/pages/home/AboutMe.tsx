import { TextLink } from "../../components/design system/TextLink";
import { Typewriter } from "../../components/Typewriter";
import { Links } from "../../Links";

export const AboutMe = () => {
  return (
    <div className="flex flex-col items-center">
      <Typewriter />
      <div className="text-xl text-left">
        I’m a full-stack software engineer based in San Francisco, California,
        working at{" "}
        <TextLink to={Links.get("Frec") ?? ""}>Frec Markets</TextLink>. I
        recently graduated from{" "}
        <TextLink to={Links.get("Systems Design Engineering") ?? ""}>
          Systems Design Engineering
        </TextLink>{" "}
        at the University of Waterloo, and am passionate about user experience
        and community building. 🌱
      </div>
    </div>
  );
};
