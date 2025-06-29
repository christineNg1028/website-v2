import { Divider } from "../../components/design system/Divider";
import { Banner } from "../../components/design system/Banner";
import { List } from "../../components/design system/List";
import { TextLink } from "../../components/design system/TextLink";
import { Links } from "../../Links";
import { ImageCarousel } from "../../components/design system/ImageCarousel";

import SimplifiedFilingOnboardingDemo from "../../assets/videos/simplified-filing-onboarding.mp4";
import CraImportBugsImage from "../../assets/images/projects/wealthsimple tax/cra-import-bugs.jpg";
import ChromaticBugImage from "../../assets/images/projects/wealthsimple tax/chromatic-bug.jpg";

export const WealthsimpleTax = () => {
  const sfoFeatures = [
    "Validation for Personal Details form input fields",
    "CTA buttons lead to different states",
    "New slip selection component for Imports stages - uses a util to transform user slips to a displayable shape, all slips pre-selected, slip selections stored in a mapping sent to Redux",
    "Breathers - render differently depending on conditions",
    "Modals overlaying the wizard which overlays filing",
    "Modal navigation (separate from wizard flow)",
    "No Data step results from no data fetched from loading state",
    "Data from Redux hydrates filing, slip selections appear in a list on the left",
    "New onboarding header",
  ];

  const sfoLearnings = [
    "Writing Jest tests",
    "Redux slices, actions, reducers",
    "Typescript typing",
    "Map objects",
    "Functional programming - creation of utils (helper functions)",
    "Feature flags in LaunchDarkly",
    "Storybook for UI development",
    "Scoping process for big projects like this - how to divide up work to maximize velocity + limit blockages",
  ];

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-6">
        <div>
          As an intern at Wealthsimple, I was a full stack developer working on
          Wealthsimple Tax, a tax filing software used by over 1 million
          Canadians.
        </div>
        <div>
          I was able to make a huge impact by engaging in various streams of
          work on both the growth/feature side and the core app functionality
          side. It was an interesting challenge to work on a product that had
          been acquired (formerly SimpleTax), as the code base was large and
          complex, full of both legacy code (Python + HTML/CSS) and newly
          restructured code (React!).
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-10">
        <span className="text-2xl">📁 Simplified Filing Onboarding (SFO)</span>
        <Banner icon={"✨"}>
          Improved first-time tax filer conversion from 50-55% to 60% during the
          2022 tax season.
        </Banner>
        <div className="flex flex-col gap-6">
          <div>
            SFO was the project I worked on the most during the course of my
            internship.
          </div>
          <div>
            One of Tax's top 3 big investments for 2022 was to introduce
            simplified filing for most Canadians. The majority of Canadians
            (&gt;60%) have very simple tax returns, yet they have the same
            filing experience today as someone with a complex tax situation. The
            SFO project aimed to create a streamlined, intuitive process that
            feels automatic and effortless for these users.
          </div>
        </div>
        <div className="flex justify-center">
          <video
            className="rounded-xl"
            width="100%"
            src={SimplifiedFilingOnboardingDemo}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="flex flex-col gap-6">
          <div>
            We worked on implementing an onboarding wizard which receives info
            from the user through a series of forms to autofill their return.
            The process is more straightforward and efficient, as the user no
            longer has to scroll and go through each of the Build Your Return
            sections as shown{" "}
            <TextLink to={Links.get("Wealthsimple Tax") ?? ""}>here</TextLink>.
            Users are prompted with exactly what they need to input, in the
            correct order, so they don’t even need to think about it.
          </div>
          <div>
            The wizard was built on a state machine, whereby the progression of
            steps depends on layers of conditions. The state machine is very
            flexible and allows for complicated flows, i.e. branching to
            different states, going backwards, skipping states, etc.
          </div>
          <div className="font-semibold">Key Features:</div>
          <List items={sfoFeatures} />
          <div className="font-semibold">What I learned/acomplished:</div>
          <List items={sfoLearnings} />
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-10">
        <span className="text-2xl">🐛 CRA Import Bugs (Localization)</span>
        I was introduced to localization and got to work on it throughout the
        term. Since Wealthsimple is Canadian, their products are offered in both
        English and French. All notable text in the app can be traced back to a
        unique identifier key, and a special function fetches either the EN or
        FR translation depending on the selected locale on the front end. In
        filing, some slips were missing translations, so I was tasked with
        investigating what the keys were and creating translation files.
        <ImageCarousel
          images={[
            {
              src: CraImportBugsImage,
              caption: "HBP and LLP Repayments box in EN (top) and FR (bottom)",
            },
          ]}
        />
      </div>
      <Divider />
      <div className="flex flex-col gap-10">
        <span className="text-2xl">❌ Chromatic False Positives Bug</span>
        <div className="flex flex-col gap-6">
          <div>
            This was one of my first projects on the team. Chromatic is a tool
            for Storybook, which is used for building UI components and pages
            externally, outside of the app. Chromatic detects UI changes in PRs
            and highlights them for review.
          </div>
          <div>
            There was a bug causing Chromatic to detect false positives. It was
            no longer serving as a useful tool, as it became difficult to
            distinguish between real and false changes. It was up to me to
            investigate the root cause and fix it. Turns out that there was a
            problem with the way Chromatic was configured with the app, and
            changing certain parameters solved this. This bug was a really
            challenging one to tackle and required a lot of paired
            investigation. More often than not, I would make a change that only
            remedied the issue, but it would always resurface. I persevered and
            it paid off, as the tool became highly useful during rapid UI
            development for the SFO project.
          </div>
        </div>
        <ImageCarousel
          images={[
            {
              src: ChromaticBugImage,
              caption:
                "Left (before fix): false positive, Right (after fix): no changes detected",
            },
          ]}
        />
      </div>
    </div>
  );
};
