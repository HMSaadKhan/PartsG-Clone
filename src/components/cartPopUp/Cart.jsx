import React from "react";
import { Popover, PopoverBody, PopoverHeader } from "reactstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./cart.css";
import { route } from "../../common";
import { StyledButton } from "../StyledButtons/StyledButton";
import CartProductComponent from "./CartProductComponent";

const Cart = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const { cartItems, subtotal } = useSelector((state) => state.cart);
  return (
    <Popover
      className="cart-popover"
      flip
      placement="bottom"
      target="Popover1"
      trigger="legacy"
      toggle={() => {
        setIsOpen(!isOpen);
      }}
      isOpen={isOpen}
    >
      <div className="cart-popover-body">
        <p className="cart-count">Your Cart have {cartItems.length} Items</p>
        <div className="cart-hr">
          <hr />
        </div>
      </div>
      {cartItems.length > 0 ? (
        <>
          <PopoverBody>
            <div className="cart-component">
              {cartItems.map((item) => {
                return <CartProductComponent key={item.id} item={item} />;
              })}
            </div>
          </PopoverBody>
          <PopoverHeader>
            <div className="cart-subtotal-container">
              <div className="cart-subtotal-heading">Subtotal</div>
              <div className="cart-subtotal-right">
                <div className="cart-subtotal-amount">PKR {subtotal}</div>
                <div className="cart-subtotal-disclaimer">
                  (Without Shppment Charges)
                </div>
              </div>
            </div>
          </PopoverHeader>
          <PopoverBody>
            <StyledButton
              onClick={() => {
                navigate(route.Shop);
                setIsOpen(!isOpen);
              }}
            >
              Proceed
            </StyledButton>
          </PopoverBody>
        </>
      ) : (
        <div className="empty-cart">
          <p>You Shopping Cart is Empty</p>
          <StyledButton
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Cancel
          </StyledButton>
        </div>
      )}
    </Popover>
  );
};

export default Cart;
