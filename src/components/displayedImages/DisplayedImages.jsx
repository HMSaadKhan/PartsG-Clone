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

export default function DisplayedImages() {
  return (
    <div className="main">
      <div className="content">
        <div className="FirstLine">
          E-Commerce Platform for
          <b>&nbsp;Industrial Equipments</b>
        </div>
        <div className="SecondLine">
          PartsG is an interactive e-commerce platform for buying industrial and
          domestic
          <br />
          equipment of excellent quality on few clicks.
        </div>
        <button className="shopNow">Shop Now</button>
      </div>
    </div>
  );
}
