import React from "react";

import "./signup.css";

const CustomInputField = ({ icon, name, value, placeholder, onChange }) => {
  return (
    <div className="InputField">
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

export default CustomInputField;
