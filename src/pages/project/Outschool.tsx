import { Divider } from "../../components/design system/Divider";
import { List } from "../../components/design system/List";
import { Banner } from "../../components/design system/Banner";
import { ImageCarousel } from "../../components/design system/ImageCarousel";

import MakeItOngoingParentDemo from "../../assets/videos/make-it-ongoing-parent.mp4";
import MakeItOngoingTeacherDemo from "../../assets/videos/make-it-ongoing-teacher.mp4";
import ParentDashboardDemo from "../../assets/videos/parent-dashboard.mp4";
import MeetingsTableFeedbackImage from "../../assets/images/projects/outschool/meetings-table-feedback.png";

export const Outschool = () => {
  const problemsList = [
    "Not easy to extend existing finite enrollment – When a parent signs up for a 1:1 class using any of the options with an end date (4, 8, 12 weeks), extending that enrollment requires them to use the same flow as if they were enrolling for the first time.",
    "No notifications enrollment is about to end – Parents and educators are not given heads up when an enrollment is approaching an end date, so that they can extend the sessions. If they notice too late, their regular session time could be booked by someone else resulting in loss of enrollment.",
  ];

  const makeItOngoingParentGoals = [
    "Reveal which classes are one-time vs. recurring",
    "Provide an easy way to extend duration of enrollment",
  ];

  const makeItOngoingParentFeatures = [
    "Updated design of Upcoming Meetings table",
    "Option given for one-time meetings that don’t have future recurring meetings same time slot AND last recurring meetings of time slot",
    "Defaults to next week same time, BUT teacher may not be available (only show duration options within which teacher has availability)",
  ];

  const makeItOngoingTeacherGoals = [
    "Inform whether enrollment is ongoing or has an end date",
    "Provide method to request meetings for session time in future",
  ];

  const makeItOngoingTeacherFeatures = [
    "Option given to same meetings, mirrors parent side",
    "Make it ongoing is meeting request/suggestion flow",
    "Suggests ongoing forever meetings of same time slot starting next week by default",
  ];

  const parentDashboardFeatures = [
    "Countdown chip when have 3, 2, 1 remaining sessions",
    "Recently completed section shows first 3 completed/withdrawn classes AND 1:1 that have no remaining meetings (previously were shown under Upcoming)",
    ">3 recently completed, view all under Transcripts",
  ];

  return (
    <div className="flex flex-col gap-12">
      Outschool is an e-learning platform that offers live, small-group and 1:1
      classes for students ages 3–18, helping learners explore their interests
      through interactive lessons taught by independent educators. As a Software
      Engineer Intern on the Supply Pod team, I worked on features supporting
      1:1 tutoring, building tools for both the parent and teacher experiences.
      <Divider />
      <div className="flex flex-col gap-10">
        <span className="text-2xl">🔁 Retention</span>
        <Banner icon={"✨"}>
          Boosted recurring 1:1 tutoring enrollments from 24% to 32% by
          implementing and user testing retention features.
        </Banner>
        <div className="flex flex-col gap-6">
          <div>Tutoring data:</div>
          <List
            items={[
              '50% of enrollments are 1-time, 24% are "ongoing forever" and the rest are in-between',
              "4.64 – average meetings created during enrollment for new buyers",
            ]}
          />
          <div className="font-semibold">
            Objective: Extending an existing 1:1 enrollment should be effortless
            and not require re-enrollment
          </div>
          <div>Problem we are solving & why:</div>
          <List items={problemsList} isOrdered />
        </div>
        <span>👩‍👧 Make it Ongoing for Parent</span>
        <div className="flex flex-col gap-6">
          <div>Goal:</div>
          <List items={makeItOngoingParentGoals} isOrdered />
        </div>
        <div className="flex justify-center">
          <video
            className="rounded-xl"
            width="100%"
            src={MakeItOngoingParentDemo}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="font-semibold">Key Features:</div>
          <List items={makeItOngoingParentFeatures} />
        </div>
        <span>👩‍🏫 Make it Ongoing for Teacher</span>
        <div className="flex flex-col gap-6">
          <div>Goal:</div>
          <List items={makeItOngoingTeacherGoals} isOrdered />
        </div>
        <div className="flex justify-center">
          <video
            className="rounded-xl"
            width="100%"
            src={MakeItOngoingTeacherDemo}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="font-semibold">Key Features:</div>
          <List items={makeItOngoingTeacherFeatures} />
        </div>
        <ImageCarousel
          images={[
            {
              src: MeetingsTableFeedbackImage,
              caption: "Users loved the new Meetings table design!",
            },
          ]}
        />
        <span>👨‍👦 Parent Dashboard</span>
        <div className="flex justify-center">
          <video
            className="rounded-xl"
            width="100%"
            src={ParentDashboardDemo}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="font-semibold">Key Features:</div>
          <List items={parentDashboardFeatures} />
        </div>
        I owned this project end-to-end, starting from early brainstorming
        through to implementation. I partnered with design and UX to define
        goals and evaluated potential solutions based on feasibility,
        engineering effort, and user value. I led user interviews to test our
        assumptions, uncovering insights around scheduling, reminders, and
        communication preferences, and worked closely with designers to guide
        iterations based on that feedback. I also helped shape the tradeoffs
        between in-app and email notifications to balance usability with
        engagement without overwhelming users.
      </div>
    </div>
  );
};
