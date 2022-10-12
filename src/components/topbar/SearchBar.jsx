import React from "react";
import { useState } from "react";

import { Search } from "react-bootstrap-icons";
import { CustomDropdown } from "../topbar";

export default function SearchBar() {
  const [option, setOption] = useState("All Categories");

  return (
    <div className="search">
      <div className="mobile-view">
        <CustomDropdown option={option} setOption={setOption} />
      </div>
      <input
        className="searchBar mobile-view"
        type="search"
        placeholder="Search Products"
      />
      <button className="searchButton">
        <Search size={20} />
      </button>
    </div>
  );
}
