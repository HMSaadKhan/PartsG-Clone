import React from "react";

import "./form.css";

const StyledCheckBox = ({ name }) => {
  return (
    <div className="CheckBox">
      <input type="checkbox" name={name} />
      <label>{name}</label>
    </div>
  );
};

export default StyledCheckBox;
