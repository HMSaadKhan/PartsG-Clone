import React from "react";
import "./topbar.css";
import { File, Cart3 } from "react-bootstrap-icons";

export default function Options() {
  return (
    <div className="FlexBox-SA OptionMain">
      <div className="FlexBox-SA Options">
        <div>
          <Cart3 size={25} />
          {/* <div>Logo</div> */}
        </div>
        <div className="mobile-view">
          <div className="ColumnFlex">
            <div>Cart</div>
            <div>Add Product</div>
          </div>
        </div>
      </div>
      <div className="FlexBox-SA Options">
        <div>
          <File size={25} />
        </div>
        <div className="mobile-view">
          <div className="ColumnFlex">
            <div>Quote</div>
            <div>Request Quote</div>
          </div>
        </div>
      </div>
      <div className="FlexBox-SA Options">
        <div>
          <File size={25} />
        </div>
        <div className="mobile-view">
          <div className="ColumnFlex">
            <div>Custom</div>
            <div>Request quote</div>
          </div>
        </div>
      </div>
    </div>
  );
}
