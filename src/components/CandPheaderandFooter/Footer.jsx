import React from "react";

import "./component.css";
import { Icons } from "../../common";
const Footer = ({ carRef }) => {
  const { MD } = Icons;
  return (
    <div className="parentDiv">
      <MD.MdNavigateBefore
        className="roundedBtn"
        onClick={() => {
          carRef.current.slidePrev();
        }}
      />

      <MD.MdNavigateNext
        className="roundedBtn"
        onClick={() => {
          carRef.current.slideNext();
        }}
      />
    </div>
  );
};

export default Footer;
