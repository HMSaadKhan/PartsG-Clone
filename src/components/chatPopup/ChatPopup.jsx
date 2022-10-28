import React from "react";
import {
  Popover,
  PopoverBody,
  PopoverHeader,
  Card,
  CardBody,
} from "reactstrap";

import "./chatpopup.css";
import StyledInputField from "../StyledInputField/StyledInputField";
import { useSelector } from "react-redux";
import { conversations, route } from "../../common";
import { useNavigate } from "react-router-dom";
import ChatComponent from "./ChatComponent";
import { StyledButton } from "../StyledButtons/StyledButton";
import { Icons, size } from "../../common";

const ChatPopup = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const { MD } = Icons;
  //   const { cartItems, subtotal } = useSelector((state) => state.cart);
  return (
    <Popover
      className="chat-popover"
      flip
      placement="bottom"
      target="chatpopover"
      trigger="legacy"
      toggle={() => {
        setIsOpen(!isOpen);
      }}
      isOpen={isOpen}
    >
      {conversations.length > 0 ? (
        <>
          <PopoverBody>
            <div className="buyer-chat-component">
              {/* <div>
                {conversations.map((chatList) => {
                  return (
                    <ChatComponent key={chatList._id} chatList={chatList} />
                  );
                })}
              </div> */}
              <div className="buyer-messages">
                <div className="buyer-messages-area">hello</div>
                <div className="buyer-messages-area">hello</div>
                <div className="buyer-messages-area">hello</div>
                <div className="buyer-messages-area">hello</div>
                <div className="buyer-messages-area">hello</div>
              </div>
              <StyledInputField endIcon={<MD.MdSend size={size} />} />
            </div>
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

export default ChatPopup;
