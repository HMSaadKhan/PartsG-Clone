import React from "react";
import { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

import { dropdownOptions, Icons } from "../../common";
const CustomDropdown = ({ option, setOption }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const { RI } = Icons;
  return (
    <Dropdown className="CategoryBtn" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle>
        <div className="togglebutton">
          <span>{option}</span>
          <RI.RiArrowUpDownFill />
        </div>
      </DropdownToggle>
      <DropdownMenu>
        {dropdownOptions.map((data) => {
          return (
            <DropdownItem
              key={data.id}
              value={data.name}
              onClick={(e) => {
                setOption(e.target.value);
              }}
            >
              {data.name}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
};

export default CustomDropdown;
