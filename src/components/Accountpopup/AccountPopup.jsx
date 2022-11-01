import React from "react";

import { Popover, PopoverBody } from "reactstrap";

import "./accountpopup.css";
import { route } from "../../common";
import { useNavigate } from "react-router-dom";

const AccountPopup = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  return (
    <>
      <Popover
        placement="bottom"
        target="account-Popover"
        trigger="legacy"
        flip
        toggle={() => {
          setIsOpen(!isOpen);
        }}
        isOpen={isOpen}
      >
        <PopoverBody>
          <div className="account-popup-main">
            <div
              className="account-popup-menu route-link"
              onClick={() => {
                navigate(route.orders);
              }}
            >
              My Orders
            </div>
            <div className="account-popup-menu route-link">Logout</div>
          </div>
        </PopoverBody>
      </Popover>
    </>
  );
};

export default AccountPopup;
