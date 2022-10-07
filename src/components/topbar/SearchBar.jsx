import React from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Navbar,
  NavbarBrand,
} from "reactstrap";

import { useState } from "react";
import { Search } from "react-bootstrap-icons";
export default function SearchBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <div className="search">
      <div className="mobile-view">
        <Dropdown className="CategoryBtn" isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>Dropdown</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem>Some Action</DropdownItem>
            <DropdownItem text>Dropdown Item Text</DropdownItem>
            <DropdownItem disabled>Action (disabled)</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Foo Action</DropdownItem>
            <DropdownItem>Bar Action</DropdownItem>
            <DropdownItem>Quo Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      {/* <select name="cars" id="cars" defaultValue={"Categories"}></select> */}
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
