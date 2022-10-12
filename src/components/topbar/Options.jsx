import React from "react";
import "./topbar.css";

import { Icons } from "../../common";

export default function Options() {
  const { BS, GR } = Icons;

  return (
    <div className="FlexBox-SA OptionMain">
      <div className="FlexBox-SA Options">
        <div>
          <BS.BsCart3 size={25} />
        </div>
        <div className="mobile-view">
          <div className="ColumnFlex">
            <b>Cart</b>
            <div>Add Product</div>
          </div>
        </div>
      </div>
      <div className="FlexBox-SA Options">
        <div>
          <GR.GrDocumentText size={25} />
        </div>
        <div className="mobile-view">
          <div className="ColumnFlex">
            <b>Quote</b>
            <div>Request Quote</div>
          </div>
        </div>
      </div>
      <div className="FlexBox-SA Options">
        <div>
          <GR.GrDocumentText size={25} />
        </div>
        <div className="mobile-view">
          <div className="ColumnFlex">
            <b>Custom</b>
            <div>Request quote</div>
          </div>
        </div>
      </div>
    </div>
  );
}
