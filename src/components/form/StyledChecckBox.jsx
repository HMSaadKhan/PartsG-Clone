import React from "react";

import "./form.css";

const StyledCheckBox = ({ name, checkBox, setCheckBox }) => {
  return (
    <div className="form-checkbox">
      <input
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
