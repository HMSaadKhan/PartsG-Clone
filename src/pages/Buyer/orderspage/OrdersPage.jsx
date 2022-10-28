import React from "react";
import { Breadcrumb, BreadcrumbItem, Card, CardBody } from "reactstrap";

import "./order.css";
import { CategoriesData, orders } from "../../../common";
import SmallCard from "../../../components/smallcard/SmallCard";
import SmallSearch from "../../../components/smallsearch/SmallSearch";
import OrderComponent from "./OrderComponent";

const OrdersPage = () => {
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
          {orders.map((order) => {
            return <OrderComponent key={order._id} order={order} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
