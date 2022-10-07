import React from "react";
import { Button, Card, CardBody } from "reactstrap";
import "./brands.css";
import Image from "../../common/MovingImage.jpg";
import { BrandsData } from "../../common/BrandsData";
export default function Brands() {
  return (
    <div>
      <div className="parentDiv">
        {BrandsData.slice(0, 6).map((Brand) => {
          return (
            <div className="maindiv" key={Brand.id}>
              <Card className="myCard">
                <div className="ImageDiv">
                  <img alt="Sample" src={Brand.link} width="200" />
                </div>
              </Card>
            </div>
          );
        })}
      </div>
      <div className="parentDiv">
        <Button>View All Brands</Button>
      </div>
    </div>
  );
}
