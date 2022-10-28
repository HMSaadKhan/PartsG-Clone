import React from "react";
import { CardBody, Card } from "reactstrap";

import "./addproduct.css";
import StyledInputField from "../../../components/StyledInputField/StyledInputField";

const AddProduct = () => {
  return (
    <div className="seller-admin-container">
      <Card className="product-entry-card">
        <CardBody className="product-entry-card-body">
          <h1 className="product-entry-heading">Add Product</h1>

          <div className="product-entry-card-column">
            <div className="product-entry-details">
              <div className="product-entry-card-row">
                <StyledInputField
                  label="Name"
                  className="product-entry-input"
                />
                <StyledInputField
                  label="Brand"
                  className="product-entry-input"
                />
              </div>
              <div className="product-entry-card-row">
                <StyledInputField
                  label="Quantity"
                  type="number"
                  className="product-entry-input"
                />
                <StyledInputField
                  label="Category"
                  className="product-entry-input"
                />
              </div>
              <div className="product-entry-card-row">
                <StyledInputField
                  label="Selling Price"
                  type="number"
                  className="product-entry-input"
                />
                <StyledInputField
                  label="Retail Price"
                  type="number"
                  className="product-entry-input"
                />
              </div>
              <div className="product-entry-card-row">
                <StyledInputField
                  multiline
                  rows={3}
                  label="Description"
                  className="product-entry-input"
                />
              </div>
              <div className="product-entry-card-row">
                <StyledInputField
                  multiline
                  rows={3}
                  label="Features"
                  className="product-entry-input"
                />
              </div>
            </div>
            <div className="product-entry-image">
              <h3 className="product-entry-heading">Choose an Image</h3>
              <form>
                <input
                  type="file"
                  id="file"
                  accept="image/*"
                  // onChange={}
                />
              </form>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default AddProduct;
