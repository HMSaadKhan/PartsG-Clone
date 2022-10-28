import React from "react";
import { Icons } from "../../common";
import "./smallsearch.css";
const SmallSearch = ({ placeholder }) => {
  const { BI } = Icons;
  return (
    <div className="search-sm">
      <input type="search" placeholder={placeholder} />
      <div className="search-sm-icon">
        <BI.BiSearchAlt2 size={25} />
      </div>
    </div>
  );
};

export default SmallSearch;
