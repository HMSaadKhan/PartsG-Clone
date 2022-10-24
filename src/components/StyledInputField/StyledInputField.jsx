import React from "react";
import { Icons, callCountries } from "../../common";
import { RI } from "../../common/Icons";

import "./input.css";

const StyledInputField = ({
  icon,
  name,
  value,
  placeholder,
  onChange,
  className,
  iconDropdown,
  iconArray,
  type,
}) => {
  console.log(iconArray);
  const { RI } = Icons;
  const [isOpen, setisOpen] = React.useState(false);
  return (
    <div className={`InputField ${className ? className : ""}`}>
      {iconDropdown ? (
        <>
          <div
            className="input-row"
            onClick={() => {
              setisOpen(!isOpen);
            }}
          >
            {icon}
            <div>
              <RI.RiArrowDropDownLine size={25} />
            </div>
            {isOpen && (
              <>
                {callCountries?.map((value, index) => {
                  return (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      {value}
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </>
      ) : (
        <div>{icon}</div>
      )}
      <input
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default StyledInputField;
