import React from "react";
import { Icons } from "../../common";

const AddressDropDown = () => {
  const [isOpen, setisOpen] = React.useState(false);
  const { RI } = Icons;
  return (
    <div>
      <div
        className="address-dropdown-main"
        onClick={() => {
          setisOpen(!isOpen);
        }}
      >
        <span className="address-dropdown-placeholder">Select..</span>
        <div className="address-drowpdown-icon">
          <RI.RiArrowDropDownLine size={25} />
        </div>
      </div>
      {isOpen && (
        <div className="address-dropdown">
          <div className="address-dropdown-menu">Pakistan</div>
        </div>
      )}
    </div>
  );
};

export default AddressDropDown;
