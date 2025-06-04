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
};

export const projects: Record<string, Project> = {
  frec: {
    name: "Frec Direct Indexing",
    logo: frecLogo,
    img: frecImage,
    description:
      "Drove $100M in AUM growth through ownership of the frontend development for a new investment search feature.",
  },
  outschool: {
    name: "Outschool",
    logo: outschoolLogo,
    img: outschoolImage,
    description:
      "Boosted recurring 1:1 tutoring enrollments from 24% to 32% by implementing and user testing retention features.",
  },
  wonolo: {
    name: "Wonolo",
    logo: wonoloLogo,
    img: wonoloImage,
    description:
      "Enhanced system scalability by reducing background job deployments by 50% with a new scheduling pattern.",
  },
  wealthsimpleCash: {
    name: "Frec Direct Indexing",
    logo: frecLogo,
    img: frecImage,
    description:
      "Increased account deposits by 25% by designing and developing a scalable and secure e-Transfer backend.",
  },
  wealthsimpleTax: {
    name: "Frec Direct Indexing",
    logo: frecLogo,
    img: frecImage,
    description:
      "Improved first-time tax filer conversion from 50-55% to 60% by revamping the onboarding flow with a state machine pattern, benefiting 1.3 million clients during the 2022 tax season.",
  },
  travelRex: {
    name: "Frec Direct Indexing",
    logo: frecLogo,
    img: frecImage,
    description:
      "Increased account deposits by 25% by designing and developing a scalable and secure e-Transfer backend.",
  },
  feedingCanadianKids: {
    name: "Frec Direct Indexing",
    logo: frecLogo,
    img: frecImage,
    description:
      "Increased account deposits by 25% by designing and developing a scalable and secure e-Transfer backend.",
  },
  headsUpGuys: {
    name: "Frec Direct Indexing",
    logo: frecLogo,
    img: frecImage,
    description:
      "Increased account deposits by 25% by designing and developing a scalable and secure e-Transfer backend.",
  },
};
