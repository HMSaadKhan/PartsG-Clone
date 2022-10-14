import React from "react";

import { ImageData } from "../../common";
import CustomCarouselButton from "./CustomCarouselButton";
export default function ImageComponent({
  data,
  setNext,
  setPrev,
  selectedButton,
  setSelectedButton,
}) {
  return (
    <div
      key={data.id}
      className="carousel"
      style={{ backgroundImage: `url(${data.link})` }}
    >
      <div>
        <div className="content">
          <div>
            <div className="FirstLine">
              {data.text1}
              <b>&nbsp;{data.text2}</b>
            </div>
            <div className="SecondLine">
              {data.text3}
              <br />
              {data.text4}
            </div>
          </div>
          <div>
            <button className="shopNow">Shop Now</button>
          </div>
          <div className="buttonBg">
            {ImageData.map((data, index) => {
              return (
                <CustomCarouselButton
                  key={index}
                  index={index}
                  setNext={setNext}
                  setPrev={setPrev}
                  selectedButton={selectedButton}
                  setSelectedButton={setSelectedButton}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
