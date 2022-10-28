import React from "react";
import { roles } from "../../common";

const StyledDropDown = ({ name, value, label, endIcon }) => {
  return (
    <div className="input-field-main">
      <label>{label}</label>
      <div className="styled-dropdown-main">
        <select className="styled-dropdown" name={name} value={value}>
          {roles.map((role) => {
            return (
              <option value={role._id} key={role._id}>
                {role.name}
              </option>
            );
          })}
        </select>
        {endIcon && <div>{endIcon}</div>}
      </div>
    </div>
  );
};

export default StyledDropDown;
