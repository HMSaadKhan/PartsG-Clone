import React from "react";
import { Card, CardBody } from "reactstrap";
import { Icons } from "../../../common";

const ShopComponent = ({ shop }) => {
  const { MD } = Icons;
  return (
    <div>
      <Card className="shops-card">
        <CardBody className="shops-card-body">
          <div>{shop.name}</div>
          <div className="shops-email">{shop.email}</div>
          <div>{shop.role.name}</div>
          <div>
            <MD.MdDelete size={25} />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ShopComponent;
