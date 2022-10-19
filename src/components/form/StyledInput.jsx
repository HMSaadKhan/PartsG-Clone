import React from "react";

import "./form.css";

const StyledInput = ({ name, placeholder, type, rows }) => {
  return (
    <div className="form-inputfield">
      <label className="form-label">{name}</label>
      {type === "input" && <input placeholder={placeholder} name={name} />}
      {type === "textarea" && (
        <textarea
          placeholder={placeholder}
          name={name}
          rows={rows ? rows : 1}
        />
      )}
    </div>
  );
};

export default StyledInput;
