import React from "react";
import { Card } from "reactstrap";

import "./smallcard.css";
import { Icons, size } from "../../common";

export default function SmallCard({ Category, Action }) {
  const { MD } = Icons;
  return (
    <div>
      <Card className="myCard">
        <div className="ImageDiv">
          <img
            alt="Sample"
            src={Category.imageUrl}
            className="smallcard-image"
          />
        </div>
        <div className="CardText">
          <p>{Category.name ? Category.name : ""}</p>
          {Action && (
            <div className="smallcard-actions">
              <div>
                <MD.MdModeEdit size={size} />
              </div>
              <div>
                <MD.MdDelete size={size} />
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
