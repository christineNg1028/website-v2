import frecImage from "../../assets/images/projects/frec/frec.png";
import frecLogoLight from "../../assets/graphics/logos/frec-light.svg";
import frecLogoDark from "../../assets/graphics/logos/frec-dark.svg";
import outschoolImage from "../../assets/images/projects/outschool/outschool.png";
import outschoolLogo from "../../assets/graphics/logos/outschool.svg";
import wonoloImage from "../../assets/images/projects/wonolo/wonolo.png";
import wonoloLogoLight from "../../assets/graphics/logos/wonolo-light.svg";
import wonoloLogoDark from "../../assets/graphics/logos/wonolo-dark.svg";
import wealthsimpleChequingImage from "../../assets/images/projects/wealthsimple cash/wealthsimple_chequing.png";
import wealthsimpleLogoLight from "../../assets/graphics/logos/wealthsimple-light.svg";
import wealthsimpleLogoDark from "../../assets/graphics/logos/wealthsimple-dark.svg";
import wealthsimpleTaxImage from "../../assets/images/projects/wealthsimple tax/wealthsimple_tax.jpeg";
import heatImage from "../../assets/images/projects/heat/heat.svg";

import { Frec } from "../project/Frec";
import { Wonolo } from "../project/Wonolo";

type Project = {
  name: string;
  logoLight?: string;
  logoDark?: string;
  img: string;
  description: string;
  startDate: Date;
  endDate: Date;
  skills: string[];
  tags?: ProjectTag[];
  link?: string;
  pageContent?: () => JSX.Element;
};

enum ProjectTag {
  Frontend = "👉 Frontend",
  Backend = "🔙 Backend",
  FullStack = "🥞 Full Stack",
  Design = "✍️ Design",
  UxResearch = "🔎 UX Research",
  Product = "📝 Product",
}

export const softwareProjects: Record<string, Project> = {
  frec: {
    name: "Frec Direct Indexing",
    logoLight: frecLogoLight,
    logoDark: frecLogoDark,
    img: frecImage,
    description:
      "Drove $100M in AUM growth through ownership of the frontend development for a new investment search feature.",
    startDate: new Date("2024-06-01"),
    endDate: new Date("2024-09-01"),
    skills: ["React", "TypeScript", "GraphQL", "PostgreSQL"],
    tags: [ProjectTag.Frontend, ProjectTag.Design],
    link: "https://frec.com/",
    pageContent: Frec,
  },
  outschool: {
    name: "Outschool",
    logoLight: outschoolLogo,
    logoDark: outschoolLogo,
    img: outschoolImage,
    description:
      "Boosted recurring 1:1 tutoring enrollments from 24% to 32% by implementing and user testing retention features.",
    startDate: new Date("2023-09-01"),
    endDate: new Date("2023-12-01"),
    skills: ["React", "TypeScript", "GraphQL", "PostgreSQL"],
    tags: [ProjectTag.Frontend, ProjectTag.UxResearch],
    link: "https://outschool.com/",
  },
  wonolo: {
    name: "Wonolo",
    logoLight: wonoloLogoLight,
    logoDark: wonoloLogoDark,
    img: wonoloImage,
    description:
      "Enhanced system scalability by reducing background job deployments by 50% with a new scheduling pattern.",
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-04-01"),
    skills: ["Ruby on Rails", "PostgreSQL"],
    tags: [ProjectTag.Backend],
    link: "https://www.wonolo.com/",
    pageContent: Wonolo,
  },
  wealthsimpleCash: {
    name: "Wealthsimple Cash",
    logoLight: wealthsimpleLogoLight,
    logoDark: wealthsimpleLogoDark,
    img: wealthsimpleChequingImage,
    description:
      "Increased account deposits by 25% by designing and developing a scalable and secure e-Transfer backend.",
    startDate: new Date("2022-05-01"),
    endDate: new Date("2022-08-01"),
    skills: ["Ruby on Rails", "REST", "GraphQL", "PostgreSQL"],
    tags: [ProjectTag.Backend, ProjectTag.Product],
    link: "https://www.wealthsimple.com/en-ca/chequing",
  },
  wealthsimpleTax: {
    name: "Wealthsimple Tax",
    logoLight: wealthsimpleLogoLight,
    logoDark: wealthsimpleLogoDark,
    img: wealthsimpleTaxImage,
    description:
      "Improved first-time tax filer conversion from 50-55% to 60% by revamping the onboarding flow with a state machine pattern, benefiting 1.3 million clients during the 2022 tax season.",
    startDate: new Date("2021-09-01"),
    endDate: new Date("2021-12-01"),
    skills: ["React", "TypeScript", "Redux"],
    tags: [ProjectTag.FullStack],
    link: "https://www.wealthsimple.com/en-ca/tax",
  },
};

export const otherProjects: Record<string, Project> = {
  heat: {
    name: "HEAT",
    img: heatImage,
    description: "Sensor system for detecting urban heat islands",
    startDate: new Date("2024-09-01"),
    endDate: new Date("2025-04-01"),
    skills: ["Hardware", "Firmware", "User Empathy"],
    link: "https://www.wealthsimple.com/en-ca/tax",
  },
  uwblueprint: {
    name: "UW Blueprint",
    img: heatImage,
    description: "Creating tech for social good",
    startDate: new Date("2021-05-01"),
    endDate: new Date("2023-04-01"),
    skills: ["Product Thinking", "Systems Design"],
    link: "https://uwblueprint.org/",
  },
  dotslogistics: {
    name: "DotsLogistics",
    img: heatImage,
    description: "AI for Future Business Challenge 2021",
    startDate: new Date("2021-01-01"),
    endDate: new Date("2021-04-01"),
    skills: ["Product Thinking", "Systems Design"],
    link: "https://uwblueprint.org/",
  },
};
