import React from "react";
import Carousel from "react-elastic-carousel";

import "./brands.css";
import { BrandsData, breakPoints } from "../../common";
import SmallCard from "../smallcard/SmallCard";

export default function Brands() {
  return (
    <div className="brandsmain">
      <Carousel breakPoints={breakPoints} enableAutoPlay>
        {BrandsData.map((Brand) => {
          return (
            <div className="maindiv" key={Brand.id}>
              <SmallCard link={Brand.link} />
            </div>
          );
        })}
      </Carousel>
      <div className="parentDiv">
        <button className="Btn"> View All Brands</button>
      </div>
    </div>
  );
}
