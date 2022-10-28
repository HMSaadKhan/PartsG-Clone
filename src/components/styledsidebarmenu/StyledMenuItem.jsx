import React from "react";

import "./menuitem.css";
const StyledMenuItem = ({ icon, name, onClick }) => {
  return (
    <div className="sidebar-menu route-link" onClick={onClick}>
      <div className="icons">{icon}</div>
      <div className="mobile-view">{name}</div>
    </div>
  );
};

export default StyledMenuItem;
