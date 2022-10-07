import React from "react";
import "./topbar.css";
import LogoImg from "../../common/Logo.png";
import { List } from "react-bootstrap-icons";
import SideBar from "./SideBar";
export default function Logo() {
  return (
    <div className="FlexBox-SA">
      <div className="mobile-view-slider">
        <SideBar />
      </div>
      <img src={LogoImg} height="60px" />
    </div>
  );
}
