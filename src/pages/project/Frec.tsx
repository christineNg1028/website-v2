import { Divider } from "../../components/design system/Divider";
import { List } from "../../components/design system/List";
import InvestPage from "../../assets/images/projects/frec/invest_page.png";
import InvestPageSearch from "../../assets/images/projects/frec/invest_page_search.png";
import PortfolioAnalysis from "../../assets/images/projects/frec/portfolio_analysis.png";
import { Banner } from "../../components/design system/Banner";
import { ImageCarousel } from "../../components/design system/ImageCarousel";

export const Frec = () => {
  const problemsList = [
    "The entry point for setting up a direct index wasn’t super clear — you had to navigate to the home screen and enter the flow from there. A centralized entry point would make more sense.",
    "Users couldn’t easily explore or compare indices before setting one up — they had to enter the setup flow first to see any details.",
    "The old design only supported a handful of indices, and didn’t scale well. As the platform grows, users need to be able to search and filter through many options.",
    "The Trade flow was a bit outdated, and we saw an opportunity to combine it with the direct index flow to create a more streamlined “Invest” experience.",
  ];

  const solutionsList = [
    "Combined the direct index and trade flows into a single, centralized Invest flow.",
    "Added search functionality for both direct indices and stocks.",
    "Created dedicated info pages for each direct index — allowing users to learn about them (eventually even when logged out) and start the setup flow from there.",
    "Deprecated the old Trade flow and built new screens for buying and selling stocks.",
  ];

  const indexExplorerImages = [
    { src: InvestPage, caption: "New Invest page" },
    { src: InvestPageSearch, caption: "Invest page search" },
  ];

  const portfolioAnalysisImages = [
    {
      src: PortfolioAnalysis,
      caption:
        "Mockup of the landing page users see after finishing portfolio analysis setup",
    },
  ];

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-6">
        <div>
          Frec is an investment platform that offers direct indexing, allowing
          individuals to own the underlying stocks of an index. This approach
          enables tax-loss harvesting and portfolio customization while aiming
          to track index performance. The platform uses algorithmic portfolio
          management, with a minimum investment of $20,000 and fees starting at
          0.09%.
        </div>
        <div>
          I became a Freckle for my sixth and final internship as a Waterloo
          student. I was excited to join a tiny startup in SF, where I got to
          wear many hats and have a real say in the product direction. I focused
          primarily on frontend, but also dabbled in design and took on some
          scrum master duties like leading standups and retros. If there was
          something I was interested in, I could dive into it — and I did.
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-10">
        <span className="text-2xl">🫵 Index Explorer</span>
        <Banner icon={"✨"}>
          Drove $100M in Assets Under Management (AUM) growth
        </Banner>
        <div className="flex flex-col gap-6">
          <div>
            Index Explorer was a major feature project aimed at reworking how
            users search for and set up their investments. Previously, users
            would enter the direct indexing flow through the home screen, then
            select from a list of indices. Separately, there was the Trade flow,
            where users could search for and trade individual stocks.
          </div>
          <div>There were a few problems with this setup:</div>
          <List items={problemsList} isOrdered />
        </div>
        <ImageCarousel images={indexExplorerImages} />
        <div className="flex flex-col gap-6">
          <div>To address these issues, we:</div>
          <List items={solutionsList} isOrdered />
          <div>
            This was a meaty project with a lot of moving parts and a tight
            deadline. I led the project end-to-end — breaking down product
            requirements into manageable chunks, setting a timeline, and
            collaborating cross-functionally with engineering, design, product,
            and marketing to keep everything on track.
          </div>
          <div>
            It was the first big feature I led with this level of ownership, and
            it ended up being a huge learning experience. Working solo for most
            of it was tough, but it taught me when to pull in others, how to
            advocate for urgency (especially in a startup where attention is
            split), and how to balance product priorities with technical
            constraints. I also learned to speak up when alternative solutions
            could simplify the implementation without compromising quality —
            whether that meant suggesting design tweaks or negotiating scope
            with product and marketing.
          </div>
          <div>
            One of my personal goals was to launch the feature with “no bugs” —
            obviously, that’s nearly impossible, but I meant no major
            functionality issues. And we did it! The feature shipped with only a
            couple of minor bugs. To make that happen, I led multiple rounds of
            testing — design reviews, company-wide bug squashes, and engineering
            bug fests. We kept a big shared spreadsheet to track bugs and assign
            fixes, and that process worked really well for quality control.
          </div>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-10">
        <span className="text-2xl">📁 Portfolio Analysis</span>
        <div className="flex flex-col gap-6">
          <div>
            Portfolio Analysis was a project designed to give new Frec users a
            chance to compare their current portfolio with what Frec could
            offer—specifically, how much they could save in fees if they
            switched. It also aimed to introduce users to the platform and
            encourage them to schedule a call with our advisors before fully
            onboarding. The main goal was to improve conversion from other
            investment platforms like Charles Schwab and Fidelity.
          </div>
          <div>
            The feature followed a setup flow similar to our main onboarding,
            but focused on collecting a user’s existing portfolio and scheduling
            a call, without requiring the full onboarding information upfront.
          </div>
          <div>
            I led this project, working on the initial designs and building out
            the frontend skeleton for the setup screens. Key learnings included
            accounting for edge cases in my designs and designing with business
            goals and priorities in mind.
          </div>
        </div>
        <ImageCarousel images={portfolioAnalysisImages} />
      </div>
    </div>
  );
};
