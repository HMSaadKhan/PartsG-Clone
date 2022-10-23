import React from "react";
import { useNavigate } from "react-router-dom";

import "./component.css";


const Header = ({ heading, caption }) => {
  const navigate = useNavigate();
  return (
    <div className="Header">
      <div className="emptyDiv"></div>
      <div>
        <h2 className="CnPHeading">{heading}</h2>
        <h6 className="CnPCaption">{caption}</h6>
      </div>
      <div>
        <button
          className="button"
          onClick={() => {
            navigate(heading);
          }}
        >
          View All {heading}
        </button>
      </div>
    </div>
  );
};

export default Header;
