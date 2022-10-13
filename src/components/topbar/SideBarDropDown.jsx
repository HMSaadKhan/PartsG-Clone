import React from "react";

import { Icons, dropdownOptions } from "../../common";
import SideBarOption from "./SideBarOption";

const SideBarDropDown = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { RI } = Icons;
  return (
    <div>
      <div
        className="ListItem ListItemFlex"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div>Categories</div>
        <div>
          <RI.RiArrowDropDownLine size={25} />
        </div>
      </div>
      {isOpen && (
        <>
          <div
            style={{
              borderTop: "1px solid white",
              borderRight: "1px solid white",
              borderBottom: "1px solid white",
              height: "200px",
              overflowY: "auto",
            }}
          >
            {dropdownOptions.map((option, index) => {
              return <SideBarOption name={option.name} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default SideBarDropDown;
