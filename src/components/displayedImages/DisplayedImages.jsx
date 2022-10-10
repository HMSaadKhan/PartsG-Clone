import React, { useState } from "react";
import Image from "../../common/front-image.png";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button,
} from "reactstrap";
import "./displayedimages.css";

const Data = [
  {
    id: 0,
    link: Image,
    text1: " E-Commerce Platform for",
    text2: " Industrial Equipments",
    text3:
      "PartsG is an interactive e-commerce platform for buying industrial and domestic",
    text4: " equipment of excellent quality on few clicks.",
  },
  {
    id: 1,
    link: Image,
    text1: " E-Commerce Platform for",
    text2: " Industrial Equipments",
    text3:
      "PartsG is an interactive e-commerce platform for buying industrial and domestic",
    text4: " equipment of excellent quality on few clicks.",
  },
  {
    id: 2,
    link: Image,
    text1: " E-Commerce Platform for",
    text2: " Industrial Equipments",
    text3:
      "PartsG is an interactive e-commerce platform for buying industrial and domestic",
    text4: " equipment of excellent quality on few clicks.",
  },
];

export default function DisplayedImages() {
  const [prev, setprev] = useState(0);
  const [next, setnext] = useState(1);

  return (
    <div className="main">
      {Data.slice(prev, next).map((data) => {
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
                  <button
                    onClick={() => {
                      setnext(1);
                      setprev(0);
                    }}
                    className="SelectionButton"
                  >
                    1
                  </button>
                  <button
                    onClick={() => {
                      setnext(2);
                      setprev(1);
                    }}
                    className="SelectionButton"
                  >
                    2
                  </button>
                  <button
                    onClick={() => {
                      setnext(3);
                      setprev(2);
                    }}
                    className="SelectionButton"
                  >
                    3
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
