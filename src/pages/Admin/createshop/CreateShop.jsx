import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import "./createshop.css";
import StyledDropDown from "../../../components/StyledInputField/StyledDropDown";
import StyledInputField from "../../../components/StyledInputField/StyledInputField";

const CreateShop = ({ modal, toggle }) => {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Shop</ModalHeader>
        <ModalBody>
          <div className="modal-body">
            <StyledInputField label="Name" />
            <StyledInputField label="Email" />
            <StyledDropDown label="Role" />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CreateShop;
