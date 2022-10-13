import React from "react";
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import { List } from "react-bootstrap-icons";

import "./topbar.css";
import { SideBarOption } from "../topbar";
import SideBarDropDown from "./SideBarDropDown";
export default function SideBar() {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <List
        size={30}
        color="#cc0011"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open
      </List>
      <>
        <Offcanvas className="offcanvas-menu" isOpen={open}>
          <OffcanvasHeader
            style={{ color: "white" }}
            toggle={() => {
              setOpen(false);
            }}
          >
            <div className="FlexBox-SA" style={{ width: "350px" }}>
              <div>Menu</div>
              <div>Login/Logout</div>
            </div>
          </OffcanvasHeader>
          <OffcanvasBody>
            <div className="List">
              <SideBarOption name="Home" />
              <SideBarDropDown />
              <SideBarOption name="Brands" />
              <SideBarOption name="Products" />
            </div>
          </OffcanvasBody>
        </Offcanvas>
      </>
    </div>
  );
}
