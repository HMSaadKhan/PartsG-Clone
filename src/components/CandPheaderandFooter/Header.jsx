import React from "react";

import "./component.css";

const Header = ({ heading, caption }) => {
  return (
    <div className="Header">
      <div className="emptyDiv"></div>
      <div>
        <h2 className="CnPHeading">{heading}</h2>
        <h6 className="CnPCaption">{caption}</h6>
      </div>
      <div>
        <button className="button">View All {heading}</button>
      </div>
    </div>
  );
};

export default Header;
