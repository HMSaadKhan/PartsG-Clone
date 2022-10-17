import React from "react";

import "./form.css";

const StyledCheckBox = ({ name, checkBox, setCheckBox }) => {
  return (
    <div className="CheckBox">
      <input
        style={{ backgroundColor: "#cc0011" }}
        type="checkbox"
        name={name}
        checked={checkBox === name ? true : false}
        onClick={() => {
          setCheckBox(name);
        }}
      />
      <label>{name}</label>
    </div>
  );
};

export default StyledCheckBox;
