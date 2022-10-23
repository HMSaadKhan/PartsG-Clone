import React from "react";
import { Card } from "reactstrap";

import "./shoppingpersonalInfo.css";
import { StyledButton } from "../../components/StyledButtons/StyledButton";
const OrderSummary = () => {
  return (
    <>
      <h3>Order Summary</h3>
      <Card className="shopping-info-order-summary">
        <div className="shopping-info-row">
          <div className="shopping-info-order-summary-text">Product</div>
          <div className="shopping-info-order-summary-value">1</div>
        </div>
        <div className="shopping-info-row">
          <div className="shopping-info-order-summary-text">Subtotal</div>
          <div className="shopping-info-order-summary-value">1</div>
        </div>
        <div className="shopping-info-row">
          <div className="shopping-info-order-summary-text">
            Shipment Charges
          </div>
          <div className="shopping-info-order-summary-value">1</div>
        </div>
        <div className="shopping-info-row">
          <div className="shopping-info-order-summary-total">Total</div>
          <div className="shopping-info-order-summary-total">1</div>
        </div>
        <div className="shopping-info-place-order">
          <StyledButton>Proceed</StyledButton>
        </div>
      </Card>
    </>
  );
};

export default OrderSummary;
