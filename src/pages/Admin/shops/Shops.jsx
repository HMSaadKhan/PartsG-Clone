import React, { useState } from "react";
import { Shop } from "react-bootstrap-icons";
import { Card, CardBody } from "reactstrap";
import { ShopsMenu, Shops as ShopsData } from "../../../common";
import ShopComponent from "./ShopComponent";

import { Icons } from "../../../common";
import "./shops.css";
import CreateShop from "../createshop/CreateShop";
const Shops = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const { IO } = Icons;
  return (
    <>
      <div className="seller-admin-container">
        <CreateShop modal={modal} toggle={toggle} />
        <div className="add-icon-button">
          <IO.IoIosAddCircle size={50} onClick={toggle} />
        </div>
        <div>
          <Card className="shops-card">
            <CardBody className="shops-card-body">
              {ShopsMenu.map((menu, index) => {
                return (
                  <div key={index} className="shops-heading">
                    {menu}
                  </div>
                );
              })}
            </CardBody>
          </Card>
          {ShopsData.map((shop) => {
            return <ShopComponent key={Shop._id} shop={shop} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Shops;
