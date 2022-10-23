import React, { useState } from "react";
import { Card } from "reactstrap";
import { useNavigate } from "react-router-dom";

import "./signin.css";
import { Icons, route } from "../../common";
import { BackGround } from "../../components/StyledBackGround/StyledBackGround";
import { PartsGLogo } from "../../assets/Photos";
import { StyledButton } from "../../components/StyledButtons/StyledButton";
import StyledInputField from "../../components/StyledInputField/StyledInputField";
import SignUpFooter from "../../components/footerforSignUpandSignIN/SignUpSignInFooter";

const SignInPage = () => {
  const [firstName, setFirstName] = useState("");
  const { BS, FC } = Icons;
  const navigate = useNavigate();
  return (
    <div className="SignUpContainer">
      <BackGround>
        <div className="Content">
          <div>
            <img src={PartsGLogo.link} alt="PartsG Logo" className="Logo" />
          </div>
          <div>
            <div className="Heading">Login</div>
            <Card>
              <div className="SignInCard">
                <div className="column">
                  <StyledInputField
                    icon={<BS.BsFillPersonFill />}
                    placeholder="Last Name"
                    name="firstname"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                  <StyledInputField
                    icon={<BS.BsFillPersonFill />}
                    placeholder="First Name"
                    name="firstname"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </div>
                <div className="row">
                  <div className="forget-password route-link">
                    <div>Forget Password</div>
                  </div>
                </div>
                <div className="column">
                  <div className="keep-me-login">
                    <input
                      className="check-box"
                      type="checkbox"
                      // name={name}
                      // checked={checkBox === name ? true : false}
                      // onClick={() => {
                      //   setCheckBox(name);
                      // }}
                    />
                    <label>Keep me Login</label>
                  </div>
                </div>

                <div className="row">
                  <div className="SignInButton">
                    <StyledButton>Login</StyledButton>
                    <button className="google-button route-link" disabled>
                      <div>
                        <FC.FcGoogle size={20} />
                      </div>
                      <span>Login with Google</span>
                    </button>
                  </div>
                </div>
                <hr />
                <div className="bottomtext">
                  <div>or</div>
                  <div
                    className="bottomtext2 route-link"
                    onClick={() => {
                      navigate(route.SignUp);
                    }}
                  >
                    <div>Register For Signup</div>
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

export default SignInPage;
