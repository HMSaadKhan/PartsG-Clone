import React, { useState } from "react";

import { Popover, PopoverBody } from "reactstrap";

import "./accountpopup.css";
import { PartsGLogo } from "../../assets/Photos";
// import StyledInputField from "../../components/StyledInputField/StyledInputField";
import { Icons, route } from "../../common";
import { GoogleButton, StyledButton } from "../StyledButtons/StyledButton";
import StyledInputFieldsm from "../StyledInputField/StyledInputFieldsm";
import { useNavigate } from "react-router-dom";

const AccountPopup = ({ isOpen, setIsOpen }) => {
  const { BS } = Icons;
  const size = 20;
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
