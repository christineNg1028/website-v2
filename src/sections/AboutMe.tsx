import { Typewriter } from "../components/Typewriter";

export const AboutMe = () => {
  return (
    <div className="flex flex-col items-center">
      <Typewriter />
      <div className="text-lg text-left">
        I’m a full-stack software engineer currently studying Systems Design
        Engineering at the University of Waterloo, passionate about user
        experience and community building.
      </div>
    </div>
  );
};
