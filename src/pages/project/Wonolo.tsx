import { Divider } from "../../components/design system/Divider";
import { Banner } from "../../components/design system/Banner";
import { TextLink } from "../../components/design system/TextLink";
import { Links } from "../../Links";
import { List } from "../../components/design system/List";

export const Wonolo = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-6">
        <div>
          Wonolo is an on-demand staffing platform featuring a two-sided
          marketplace that connects businesses with skilled workers, while also
          empowering individuals to discover flexible income-generating
          opportunities and acquire valuable new skills.
        </div>
        <div>
          At Wonolo, I was a backend developer on the Backend Services team.
          This was my first time in a backend role, doing platform-level work
          rather than feature work. I had the opportunity to contribute to all
          the major projects my team undertook during the quarter, making a
          significant impact on the company.
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-10">
        <span className="text-2xl">⏰ Periodic Jobs</span>
        <Banner icon={"✨"}>
          Enhanced system scalability by reducing background job deployments by
          50% with a new scheduling pattern.
        </Banner>
        <div className="flex flex-col gap-6">
          <div>
            Wonolo uses{" "}
            <TextLink to={Links.get("Sidekiq") ?? ""}>Sidekiq</TextLink> to
            manage background processes. This term, we were upgrading Sidekiq
            with new features to improve our background processing and workflows
            within the core platform. The most significant change was the
            introduction of Periodic Jobs, as we redefined how jobs get
            scheduled, and I owned this project.
          </div>
          <div>
            Previously, we would register tasks with their cron schedules in a
            separate task-scheduling repo. Each of these was an endpoint that
            got hit in the core platform which fired a corresponding worker. See
            Key Features for the revised process.
          </div>
          <div className="font-semibold">Key Features:</div>
          <List
            items={[
              "Config files per env with worker-schedule key-value pairings",
              "Env var specifies the associated config file and allows Periodic Jobs to be toggled on/off",
              "File is read and each worker is registered under a schedule in Sidekiq",
            ]}
          />
          <div className="font-semibold">What I learned/accomplished:</div>
          <List
            items={[
              "Deprecated the task scheduling repo and eliminated its maintenance",
              "Reduced deployments required to schedule a worker from 2 to 1",
              "Gave a presentation to the engineering org demonstrating the new process",
              "Simplified the process such that its easier to understand and adopt across the engineering org, saving engineering time over the long run",
            ]}
          />
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-10">
        <span className="text-2xl">
          🚨 Alert for Potentially Fraudulent Payments
        </span>
        <Banner icon={"✨"}>
          Created a Slack alert to detect fraudulent payments, resulting in $30k
          savings from resolving three fraud cases.
        </Banner>
      </div>
      <Divider />
      <div className="flex flex-col gap-10">
        <span className="text-2xl">✏️ PAS Reconciliation</span>
        <div className="flex flex-col gap-6">
          <div>
            To record transactions, Wonolo used a legacy accounting system
            consisting of many types of tables. The goal of the Platform
            Accounting System (PAS) was to make it easier for engineers and the
            business to work with and understand the backend platform’s
            financial data. PAS consists of one table where 2 entries are
            created per event (debit and credit), and there are specific codes
            for the different types of events and accounts involved.
          </div>
          <div>
            For the Reconciliation epic, we needed to ensure that PAS data
            reconciled with data from the legacy system in order to validate the
            accuracy of PAS before switching systems.
          </div>
          <div className="font-semibold">What I learned/accomplished:</div>
          <List
            items={[
              "SQL queries - writing, analyzing data",
              "Investigated why values didn’t match up",
              "Identified and fixed bugs in the logic for recording data in PAS",
              "Completed 38 tickets!",
            ]}
          />
        </div>
      </div>
    </div>
  );
};
