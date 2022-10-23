import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import { AddressInformation } from "../../pages/shoppingpersonalinfo";

import "./accordion.css";
const ShopPageAccordion = (props) => {
  const [open, setOpen] = useState("1");
  const [checked, setChecked] = useState("");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <div className="accordion-main">
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader className="accordion-title" targetId="1">
            {props.title}
          </AccordionHeader>
          <AccordionBody accordionId="1">{props.children}</AccordionBody>
          <div>
            {props.title === "Address" && (
              <div className="accordion-checkbox-main">
                <div className="accordion-checkbox-content">
                  <div>
                    <input
                      type="checkbox"
                      value="default"
                      className="accordion-checkbox"
                      checked={checked === "default" ? true : false}
                      onChange={(e) => {
                        setChecked(e.target.value);
                      }}
                    />
                    <span className="accordion-checkbox-text">
                      Use this address for invoice too
                    </span>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      value="new"
                      className="accordion-checkbox"
                      checked={checked === "new" ? true : false}
                      onChange={(e) => {
                        setChecked(e.target.value);
                      }}
                    />
                    <span className="accordion-checkbox-text">
                      Add Billing Address
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
          {checked === "new" && <AddressInformation />}
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ShopPageAccordion;
