import React from "react";
import { Icons } from "../../common";

import StyledInputField from "../../components/StyledInputField/StyledInputField";

const AddressInformation = () => {
  const { MD, BS } = Icons;

  return (
    <div className="personal-info-form">
      <div className="personal-info-row">
        <div className="personal-info-column">
          <label className="personal-info-label">Email*</label>
          <StyledInputField
            className="personal-info-form-input"
            icon={<MD.MdOutlineMail size={25} />}
          />
        </div>

        <div className="personal-info-column">
          <label className="personal-info-label">Phone Number*</label>
          <StyledInputField
            //   iconDropdown
            iconArray={[
              { icon: <BS.BsFillPersonFill size={25} /> },
              { icon: <BS.BsFillPersonFill size={25} /> },
            ]}
            className="personal-info-form-input"
            icon={<BS.BsFillPersonFill size={25} />}
          />
        </div>
      </div>
      <div className="personal-info-row">
        <div className="personal-info-column">
          <label className="personal-info-label">First Name*</label>
          <StyledInputField
            className="personal-info-form-input"
            icon={<BS.BsFillPersonFill size={25} />}
          />
        </div>
        <div className="personal-info-column">
          <label className="personal-info-label"> Last Name*</label>
          <StyledInputField
            className="personal-info-form-input"
            icon={<BS.BsFillPersonFill size={25} />}
          />
        </div>
      </div>
    </div>
  );
};

export default AddressInformation;
