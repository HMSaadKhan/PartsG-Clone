import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import "./categorymodal.css";
import StyledInputField from "../../StyledInputField/StyledInputField";

const CreateCategory = ({ modal, toggle }) => {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Category</ModalHeader>
        <ModalBody>
          <div className="modal-body">
            <StyledInputField label="Category Name" />
            <div className="category-file-input">
              <span>Upload Image</span>
            </div>
            <div className="category-file-input">
              <input type="file" />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CreateCategory;
