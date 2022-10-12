import React from "react";
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import { List } from "react-bootstrap-icons";
import "./topbar.css";

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
            toggle={() => {
              setOpen(false);
            }}
          >
            <div className="FlexBox-SA">
              <div>Menu</div>
              <div>Login/Logout</div>
            </div>
          </OffcanvasHeader>
          <OffcanvasBody>
            <strong>This is the Offcanvas body.</strong>
          </OffcanvasBody>
        </Offcanvas>
      </>
    </div>
  );
}
