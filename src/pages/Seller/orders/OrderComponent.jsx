import React from "react";
import { Card, CardBody } from "reactstrap";
import { StyledButton } from "../../../components/StyledButtons/StyledButton";

const OrderComponent = ({ order }) => {
  return (
    <div>
      <Card className="order-card">
        <CardBody className="order-card-body">
          <div>{order.name}</div>
          <div className="mobile-view">PKR.{order.unitPrice}</div>
          <div className="mobile-view">{order.quantity}</div>
          <div className="mobile-view">
            PKR.{order.unitPrice * order.quantity}
          </div>
          <div
            className={`order-status ${
              order.orderStatus === "pending" ? "pending" : "delivered"
            }`}
          >
            {order.orderStatus}
          </div>
          <div className="order-action">
            <StyledButton
              className="styled-button"
              disabled={order.orderStatus === "delivered" ? true : false}
            >
              {order.orderStatus === "delivered" ? "Delivered" : "Deliver"}
            </StyledButton>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default OrderComponent;
