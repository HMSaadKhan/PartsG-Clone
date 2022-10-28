import React from "react";
import { Card, CardBody } from "reactstrap";

import { OrderMenu, orderProducts } from "../../../common";
import OrderComponent from "./OrderComponent";

import "./order.css";
const Orders = () => {
  return (
    <div className="seller-admin-container">
      <div>
        <Card className="order-card mobile-view">
          <CardBody className="order-card-body">
            {OrderMenu.map((menu, index) => {
              return (
                <div key={index} className="order-heading">
                  {menu}
                </div>
              );
            })}
          </CardBody>
        </Card>
        {orderProducts.map((order) => {
          return <OrderComponent key={order.id} order={order} />;
        })}
      </div>
    </div>
  );
};

export default Orders;
