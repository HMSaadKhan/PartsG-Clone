import React, { useState } from "react";
import Image from "../../common/front-image.png";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import "./displayedimages.css";

const items = [
  {
    src: Image,
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
  },
  {
    src: Image,
    altText: "Slide 2",
    caption: "Slide 2",
    key: 2,
  },
  {
    src: Image,
    altText: "Slide 3",
    caption: "Slide 3",
    key: 3,
  },
];

export default function DisplayedImages() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.key}
      >
        <img src={item.src} alt={item.altText} className="displayImg" />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
      </Carousel>
        <div>
          E-Commerce Platform for
          <b>&nbsp;Industrial Equipments</b>
        </div>
    </>
  );
}
