import { Divider } from "../../components/design system/Divider";
import { List } from "../../components/design system/List";
import { Links } from "../../Links";
import { TextLink } from "../../components/design system/TextLink";
import { Banner } from "../../components/design system/Banner";
import { ImageCarousel } from "../../components/design system/ImageCarousel";

import ModuleBuilderDemo from "../../assets/videos/module-builder.mp4";
import ToolkitDemo from "../../assets/videos/toolkit.mp4";
import AspDashboardImage from "../../assets/images/projects/uwblueprint/asp-dashboard.png";
import AspExperienceImage from "../../assets/images/projects/uwblueprint/asp-experience.png";
import MealDonorDashboardImage from "../../assets/images/projects/uwblueprint/meal-donor-dashboard.png";

export const UwBlueprint = () => {
  const fckImages = [
    {
      src: AspExperienceImage,
      caption: "Hi-Fi: ASP meal request creation",
    },
    {
      src: AspDashboardImage,
      caption:
        "Hi-Fi: ASP dashboard for viewing upcoming meal donations and unfilled requests",
    },
    {
      src: MealDonorDashboardImage,
      caption:
        "Lo-Fi: Meal donor dashboard for viewing ASP meal donation requests",
    },
  ];

  const fckResponsibilities = [
    "Leading team meetings (standups, brainstorming sessions, retros) to ensure alignment and knowledge sharing",
    "Establishing the product timeline",
    "Writing product requirement documents and other documentation (e.g. for project hand-off)",
    "Holding 1:1s with our technical lead to stay on track, plan development, and discuss design/dev trade-offs",
    "Working extremely closely with design to ideate solutions, align on product needs from client meetings, and create tickets for task allocation",
    "   Meeting weekly with the client to share progress, clarify evolving product requirements, and conduct design reviews for further iteration",
  ];

  const fckLearnings = [
    "Completed and UX tested the ASP dashboard with clients, receiving a perfect usability score",
    "Scoped product specs and created lo-fi designs for open meal request features, now in user testing",
    "Oversaw development of the login/sign-up onboarding flow",
    "Designed with business goals in mind—prioritizing features that maximize donated meals",
    "Navigated unclear legacy design decisions and led improvements",
    "Made decisions with limited user data, learning when to rely on my own judgment and how to advocate for it effectively",
  ];

  const hugBackendLearnings = [
    "Architecture decisions based on various factors (client needs, functionality, design of app, timelines, cost, etc.) - REST or GraphQL, database, UI library, frameworks",
    "Database schema decisions - what models are required, how are they related, how is data being read on the frontend, how to optimize speed",
    "Mongoose models + API functions",
    "Leveraging Typescript typing",
    "Routing w/ Next.js",
  ];

  const hugModuleBuilderFeatures = [
    "Name, save, update modules",
    "Module preview for mobile + desktop displays edits as they’re being made",
    "Editor: section component for selecting content type + creating new sections",
    "Configure buttons for each slide (prev, next, print, save)",
    "Multiple choice and Multiselect section types w/ advanced feature of single or double (desktop only) column options",
  ];

  const hugModuleBuilderLearnings = [
    "Redux to handle real-time changes on frontend before updating in database upon save",
    "Organizing component props + children",
    "Creating custom themes w/ Chakra UI",
    "Functions for processing collections of data to determine which components to render and their variants",
  ];

  const hugSWRLearnings = [
    "Code organization for increased modularity + reusability",
    "Loading states",
    "useSWR - rendering page according to API response",
  ];

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-6">
        <div>
          UW Blueprint is a student organization at the University of Waterloo
          that builds accessible, impactful technology solutions for non-profit
          organizations.
        </div>
        <div>
          I was a member of UW Blueprint for 2 years, first on the{" "}
          <TextLink to={Links.get("HeadsUpGuys") ?? ""}>HeadsUpGuys</TextLink>{" "}
          team as a Software Developer, then on the{" "}
          <TextLink to={Links.get("Feeding Canadian Kids") ?? ""}>
            Feeding Canadian Kids
          </TextLink>{" "}
          team as a Product Manager.
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-10">
        <span className="text-2xl">🍽️ Feeding Canadian Kids</span>
        <Banner icon={"✨"}>
          Managed an Agile team of 10 developers and designers to build a
          matching platform, increasing velocity by &gt;10%.
        </Banner>
        <div>
          We partnered with Feeding Canadian Kids to build a user-friendly
          platform that matches meal donors with after-school programs. The
          platform features three different user experiences—Meal Donor,
          After-School Program (ASP), and Admin—all of which I helped scope and
          oversee through design and development.
        </div>
        <ImageCarousel images={fckImages} />
        <div className="flex flex-col gap-6">
          <div>
            As the product manager who onboarded after the project kickoff, I
            acted as the bridge between developers, designers, and our client.
            My responsibilities included:
          </div>
          <List items={fckResponsibilities} />
          <div className="font-semibold">What I accomplished/learned:</div>
          <List items={fckLearnings} />
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-10">
        <span className="text-2xl">👨 HeadsUpGuys</span>
        <Banner icon={"✨"}>
          Grew user retention by 25% through the creation of Mongoose models and
          API routes for mental health self-monitoring and goal tracking tools.
        </Banner>
        <div>
          We partnered with the non-profit HeadsUpGuys to build a platform that
          aims to help users manage depression through interactive learning
          modules and self-assessments.
        </div>
        <span>🔚 Backend work!</span>
        <div className="flex flex-col gap-6">
          <div>
            When I joined the HeadsUpGuys team, I knew that I wanted to grow my
            skills in backend. Being a new Blueprint project, it was a bit of a
            unique experience as I was involved in the building of the backend
            from the ground up. I helped with planning and implementation of the
            initial database schema, focusing on the self-assessment models.
            There was a lot of decision-making and back-and-forth between team
            members, so it was really interesting to learn from each other.
          </div>
          <div>
            We then worked together to plan out the REST API routes that would
            interact with the database, using charts like the one above for each
            model. I wrote functions for creating, updating, getting, and
            deleting self-assessments.
          </div>
          <div className="font-semibold">What I learned/accomplished:</div>
          <List items={hugBackendLearnings} />
        </div>
        <span>🧱 Module Builder</span>
        <div>
          The primary focus of the project during the first 8 months was to
          build the majority of the admin-facing features, the Module Builder
          being the largest component. The Module Builder is a no-code tool that
          allows admins to create learning modules for users, consisting of
          various interactive and static components. These modules are bundled
          with self-assessments within Tools that are tailored to the user. My
          role was to build out many of the UI components, as well as hook up
          the frontend to the backend.
        </div>
        <div className="flex justify-center">
          <video
            className="rounded-xl"
            width="100%"
            src={ModuleBuilderDemo}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="font-semibold">Key Features:</div>
          <List items={hugModuleBuilderFeatures} />
          <div className="font-semibold">What I learned/accomplished:</div>
          <List items={hugModuleBuilderLearnings} />
        </div>
        <span>🧰 Toolkit & Tools</span>
        <div className="flex flex-col gap-6">
          <div>
            The admin Tools dashboard is where admins can view their drafted and
            published tools, as well as create, edit, and delete them. I created
            this tool card that varies depending on whether the tool is drafted
            or published, and whether it has a module linked to it. Clicking on
            the card takes you to the tool builder page for that tool.
          </div>
          <div>
            The Toolkit landing page is what users see upon logging in to the
            app. The Toolkit houses all of their Tools, divided into Life
            Problems (ex. Anxiety, Depression) and Skills (ex. Creating a
            balanced life). Here, users can view all of the Tools they have
            progress on, and quickly access a module or take a self-check quiz.
            I was in charge of building this page and the components within it.
          </div>
        </div>
        <div className="flex justify-center">
          <video
            className="rounded-xl"
            width="100%"
            src={ToolkitDemo}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <span>🎣 SWR Data Fetching</span>
        <div className="flex flex-col gap-6">
          <div>
            Initially, when we began hooking up the frontend to the backend,
            data fetching was being done using useEffect and React state. This
            had a number of issues, including inconsistent fetching and
            confusing UX as there was no loading placeholder. My task was to
            migrate from useEffect to useSWR to include loading placeholders
            (see green spinner and loading modal in videos above). I then
            refactored the Modules and Tools page to consist of static
            components (header) and dynamic components (containing all data).
          </div>
          <div className="font-semibold">What I learned/accomplished:</div>
          <List items={hugSWRLearnings} />
        </div>
      </div>
    </div>
  );
};
