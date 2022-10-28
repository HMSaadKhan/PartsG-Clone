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
import { useNavigate } from "react-router-dom";

import { route } from "../../common";
import SignInPopup from "../signinpopup/SignInPopup";

import "./navbar.css";
import AccountPopup from "../Accountpopup/AccountPopup";

export default function NavBarWeb() {
  const [isLoginPopup, setIsLoginPopup] = useState(false);
  const [isAccountPopup, setIsAccountPopup] = useState(false);

  const navigate = useNavigate();
  return (
    <>
      <Nav className="navbar">
        <NavItem>
          <NavLink
            className="route-link"
            onClick={() => {
              navigate(route.Home);
            }}
          >
            Home
          </NavLink>
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
          <NavLink
            className="route-link"
            onClick={() => {
              navigate(route.Categories);
            }}
          >
            Categories
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="route-link"
            onClick={() => {
              navigate(route.Products);
            }}
          >
            Product
          </NavLink>
        </NavItem>
      </Nav>
      <Nav className="navbar">
        <NavItem>
          <NavLink
            id="account-Popover"
            className="route-link"
            onClick={() => {
              setIsAccountPopup(!isAccountPopup);
            }}
          >
            Account
          </NavLink>
          <AccountPopup isOpen={isAccountPopup} setIsOpen={setIsAccountPopup} />
        </NavItem>
        <NavItem>
          <NavLink
            id="login-Popover"
            className="route-link"
            onClick={() => {
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
