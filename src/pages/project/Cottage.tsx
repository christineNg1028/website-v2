import { ImageCarousel } from "../../components/design system/ImageCarousel";

import CottageFrontView from "../../assets/images/projects/cottage/interiordesign2.png";
import CottageSideView from "../../assets/images/projects/cottage/interiordesign.png";
import CottageTopView from "../../assets/images/projects/cottage/interiordesign7.png";

export const Cottage = () => {
  const images = [
    { src: CottageFrontView, caption: "Front view" },
    { src: CottageSideView, caption: "Side view" },
    { src: CottageTopView, caption: "Top view" },
  ];
  return <ImageCarousel images={images} />;
};
