import React from "react";
import "./topbar.css";

import { SearchBar, Logo, Options } from "../topbar";

export default function TopBar() {
  return (
    <div className="mytopbar">
      <Logo />
      <SearchBar />
      <Options />
    </div>
  );
}
