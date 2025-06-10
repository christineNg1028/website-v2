import frecImage from "../../assets/images/projects/frec/frec.png";
import frecLogo from "../../assets/graphics/logos/frec.svg";
import outschoolImage from "../../assets/images/projects/outschool/outschool.png";
import outschoolLogo from "../../assets/graphics/logos/outschool.svg";
import wonoloImage from "../../assets/images/projects/wonolo/wonolo.png";
import wonoloLogo from "../../assets/graphics/logos/wonolo.svg";

type Project = {
  name: string;
  logo?: string;
  img: string;
  description: string;
  startDate: Date;
  endDate: Date;
  skills: string[];
  tags: ProjectTag[];
  link: string;
};

enum ProjectTag {
  Frontend = "👉 Frontend",
  Backend = "🔙 Backend",
  FullStack = "🥞 Full Stack",
  Design = "✍️ Design",
  UxResearch = "🔎 UX Research",
  Product = "📝 Product",
}

export const projects: Record<string, Project> = {
  frec: {
    name: "Frec Direct Indexing",
    logo: frecLogo,
    img: frecImage,
    description:
      "Drove $100M in AUM growth through ownership of the frontend development for a new investment search feature.",
    startDate: new Date("2024-06-01"),
    endDate: new Date("2024-09-01"),
    skills: ["React", "TypeScript", "GraphQL", "PostgreSQL"],
    tags: [ProjectTag.Frontend, ProjectTag.Design],
    link: "https://frec.com/",
  },
  outschool: {
    name: "Outschool",
    logo: outschoolLogo,
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
    logo: wonoloLogo,
    img: wonoloImage,
    description:
      "Enhanced system scalability by reducing background job deployments by 50% with a new scheduling pattern.",
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-04-01"),
    skills: ["Ruby on Rails", "PostgreSQL"],
    tags: [ProjectTag.Backend],
    link: "https://www.wonolo.com/",
  },
  wealthsimpleCash: {
    name: "Frec Direct Indexing",
    logo: frecLogo,
    img: frecImage,
    description:
      "Increased account deposits by 25% by designing and developing a scalable and secure e-Transfer backend.",
    startDate: new Date("2022-05-01"),
    endDate: new Date("2022-08-01"),
    skills: ["Ruby on Rails", "REST", "GraphQL", "PostgreSQL"],
    tags: [ProjectTag.Backend, ProjectTag.Product],
    link: "https://www.wealthsimple.com/en-ca/chequing",
  },
  wealthsimpleTax: {
    name: "Frec Direct Indexing",
    logo: frecLogo,
    img: frecImage,
    description:
      "Improved first-time tax filer conversion from 50-55% to 60% by revamping the onboarding flow with a state machine pattern, benefiting 1.3 million clients during the 2022 tax season.",
    startDate: new Date("2021-09-01"),
    endDate: new Date("2021-12-01"),
    skills: ["React", "TypeScript", "Redux"],
    tags: [ProjectTag.FullStack],
    link: "https://www.wealthsimple.com/en-ca/tax",
  },
};
