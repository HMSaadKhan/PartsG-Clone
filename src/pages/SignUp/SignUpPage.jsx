import React, { useState } from "react";
import { Card } from "reactstrap";
import { useNavigate } from "react-router-dom";

import "./signup.css";
import { Icons, route } from "../../common";
import { BackGround } from "../../components/StyledBackGround/StyledBackGround";
import { PartsGLogo } from "../../assets/Photos";
import { StyledButton } from "../../components/StyledButtons/StyledButton";
import StyledInputField from "../../components/StyledInputField/StyledInputField";
import SignUpFooter from "../../components/footerforSignUpandSignIN/SignUpSignInFooter";

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { BS } = Icons;
  const navigate = useNavigate();
  return (
    <div className="SignUpContainer">
      <BackGround>
        <div className="Content">
          <div>
            <img src={PartsGLogo.link} alt="PartsG Logo" className="Logo" />
          </div>
          <div>
            <div className="Heading">Sign Up</div>
            <Card>
              <div className="RegisterationCard">
                <div className="row">
                  <StyledInputField
                    icon={<BS.BsFillPersonFill />}
                    placeholder="First Name"
                    name="firstname"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                  <StyledInputField
                    icon={<BS.BsFillPersonFill />}
                    placeholder="Last Name"
                    name="lastname"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </div>
                <div className="row">
                  <StyledInputField
                    icon={<BS.BsFillPersonFill />}
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <StyledInputField
                    icon={<BS.BsFillPersonFill />}
                    placeholder="0"
                    name="phone"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
                <div className="row">
                  <StyledInputField
                    icon={<BS.BsFillPersonFill />}
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <StyledInputField
                    icon={<BS.BsFillPersonFill />}
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="row">
                  <div className="SignUpButton">
                    <StyledButton>Sign Up</StyledButton>
                  </div>
                </div>
                <hr />
                <div className="bottomtext">
                  <div>or</div>
                  <div className="bottomtext2">
                    <div>Already Have an Account?</div>
                    <div
                      className="route-link"
                      onClick={() => {
                        navigate(route.Login);
                      }}
                    >
                      Login Instead
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <SignUpFooter />
        </div>
      </BackGround>
    </div>
  );
};

export default SignUpPage;
