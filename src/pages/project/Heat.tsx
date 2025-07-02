import { List } from "../../components/design system/List";
import { ImageCarousel } from "../../components/design system/ImageCarousel";
import { TextLink } from "../../components/design system/TextLink";
import { Links } from "../../Links";

import SymposiumPosterImage from "../../assets/images/projects/heat/symposium-poster.png";
import HeatPrototypeImage from "../../assets/images/projects/heat/heat-prototype.jpg";
import TeamPhotoImage from "../../assets/images/projects/heat/team-photo.jpg";

export const Heat = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <div>
          HEAT was my final-year interdisciplinary capstone project at the
          University of Waterloo.
        </div>
        <div>
          Densely populated Canadian cities are increasingly facing the urban
          heat island (UHI) effect, where infrastructure absorbs and retains
          heat, making cities significantly hotter than surrounding areas. This
          poses growing risks to public health, energy use, and urban
          livability, especially for vulnerable communities. Most existing
          solutions rely on satellite imagery, which lacks the spatial and
          temporal resolution to reveal how heat fluctuates throughout the day
          or what’s causing it at the street level.
        </div>
        <div>
          To address these gaps, we developed HEAT, a scalable, solar-powered
          sensor network that collects real-feel temperature data (humidity,
          wind, solar irradiance, and tree canopy coverage), to calculate Wet
          Bulb Globe Temperature (WBGT), a more accurate indicator of heat
          stress. Designed to be mounted on bikes, transit, or stationary posts,
          HEAT enables localized, high-resolution data collection across diverse
          urban environments. The data is visualized through ArcGIS heat maps,
          helping decision-makers identify hot zones, track changes over time,
          and inform targeted interventions like tree planting or reflective
          surface upgrades. By offering a cost-effective and mobile solution,
          HEAT empowers cities to build more climate-resilient communities. 🔥
        </div>
        <div className="flex gap-6">
          <TextLink to={Links.get("HEAT User Manual") ?? ""}>
            User manual
          </TextLink>
          <TextLink to={Links.get("HEAT Setup Tutorial") ?? ""}>
            Setup tutorial
          </TextLink>
        </div>
      </div>
      <ImageCarousel
        images={[
          { src: SymposiumPosterImage, caption: "Symposium poster" },
          { src: HeatPrototypeImage, caption: "Final prototype" },
          { src: TeamPhotoImage, caption: "The best team eva!" },
        ]}
      />
      <div className="flex flex-col gap-6">
        <div>
          As part of the interdisciplinary team behind HEAT, I wore many
          hats—contributing across product strategy, hardware development, and
          user storytelling. I was deeply involved from the project's earliest
          phases and played a key role in shaping both the vision and execution.
        </div>
        <div className="font-semibold">My contributions included:</div>
        <List
          items={[
            "Leading early ideation and scoping efforts, including stakeholder interviews with urban planners, public health researchers, and professors",
            "Applying product management techniques to define the problem, user needs, solution approach, key requirements, and team timeline",
            "Wiring sensors and programming Arduino code to retrieve and format real-time environmental data for WBGT calculations",
            "Designing, CADing, and 3D printing a custom solar panel mount to power the unit, and programming photoresistors to rotate it for optimal sunlight capture",
            "Contributing to the physical design and aesthetics of the sensor unit",
            "Drafting the product pitch and creating a setup tutorial video to help communicate the system and its value",
          ]}
        />
      </div>
    </div>
  );
};
