import React from "react";

import "./shoppingpersonalInfo.css";
const ProductInformation = () => {
  return (
    <div className="shopping-info-product-info">
      <div className="shopping-info-product-info-border">
        <div className="product-info-row shopping-info-row-heading">
          <div>Product</div>
          <div>Name</div>
          <div>Part/Model</div>
          <div>Unit Price</div>
          <div>Quantity</div>
          <div>Remove</div>
          <div>Total</div>
        </div>
        <div className="product-info-row">
          <div>Product</div>
          <div>Name</div>
          <div>Part/Model</div>
          <div>Unit Price</div>
          <div>Quantity</div>
          <div>Remove</div>
          <div>Total</div>
        </div>
        <div className="product-info-row">
          <div>Standard Delivery</div>
          <div>+1000 PKR</div>
          <div>10-15 Working Days</div>
        </div>
        <div className="product-info-row">
          <div>Express Delivery</div>
          <div>+5000 PKR</div>
          <div>7 Working Days</div>
        </div>
        <div className="product-info-row">
          <div>Budget Delivery</div>
          <div>+500 PKR</div>
          <div>1-2 months depending upon region, number of days may vary</div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
