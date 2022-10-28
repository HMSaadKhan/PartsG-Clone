import React from "react";
import { Card } from "reactstrap";

import { useSelector } from "react-redux";

import "./shoppingpersonalInfo.css";
import { StyledButton } from "../../../components/StyledButtons/StyledButton";
const OrderSummary = () => {
  const { cartItems, subtotal, total, shipment } = useSelector(
    (state) => state.cart
  );
  return (
    <>
      <h3>Order Summary</h3>
      <Card className="shopping-info-order-summary">
        <div className="shopping-info-row">
          <div className="shopping-info-order-summary-text">Product</div>
          <div className="shopping-info-order-summary-value">
            {cartItems.length}
          </div>
        </div>
        <div className="shopping-info-row">
          <div className="shopping-info-order-summary-text">Subtotal</div>
          <div className="shopping-info-order-summary-value">
            PKR.{subtotal}
          </div>
        </div>
        <div className="shopping-info-row">
          <div className="shopping-info-order-summary-text">
            Shipment Charges
          </div>
          <div className="shopping-info-order-summary-value">{shipment}</div>
        </div>
        <div className="shopping-info-row">
          <div className="shopping-info-order-summary-total">Total</div>
          <div className="shopping-info-order-summary-total">PKR.{total}</div>
        </div>
        <div className="shopping-info-place-order">
          <StyledButton>Proceed</StyledButton>
        </div>
      </Card>
    </>
  );
};

export default OrderSummary;
