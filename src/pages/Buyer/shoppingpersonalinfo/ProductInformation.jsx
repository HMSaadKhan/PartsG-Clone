import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShipping } from "../../../redux/cart";

import Products from "./Products";
import ProductsMobile from "./ProductsMobile";

import "./shoppingpersonalInfo.css";
const ProductInformation = () => {
  const dispatch = useDispatch();

  const { cartItems, shipment } = useSelector((state) => state.cart);
  console.log({ shipment });

  return (
    <div className="shopping-info-product-info">
      <div className="shopping-info-product-info-border">
        {/* <div className="product-info-row shopping-info-row-heading"> */}
        <table className="product-info-table mobile-view">
          <tr className="product-info-row shopping-info-row-heading product-info-table-row">
            <td>Product</td>
            <td>Name</td>
            <td>Part/Model</td>
            <td>Unit Price</td>
            <td>Quantity</td>
            <td>Remove</td>
            <td>Total</td>
          </tr>
        </table>
        <div className="product-web-view">
          {cartItems.map((item) => {
            return <Products item={item} key={item.id} />;
          })}
        </div>
        <div className="product-mobile-view">
          {cartItems.map((item) => {
            return <ProductsMobile item={item} key={item.id} />;
          })}
        </div>

        <div className="shipping-cost-mobile-view">
          <div className="product-info-row product-info-shipping shipping-info-row">
            <div className="shopping-info-radio">
              <input
                type="radio"
                value={1000}
                name="shipping"
                onChange={(e) => {
                  console.log(e.target.value);
                  dispatch(setShipping(e.target.value));
                }}
              />
              Standard Delivery
            </div>
            <div>+1000 PKR</div>
            <div>10-15 Working Days</div>
          </div>
          <div className="product-info-row product-info-shipping shipping-info-row">
            <div className="shopping-info-radio">
              <input
                type="radio"
                value={5000}
                name="shipping"
                onChange={(e) => {
                  console.log(e.target.value);
                  dispatch(setShipping(e.target.value));
                }}
              />
              Express Delivery
            </div>
            <div>+5000 PKR</div>
            <div>7 Working Days</div>
          </div>
          <div className="product-info-row product-info-shipping shipping-info-row">
            <div className="shopping-info-radio">
              <input
                type="radio"
                value={500}
                name="shipping"
                onChange={(e) => {
                  dispatch(setShipping(e.target.value));
                }}
              />
              Budget Delivery
            </div>
            <div>+500 PKR</div>
            <div>1-2 months depending upon region, number of days may vary</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
