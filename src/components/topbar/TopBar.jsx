import React from "react";
import "./topbar.css";

import SearchBar from "./SearchBar";
import Logo from "./Logo";
import Options from "./Options";
export default function TopBar() {
  return (
    <div className="mytopbar">
      <Logo />
      <SearchBar />
      <Options />
    </div>
  );
}
