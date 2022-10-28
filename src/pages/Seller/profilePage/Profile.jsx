import React from "react";
import { Card, CardBody } from "reactstrap";

import "./profile.css";
import StyledInputField from "../../../components/StyledInputField/StyledInputField";
import { StyledButton } from "../../../components/StyledButtons/StyledButton";

const Profile = () => {
  return (
    <div className="seller-admin-container">
      <div className="seller-profile-content">
        <Card className="seller-profile-card">
          <CardBody>
            <h2>My Profile</h2>
            <StyledInputField className="seller-profile-input" label="Name" />
            <StyledInputField className="seller-profile-input" label="Email" />
            <div className="seller-profile-button">
              <StyledButton>Update</StyledButton>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
