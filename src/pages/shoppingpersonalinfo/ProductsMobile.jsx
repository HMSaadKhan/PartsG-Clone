import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement,
  setquantity,
  deleteFromCart,
} from "../../redux/cart";

import { Icons } from "../../common";

const ProductsMobile = ({ item }) => {
  const dispatch = useDispatch();
  const { cartItems, subtotal } = useSelector((state) => state.cart);
  const { RI } = Icons;
  return (
    <div className="product-info-table-mobile">
      <div className="mobile-cart-image-container">
        <div>
          <img src={item.link} alt="product" className="mobile-cart-image" />
        </div>
        <div className="product-info-name-mobile">{item.name}</div>
      </div>
      <div className="mobile-cart-detail-container">
        <div className="mobile-cart-detail-row">
          <span>Part/Model</span>
          <div>{item.model}</div>
        </div>
        <div className="mobile-cart-detail-row">
          <span>Pricce</span>
          <div>PKR.{item.price}</div>
        </div>
        <div className="mobile-cart-detail-row">
          <span>Qty</span>
          <div>
            <div className="cart-counter">
              <div>
                <input
                  className="cart-input"
                  type="number"
                  value={item.qty}
                  onChange={(e) => {
                    dispatch(
                      setquantity({ value: e.target.value, id: item.id })
                    );
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
        </div>
        <div className="mobile-cart-detail-row">
          <span>Remove</span>
          <div>
            <div
              onClick={() => {
                dispatch(deleteFromCart(item.id));
              }}
            >
              <RI.RiDeleteBinLine size={30} />
            </div>
          </div>
        </div>
        <div className="mobile-cart-detail-row">
          <span>Total</span>
          <div>PKR.{item.price * item.qty}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductsMobile;
