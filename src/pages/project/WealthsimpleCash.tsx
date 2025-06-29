import { Divider } from "../../components/design system/Divider";
import { Banner } from "../../components/design system/Banner";
import { List } from "../../components/design system/List";

import ETransferFundingDemo from "../../assets/videos/e-transfer-funding.mov";
import BillPayDemo from "../../assets/videos/bill-pay.mov";

export const WealthsimpleCash = () => {
  const eTransferFundingGoals = [
    "Instantly fund their account by sending an e-Transfer to themself",
    "Fund any Wealthsimple account (Spend, Stock & ETF, Crypto, etc.)",
    "Deposit more into their accounts with higher limits",
  ];

  const eTransferFundingLearnings = [
    "Component-based backend architecture",
    "Abstraction layers",
    "Rails models",
    "GraphQL mutations and queries",
    "Database migrations, schemas, PostgreSQL commands + queries",
    "End-to-end testing in different envs",
    "Unit testing with RSpec",
  ];

  const eTransferIncidentFeatures = [
    "SQL alert for failed transactions",
    "Improved logging for more efficient debugging",
    "Restructured the transaction creation process to prevent discrepancies with our provider and, in turn, client-facing problems",
  ];

  const billPayFeatures = [
    "Search for a payee",
    "Make the payment",
    "Save the payee",
    "Retain history of previous bill payments",
  ];

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-6">
        <div>
          Wealthsimple’s top priority for 2022 was to build a better spend,
          send, and save experience than the big banks, to become the primary
          financial relationship for the future majority. I returned to
          Wealthsimple as a software and PM intern on the Cash Chequing Account
          Team, where I had the unique experience of bringing banking features
          to life from product vision to implementation.
        </div>
        <div>
          This term was very challenging, as it was my first time doing backend,
          coding in Ruby, and working with every tool which was used. I felt the
          impact of my work, as my team was doing the most important work in the
          company and I had a lot of ownership over groundwork development.
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-10">
        <span className="text-2xl">💸 e-Transfer Funding</span>
        <Banner icon={"✨"}>
          Increased account deposits by 25% by designing and developing a
          scalable and secure e-Transfer backend.
        </Banner>
        <div className="flex flex-col gap-6">
          <div>
            We had the functionality to send e-Transfers through Cash to
            non-Cash clients, but were now building the functionality for
            transactions in the opposite direction. The e-Transfer Funding
            project was phase 1 of e-Transfers into Cash, phase 2 was P2P
            receiving. We were enabling clients to:
          </div>
          <List isOrdered items={eTransferFundingGoals} />
        </div>
        <div className="flex justify-center">
          <video
            className="rounded-xl"
            width="300px"
            src={ETransferFundingDemo}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="flex flex-col gap-6">
          <div>
            For the technical evaluation, I created the connection between our
            internal banking service and our vendor handling the movement of
            money. I wrote code to receive and handle their REST-based webhook
            calls by going through an intermediary that assessed basic auth and
            proxied to our service.
          </div>
          <div>
            For the playtest, I defined patterns for the business logic that
            initiates e-Transfer funding and processes the transaction with our
            provider. This stage of development required close collaboration
            with the Money Movement team in the making of technical design /
            architectural decisions. We also collaborated with the Cash P2P
            team, as the e-Transfer funding project made up the foundation
            (~75%) of the work they had to do for e-Transfer receiving.
          </div>
          <div className="font-semibold">What I learned/accomplished:</div>
          <List items={eTransferFundingLearnings} />
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-10">
        <span className="text-2xl">🚩 e-Transfer Sends Incident</span>
        <Banner icon={"✨"}>
          Resolved an e-Transfer issue affecting 215 transactions by improving
          system resilience through SQL alerts, enhanced logging, and
          restructuring the transaction flow.
        </Banner>
        <div className="flex flex-col gap-6">
          <div>
            The existing e-Transfer send feature experienced an incident where
            transactions were failing on our end but not on our vendor’s end.
            This affected ~215 transactions and caused clients to retry sending
            multiple times or withdraw the funds. The incident was due to
            problems on both sides, but mainly the retry policy and a lack of
            resilience in our banking service.
          </div>
          <div>
            Having to drop everything and divert focus to incident work - wrap
            my head around the problem and devise a solution with my team, was a
            step out of my comfort zone. BUT, it was an exciting experience of
            accelerated learning.
          </div>
          <div className="font-semibold">Key Features:</div>
          <List items={eTransferIncidentFeatures} />
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-10">
        <span className="text-2xl">🧾 Bill Pay</span>
        <Banner icon={"✨"}>
          Conducted UX research for Bill Pay, defining key metrics and features,
          leading to 3 million bills paid.
        </Banner>
        <div className="flex justify-center">
          <video
            className="rounded-xl"
            width="300px"
            src={BillPayDemo}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="flex flex-col gap-6">
          <div>
            Bill pay was my first project and I worked as an associate product
            DRI. I learned what it’s like to start a project from scratch and
            use PM frameworks to guide our product decisions.
          </div>
          <div>
            I worked with the Cash UXR team to conduct client interviews, which
            helped us identify user pain points with current bill pay solutions
            and the most important functionalities to clients. We also ideated
            ways we could add delight to make the bill pay experience better
            than the banks. I created a project brief outlining the problem and
            how we’re gonna solve it, making it super clear to design and
            engineering. This allowed us to define the north star experience,
            align on phasing, and begin preliminary designs.
          </div>
          <div className="font-semibold">Key Features:</div>
          <List items={billPayFeatures} />
        </div>
      </div>
    </div>
  );
};
