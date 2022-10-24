import React from "react";
import { Breadcrumb, BreadcrumbItem, Card } from "reactstrap";

import "./shoppingpersonalInfo.css";
import ShopPageAccordion from "../../components/accordion/ShopPageAccordion";
import {
  OrderSummary,
  ProductInformations,
  AddressInformation,
  PersonalInformation,
} from "../../pages/shoppingpersonalinfo";

const ShoppingPersonalInfo = () => {
  return (
    <div className="shopping-info-main">
      <div className="shopping-info-content">
        <div className="shopping-info-row">
          <h1>Shopping Cart</h1>

          <div className="shopping-breadcrumb">
            <Breadcrumb>
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem active>Shopping Details</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
        <hr />

        <div className="shopping-info-details">
          <div className="shopping-info-details-info">
            <ShopPageAccordion title="Body Gasket - PartsG Vendor">
              <ProductInformations />
            </ShopPageAccordion>

            <h3>Customer Details</h3>

            <ShopPageAccordion title="Personal Information">
              <PersonalInformation />
            </ShopPageAccordion>

            <ShopPageAccordion title="Address">
              <AddressInformation />
            </ShopPageAccordion>

            <ShopPageAccordion title="Payment">
              <div className="shopping-info-radio-mian">
                <div className="shopping-info-radio">
                  <input type="radio" name="payment method" />
                  <span>Cash On Delivery</span>
                </div>
                <div className="shopping-info-radio">
                  <input type="radio" name="payment method" />
                  <span>Pay Online</span>
                </div>
              </div>
            </ShopPageAccordion>
          </div>

          <div className="shopping-info-details-summary">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingPersonalInfo;
