import React from "react";
import { Button, Card, CardBody } from "reactstrap";
import "./brands.css";
import Image from "../../common/MovingImage.jpg";
import { BrandsData } from "../../common/BrandsData";
import SmallCard from "../smallcard/SmallCard";
export default function Brands() {
  return (
    <div>
      <div className="parentDiv">
        {BrandsData.slice(0, 6).map((Brand) => {
          return (
            <div className="maindiv" key={Brand.id}>
              <SmallCard Brand={Brand} />
              {/* <Card className="myCard">
                <div className="ImageDiv">
                  <img alt="Sample" src={Brand.link} width="200" />
                </div>
              </Card> */}
            </div>
          );
        })}
      </div>
      <div className="parentDiv">
        <button className="Btn"> View All Brands</button>
      </div>
    </div>
  );
}
