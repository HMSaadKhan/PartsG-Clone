import React, { useState } from "react";
import { Card } from "reactstrap";
import { useNavigate } from "react-router-dom";

import "./signin.css";
import { Icons, route } from "../../../common";
import { BackGround } from "../../../components/StyledBackGround/StyledBackGround";
import { PartsGLogo } from "../../../assets/Photos";
import { StyledButton } from "../../../components/StyledButtons/StyledButton";
import StyledInputField from "../../../components/StyledInputField/StyledInputField";

const SignInPage = () => {
  const [firstName, setFirstName] = useState("");
  const { AI, RI } = Icons;
  const navigate = useNavigate();
  return (
    <div className="admin-signin-container">
      <BackGround>
        <div className="Content">
          <div>
            <img src={PartsGLogo.link} alt="PartsG Logo" className="Logo" />
          </div>
          <div>
            <div className="Heading">Login</div>
            <Card>
              <div className="admin-login-card">
                <div className="column">
                  <StyledInputField
                    className="admin-login-input"
                    icon={<AI.AiOutlineMail size={25} />}
                    placeholder="Email"
                    name="email"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                  <StyledInputField
                    className="admin-login-input"
                    icon={<RI.RiLockPasswordLine size={25} />}
                    placeholder="Password"
                    name="password"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </div>
                <div className="admin-login-column">
                  <div className="admin-role-picker">
                    <input className="check-box" type="radio" name="role" />
                    <label>Seller</label>
                  </div>
                  <div className="admin-role-picker">
                    <input className="check-box" type="radio" name="role" />
                    <label>Admin</label>
                  </div>
                </div>
                <div className="admin-sigin-button">
                  <StyledButton>Login</StyledButton>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </BackGround>
    </div>
  );
};

export default SignInPage;
