import React, { useState } from "react";
import Carousel from "react-elastic-carousel";

import { ImageData, breakPointsforImages } from "../../common";
import "./displayedimages.css";
import ImageComponent from "./ImageComponent";

export default function DisplayedImages() {
  const [prev, setprev] = useState(0);
  const [next, setnext] = useState(1);

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
            <ImageComponent data={data} setnext={setnext} setprev={setprev} />;
          </div>
        );
      })}
      {/* </Carousel> */}
    </div>
  );
}
