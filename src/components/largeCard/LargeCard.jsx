import React from "react";
import { Card } from "reactstrap";
import "./largeCard.css";

export default function LargeCard() {
  return (
    <div>
      <Card className="myCard">
        <div className="ImageDiv">
          <img
            alt="Sample"
            src="https://backend.partsg.com/storage/360/conversions/p-1-(2)-thumb.jpg"
            width="200"
          />
          <span>Name</span>
          <span>Model Number</span>
          <span>Price</span>
          <div>
               
          </div>
          {/* <p className="CardText">{name ? name : ""}</p> */}
        </div>
      </Card>
    </div>
  );
}
