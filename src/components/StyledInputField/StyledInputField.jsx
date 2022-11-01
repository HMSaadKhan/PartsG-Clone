import React from "react";

import "./input.css";

const StyledInputField = ({
  icon,
  name,
  value,
  placeholder,
  onChange,
  className,
  multiline,
  type,
  rows,
  label,
  startIcon,
  endIcon,
}) => {
  return (
    <div className="input-field-main">
      {label ? (
        <>
          <label>{label}</label>
        </>
      ) : (
        <></>
      )}
      <div
        className={` ${className ? className : ""} ${
          multiline ? "styled-textarea" : "styled-inputfield"
        }`}
      >
        {icon && (
          <>
            <div>{icon}</div>
          </>
        )}
        {multiline ? (
          <textarea
            name={name}
            value={value}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            rows={rows ? rows : 2}
          />
        ) : (
          <input
            className="styled-input"
            name={name}
            value={value}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
          />
        )}
        {endIcon && <div className="icons route-link">{endIcon}</div>}
      </div>
    </div>
  );
};

export default StyledInputField;
