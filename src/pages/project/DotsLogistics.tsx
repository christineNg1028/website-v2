import { Divider } from "../../components/design system/Divider";
import { List } from "../../components/design system/List";
import { ImageCarousel } from "../../components/design system/ImageCarousel";
import { Links } from "../../Links";
import { TextLink } from "../../components/design system/TextLink";

import MarketplaceDemo from "../../assets/videos/marketplace.mp4";
import AuthOnboardingDemo from "../../assets/videos/auth-onboarding.mp4";
import SolutionArchitectureImage from "../../assets/images/projects/dotslogistics/solution-architecture.png";

export const DotsLogistics = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-6">
        <div>
          The 2021 AI for Future Business Challenge was hosted by Technation, in
          partnership with RBC and Microsoft. The competition challenged teams
          to propose a new AI technology that would solve a critical problem
          within a traditional sector. I teamed up with a few of my co-workers
          from Dataraction, and together, we came{" "}
          <span className="font-semibold">
            2nd out of 123 teams across Canada
          </span>
          .
        </div>
        <div>The Problem:</div>
        <div>
          Small and medium sized enterprises (SMEs) contribute to 90% of the
          Canadian economy but many are experiencing disruptions and struggling
          due to COVID-19. These businesses cannot afford mainstream ERP
          software, and thus, they don’t have access to resources to find
          business opportunities and relevant market insights.
        </div>
        <div>The Solution:</div>
        <div>
          DotsLogistics was born to fulfill the needs of SMEs. It is a web
          platform supporting B2B and B2C relationships through a free
          marketplace and AI analytics to provide trustworthy partners and
          superior real-time insights.
        </div>
        <div>
          DotsLogistics aims to support SMEs where mainstream platforms do not,
          providing dependable supply chain resources to improve efficiency and
          reduce costs. The platform boasts a simple, modern, and intuitive
          interface, so that all business owners, regardless of size, budget,
          and experience level can easily adopt it into their workflows and have
          equal opportunity to succeed.
        </div>
        <div>The Competition:</div>
        <div>
          3 stages: the{" "}
          <TextLink to={Links.get("DotsLogistics Proposal") ?? ""}>
            proposal
          </TextLink>
          , prototype development for the{" "}
          <TextLink to={Links.get("DotsLogistics Pitch") ?? ""}>
            business pitch
          </TextLink>
          , and prototype refinement for the{" "}
          <TextLink to={Links.get("DotsLogistics Final") ?? ""}>
            final pitch to AI experts
          </TextLink>
          .
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-10">
        <span className="text-2xl">🛒 Marketplace</span>
        <div>
          During the development stage, I built the marketplace - the heart of
          DotsLogistics. The marketplace is where businesses can find partners
          such as carriers and shippers tailored to their needs. An AI
          recommendation engine matches shippers' business profile to business
          partners according to their criteria and previous transactions.
        </div>
        <div className="flex justify-center">
          <video
            className="rounded-xl"
            width="100%"
            src={MarketplaceDemo}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="font-semibold">Key Features:</div>
          <List
            items={[
              "Pool of trusted partners based on reviews from past customers, offering services at competitive prices",
              "Search and sort filters",
              "List and map views",
              "Overview of businesses - reviews, number of hires, services, etc.",
              "Send RFPs and messages to partners, request quotes, send invoices",
            ]}
          />
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-10">
        <span className="text-2xl">🔐 Auth & Onboarding</span>
        <div className="flex justify-center">
          <video
            className="rounded-xl"
            width="100%"
            src={AuthOnboardingDemo}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-10">
        <span className="text-2xl">💡 Research & Solution Architecture</span>
        <div>
          During the proposal stage, we conducted primary and secondary research
          to develop our value proposition and solution architecture. User
          interviews allowed us to empathize with users and design features to
          address their pain points.
        </div>
        <ImageCarousel images={[{ src: SolutionArchitectureImage }]} />
      </div>
    </div>
  );
};
