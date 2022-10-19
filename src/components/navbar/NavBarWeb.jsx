import React, { useState } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import SignInPopup from "../signinpopup/SignInPopup";

import "./navbar.css";

export default function NavBarWeb() {
  const [isLoginPopup, setIsLoginPopup] = useState(false);
  return (
    <>
      <Nav className="navbar">
        <NavItem>
          <NavLink href="/components/">Home</NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Categories
          </DropdownToggle>
          <DropdownMenu end>
            <DropdownItem>Option 1</DropdownItem>
            <DropdownItem>Option 2</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Reset</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <NavItem>
          <NavLink href="/components/">Brand</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/components/">Product</NavLink>
        </NavItem>
      </Nav>
      <Nav className="navbar">
        <NavItem>
          <NavLink
            id="login-Popover"
            onClick={() => {
              console.log(isLoginPopup);
              setIsLoginPopup(!isLoginPopup);
            }}
          >
            Login/Signup
          </NavLink>

          <SignInPopup
            isLoginPopup={isLoginPopup}
            setIsLoginPopup={setIsLoginPopup}
          />
        </NavItem>
      </Nav>
    </>
  );
}
