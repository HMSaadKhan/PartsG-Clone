import React from "react";

import "./topbar.css";
import { Icons, size } from "../../common";
import Cart from "../cartPopUp/Cart";
import { useSelector } from "react-redux";
import ChatPopup from "../chatPopup/ChatPopup";

export default function Options() {
  const { BS, GR } = Icons;
  const [isOpen, setIsOpen] = React.useState(false);
  const [isChatOpen, setIsChatOpen] = React.useState(false);

  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div className="FlexBox-SA OptionMain">
      <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
      <ChatPopup isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
      <div
        id="Popover1"
        className="FlexBox-SA Options"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div className="option-cart">
          <BS.BsCart3 size={size} />
          {cartItems.length > 0 && (
            <div className="option-badge">{cartItems.length}</div>
          )}
        </div>
        <div className="mobile-view">
          <div className="ColumnFlex">
            <b>Cart</b>
            <div>Add Product</div>
          </div>
        </div>
      </div>
      <div
        id="chatpopover"
        className="FlexBox-SA Options"
        onClick={() => {
          console.log(isChatOpen);
          setIsChatOpen(!isChatOpen);
        }}
      >
        <div>
          <BS.BsChatDots size={size} />
        </div>
        <div className="mobile-view">
          <div className="ColumnFlex">
            <b>Messages</b>
            <div>Check Messages</div>
          </div>
        </div>
      </div>
      <div className="FlexBox-SA Options">
        <div>
          <GR.GrDocumentText size={size} />
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
