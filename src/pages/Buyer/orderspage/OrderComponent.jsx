import React from "react";

import { Breadcrumb, BreadcrumbItem, Card, CardBody } from "reactstrap";
import { route } from "../../../common";
import { useNavigate } from "react-router-dom";

const OrderComponent = ({ order }) => {
  const navigate = useNavigate();
  return (
    <>
      <Card className="order-list-card route-link"   onClick={() => {
          console.log("click");
          navigate(route.orderdetail);
        }}>
        <CardBody>
          <div
            className="order-list-card-content"
            onClick={() => {
              console.log("click");
              navigate(route.orderdetail);
            }}
          >
            <div>
              <span className="order-status">PKR.</span>
              {order.totalPrice}
            </div>
            <div>
              <span className="order-status">Status:&nbsp;</span>
              {order.status}
            </div>
            <div>
              <span className="order-status">Delivery Date:&nbsp;</span>
              {order.deliveryDate}
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default OrderComponent;
