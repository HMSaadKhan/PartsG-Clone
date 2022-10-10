import React from "react";
import { Button, Card, CardBody } from "reactstrap";
import "./brands.css";
import Image from "../../common/MovingImage.jpg";
import { BrandsData } from "../../common/BrandsData";
import SmallCard from "../smallcard/SmallCard";
import Carousel from "react-elastic-carousel";
import { breakPoints } from "../../common/BreakPoints";
export default function Brands() {
  return (
    <div>
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
