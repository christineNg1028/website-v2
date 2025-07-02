import { Divider } from "../../components/design system/Divider";
import { List } from "../../components/design system/List";
import { ImageCarousel } from "../../components/design system/ImageCarousel";

import AddPageImage from "../../assets/images/projects/travelrex/add-page.png";
import MapPageImage from "../../assets/images/projects/travelrex/map-page.png";
import DbDesignImage from "../../assets/images/projects/travelrex/db-design.png";
import ApiDesignImage from "../../assets/images/projects/travelrex/api-design.png";

export const TravelRex = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-6">
        <div>
          TravelRex was developed as the final project for a mobile apps course
          at UC3M in Madrid.
        </div>
        <div>The Problem:</div>
        <List
          items={[
            "Staying connected while travelling - social media apps don’t capture the whole context of a person’s travel experience, and messaging / video calling can be overwhelming",
            "Struggling to plan trips - Two in three (67%) travellers have become stressed due to 'information overload'",
          ]}
          isOrdered
        />
        <div>The Solution:</div>
        <div>
          TravelRex, a social cataloging app designed to bring you close to your
          friends’ travel adventures. Stay connected and up-to-date with their
          latest travel activities, from destinations they want to explore, to
          the places they've visited and reviewed. Create your own want-to-go
          and visited lists that you can easily share!
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-10">
        <span className="text-2xl">➕ Add page</span>
        <div>
          I developed the Add functionality, enabling users to create and share
          reviews of places they’ve traveled to. This included building a post
          creation form with fields for title, destination, description, and a
          trip rating out of 5, along with optional photo uploads. Submitted
          posts are dynamically added to the Timeline and map, with their
          Firebase IDs stored in the user's visited collection. I also
          implemented the ability for users to add locations to a personal "want
          to go" list.
        </div>
        <ImageCarousel images={[{ src: AddPageImage, width: "300px" }]} />
      </div>
      <Divider />
      <div className="flex flex-col gap-10">
        <span className="text-2xl">📍 Map page</span>
        <div>
          I developed the interactive map functionality by integrating the app
          with the Google Maps API and Geocode API to visualize visited
          locations. I implemented a system to display pins on the map—red for
          the current user's destinations and blue for their friends'. Users can
          interact with these markers to view post details such as the title and
          author, enhancing the social and exploratory aspects of the app.
        </div>
        <ImageCarousel images={[{ src: MapPageImage, width: "300px" }]} />
      </div>
      <Divider />
      <div className="flex flex-col gap-10">
        <span className="text-2xl">💭 Backend Design</span>
        <ImageCarousel
          images={[
            {
              src: DbDesignImage,
              caption:
                "High-level Firebase structure showing two users and their Visited subcollections",
            },
            {
              src: ApiDesignImage,
              caption:
                "API design outlining queries to connect frontend pages with Firebase backend",
            },
          ]}
        />
      </div>
    </div>
  );
};
