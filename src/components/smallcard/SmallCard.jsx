import React from "react";
import { Card } from "reactstrap";

import "./smallcard.css";

export default function SmallCard({ Category }) {
  return (
    <div>
      <Card className="myCard">
        <div className="ImageDiv">
          <img alt="Sample" src={Category.link} width="200" />
          <div className="CardText">
            <p>{Category.name ? Category.name : ""}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
