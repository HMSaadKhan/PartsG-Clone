import React, { useState } from "react";

import { Popover, PopoverBody, PopoverHeader } from "reactstrap";

import "./signinpopup.css";
import { PartsGLogo } from "../../assets/Photos";
import StyledInputField from "../../components/StyledInputField/StyledInputField";
import { Icons } from "../../common";
import { GoogleButton, StyledButton } from "../StyledButtons/StyledButton";
import StyledInputFieldsm from "../StyledInputField/StyledInputFieldsm";

const SignInPopup = ({ isLoginPopup, setIsLoginPopup }) => {
  const { BS } = Icons;
  const size = 20;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <Popover
      placement="bottom"
      target="login-Popover"
      toggle={() => {
        setIsLoginPopup(!isLoginPopup);
      }}
      isOpen={isLoginPopup}
    >
      <PopoverBody>
        <div className="sigin-popup-main">
          <div className="sigin-popup-heading">Account Details</div>

          <div>
            <img
              src={PartsGLogo.link}
              alt="PartsG Logo"
              className="signin-popup-logo"
            />
          </div>
          <div className="signin-popup-column">
            <StyledInputFieldsm
              icon={<BS.BsFillPersonFill size={size} />}
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <StyledInputFieldsm
              icon={<BS.BsFillPersonFill size={size} />}
              placeholder="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="signin-popup-row">
            <div className="signin-popup-row">
              <input type="checkbox" />
              Keep me login
            </div>
            <div>Forgot Password</div>
          </div>
          <StyledButton>login</StyledButton>
          <div>
            <GoogleButton />
          </div>
          <div className="signin-popup-text">
            <div>or</div>
            <div>Register for signup</div>
          </div>
        </div>
      </PopoverBody>
    </Popover>
  );
};

export default SignInPopup;