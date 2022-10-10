import React from "react";
import { Button, Card, CardBody } from "reactstrap";
import "./smallcard.css";
export default function SmallCard({ link, name }) {
  return (
    <div>
      <Card className="myCard">
        <div className="ImageDiv">
          <img alt="Sample" src={link} width="200" />
          <p className="CardText">{name ? name : ""}</p>
        </div>
      </Card>
    </div>
  );
}
