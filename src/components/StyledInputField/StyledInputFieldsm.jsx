import React from "react";

import "./input.css";

const StyledInputFieldsm = ({ icon, name, value, placeholder, onChange }) => {
  return (
    <div className="input-sm">
      <div>{icon}</div>
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default StyledInputFieldsm;
