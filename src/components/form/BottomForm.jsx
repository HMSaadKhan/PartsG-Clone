import React from "react";
import "./form.css";
export default function BottomForm() {
  return (
    <div className="Formmain">
      <div className="formHeading">On Demand Order</div>
      <div className="formCaption">Ask for the product you are looking for</div>
      <div className="InputFieldMain">
        <div className="InputField">
          <label>Name</label>
          <input placeholder="e.g. 9518-20" name="name" />
        </div>
        <div className="InputField">
          <label>Brand</label>
          <input placeholder="e.g. hammer" name="brand" />
        </div>
        <div className="InputField">
          <label>Model/PartNumber</label>
          <input placeholder="Model" name="brand" />
        </div>
        <div className="InputField">
          <label>Model Number</label>
          <input placeholder="e.g 30L110 " name="brand" />
        </div>
        <div className="InputField">
          <label>Qty</label>
          <input placeholder="e.g. 3" name="brand" />
        </div>
        <div className="InputField">
          <label>Description</label>
          <input placeholder="e.g. hammer" name="brand" Rows="2" />
        </div>
      </div>
      <div>
        <div className="Heading2">Condition Preference</div>
      </div>
    </div>
  );
}
