import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement,
  setquantity,
  deleteFromCart,
} from "../../redux/cart";

import { Icons } from "../../common";

const Products = ({ item }) => {
  const dispatch = useDispatch();
  const { cartItems, subtotal } = useSelector((state) => state.cart);
  const { RI } = Icons;
  return (
    <table className="product-info-table ">
      <tr className="product-info-row  product-info-table-row  product-info-values">
        <td>
          <div className="cart-image-container">
            <img src={item.link} alt="product" className="check-out-image" />
          </div>
        </td>
        <td className="product-info-name">{item.name}</td>
        <td>{item.model}</td>
        <td>PKR.{item.price}</td>
        <td>
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
        </td>
        <td>
          <div
            onClick={() => {
              dispatch(deleteFromCart(item.id));
            }}
          >
            <RI.RiDeleteBinLine size={30} />
          </div>
        </td>
        <td>PKR.{item.price * item.qty}</td>
      </tr>
    </table>
  );
};

export default Products;
