import React from "react";
import { Button, Card, CardBody } from "reactstrap";
import "./smallcard.css";
export default function SmallCard({ Brand, Name }) {
  return (
    <div>
      <Card className="myCard">
        <div className="ImageDiv">
          <img alt="Sample" src={Brand.link} width="200" />
        </div>
      </Card>
    </div>
  );
}
