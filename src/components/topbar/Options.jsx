import React from "react";
import { Badge } from "reactstrap";

import "./topbar.css";
import { Icons } from "../../common";
import Cart from "../cartPopUp/Cart";
import { useSelector } from "react-redux";

export default function Options() {
  const { BS, GR } = Icons;
  const [isOpen, setIsOpen] = React.useState(false);

  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div className="FlexBox-SA OptionMain">
      <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className="FlexBox-SA Options"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div className="option-cart">
          <BS.BsCart3 size={25} />
          {cartItems.length > 0 && (
            <div className="option-badge">{cartItems.length}</div>
          )}
        </div>
        <div id="Popover1" className="mobile-view">
          <div className="ColumnFlex">
            <b>Cart</b>
            <div>Add Product</div>
          </div>
        </div>
      </div>
      <div className="FlexBox-SA Options">
        <div>
          <GR.GrDocumentText size={25} />
        </div>
        <div className="mobile-view">
          <div className="ColumnFlex">
            <b>Quote</b>
            <div>Request Quote</div>
          </div>
        </div>
      </div>
      <div className="FlexBox-SA Options">
        <div>
          <GR.GrDocumentText size={25} />
        </div>
        <div className="mobile-view">
          <div className="ColumnFlex">
            <b>Custom</b>
            <div>Request quote</div>
          </div>
        </div>
      </div>
    </div>
  );
}
