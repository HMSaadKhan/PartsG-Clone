import React from "react";

import "./navbar.css";
import NavBarMobile from "./NavBarMobile";
import NavBarWeb from "./NavBarWeb";

export default function NavBar() {
  return (
    <div>
      <div className="mynavbar web-view">
        <NavBarWeb />
      </div>
      {/* <div className="mynavbar mobile-view">
        <NavBarMobile />
      </div> */}
    </div>
  );
}
