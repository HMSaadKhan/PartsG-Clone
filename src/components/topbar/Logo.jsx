import React from "react";

import "./topbar.css";
import LogoImg from "../../assets/Logo.png";
import SideBar from "./SideBar";

export default function Logo() {
  return (
    <div className="FlexBox-SA Logo">
      <div className="mobile-view-slider">
        <SideBar />
      </div>
      <img src={LogoImg} className="Img" alt="Logo" />
    </div>
  );
}
