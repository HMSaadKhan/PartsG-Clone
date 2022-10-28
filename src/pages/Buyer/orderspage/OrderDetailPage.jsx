import React from "react";
import { Breadcrumb, BreadcrumbItem, Card, CardBody } from "reactstrap";

import "./order.css";
import { orderdetail } from "../../../common";
import OrderComponent from "./OrderComponent";

const OrderDetailPage = () => {
  return (
    <div className="category-main">
      <div className="category-content">
        <div className="category-row">
          <h1>Orders</h1>
          <div className="mobile-view">
            <Breadcrumb>
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem active>Orders</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>

        <hr className="category-hr" />
        <div className="orders-row">
          <Card className="order-detail-card">
            <CardBody>
              <div className="order-list-card-content">
                <div className="order-detail-image-container">
                  <img
                    src={orderdetail[0].productId.imageUrl}
                    className="order-detail-image"
                  />
                </div>
                <div>
                  <span className="order-status">Name:&nbsp;</span>
                  {orderdetail[0].name}
                </div>
                <div>
                  <span className="order-status">Price:&nbsp;</span>
                  PKR.{orderdetail[0].unitPrice}
                </div>
                <div>
                  <span className="order-status">Qty:&nbsp;</span>
                  {orderdetail[0].quantity}
                </div>
                <div>
                  <span className="order-status">Total Price:&nbsp;</span>
                  {orderdetail[0].quantity * orderdetail[0].unitPrice}
                </div>
                <div>
                  <span className="order-status">Add Rating:&nbsp;</span>
                  {orderdetail[0].quantity * orderdetail[0].unitPrice}
                </div>
                <div>
                  <span className="order-status">Add Review:&nbsp;</span>
                  {orderdetail[0].quantity * orderdetail[0].unitPrice}
                </div>
              </div>
              <hr className="category-hr" />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailPage;
