import React from "react";
import { useDispatch } from "react-redux";

import "./cart.css";
import {
  increment,
  decrement,
  setquantity,
  deleteFromCart,
} from "../../redux/cart";
import { Icons } from "../../common";

const CartProductComponent = ({ item }) => {
  const dispatch = useDispatch();
  const { RI } = Icons;
  return (
    <>
      <div className="cart-content">
        <div className="cart-left">
          <div className="cart-image-container">
            <img src={item.link} alt="product" className="cart-image" />
          </div>
          <div className="cart-counter">
            <div>
              <input
                className="cart-input"
                type="number"
                value={item.qty}
                onChange={(e) => {
                  dispatch(setquantity({ value: e.target.value, id: item.id }));
                }}
              />
            </div>
            <div className="cart-add-sub-counter">
              <span
                className="cart-add-input"
                onClick={() => dispatch(increment(item.id))}
              >
                +
              </span>
              <span
                className="cart-sub-input"
                onClick={() => dispatch(decrement(item.id))}
              >
                -
              </span>
            </div>
          </div>
        </div>
        <div className="cart-right">
          <div className="cart-product-name">{item.name}</div>
          <div className="cart-most-right">
            <div className="cart-product-price">{item.price}</div>
            <div
              onClick={() => {
                dispatch(deleteFromCart(item.id));
              }}
            >
              <RI.RiDeleteBinLine size={30} />
            </div>
          </div>
        </div>
      </div>
      <div className="cart-hr">
        <hr />
      </div>
    </>
  );
};

export default CartProductComponent;
