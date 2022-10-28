import React from "react";

import StyledInputField from "../../../components/StyledInputField/StyledInputField";
import AddressDropDown from "./AddressDropDown";

const AddressInformation = () => {
  return (
    <div className="personal-info-form">
      <div className="personal-info-row">
        <div className="personal-info-column">
          <label className="personal-info-label">Delivery Address</label>
          <StyledInputField
            className="personal-info-form-input"
            placeholder="Address"
          />
        </div>

        <div className="personal-info-column">
          <label className="personal-info-label">Country</label>
          <AddressDropDown />
        </div>
      </div>
      <div className="personal-info-row">
        <div className="personal-info-column">
          <label className="personal-info-label">State</label>
          <AddressDropDown />
        </div>
        <div className="personal-info-column">
          <label className="personal-info-label">City</label>
          <AddressDropDown />
        </div>
      </div>

      <div className="personal-info-row">
        <div className="personal-info-column">
          <label className="personal-info-label">Zip</label>
          <StyledInputField
            className="personal-info-form-zip"
            placeholder="0"
            type="number"
          />
        </div>
        <div className="personal-info-column"></div>
      </div>
    </div>
  );
};

export default AddressInformation;
