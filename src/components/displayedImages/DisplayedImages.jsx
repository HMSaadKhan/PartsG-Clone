import React, { useState } from "react";
// import Carousel from "react-elastic-carousel";

import { ImageData } from "../../common";
import "./displayedimages.css";
import ImageComponent from "./ImageComponent";

export default function DisplayedImages() {
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(1);
  const [selectedButton, setSelectedButton] = useState(0);

  return (
    <div className="Imagemain">
      {/* <Carousel breakPoints={breakPointsforImages}> */}
      {ImageData.slice(prev, next).map((data) => {
        return (
          <div
            key={data.id}
            className="carousel"
            style={{ backgroundImage: `url(${data.link})` }}
          >
            <ImageComponent
              data={data}
              setNext={setNext}
              setPrev={setPrev}
              selectedButton={selectedButton}
              setSelectedButton={setSelectedButton}
            />
            ;
          </div>
        );
      })}
      {/* </Carousel> */}
    </div>
  );
}
