import React, { useState } from "react";
import { Card } from "reactstrap";

import "./signup.css";
import { Icons } from "../../common";
import { BackGround } from "./SignUpSCs";
import { PartsGLogo } from "../../assets/Photos";
import { StyledButton } from "../../components/CustomButtons/StyledButton";
import CustomInputField from "./CustomInputField";
import SignUpFooter from "./SignUpFooter";

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { BS } = Icons;
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
                  <CustomInputField
                    icon={<BS.BsFillPersonFill />}
                    placeholder="First Name"
                    name="firstname"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                  <CustomInputField
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
                  <CustomInputField
                    icon={<BS.BsFillPersonFill />}
                    placeholder="First Name"
                    name="firstname"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                  <CustomInputField
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
                  <CustomInputField
                    icon={<BS.BsFillPersonFill />}
                    placeholder="First Name"
                    name="firstname"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                  <CustomInputField
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
                  <div className="SignUpButton">
                    <StyledButton>Sign Up</StyledButton>
                  </div>
                </div>
                <hr />
                <div className="bottomtext">
                  <div>or</div>
                  <div className="bottomtext2">
                    <div>Already Have an Account?</div>
                    <div>Login Instead</div>
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
