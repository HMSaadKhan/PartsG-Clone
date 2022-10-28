import React from "react";

import "./product.css";

import { AdminRoutes, Icons } from "../../../common";
import { amazonProducts, productMenu } from "../../../common";
import { Card, CardBody } from "reactstrap";

import ProductComponent from "./ProductComponent";
import { useNavigate } from "react-router-dom";
const { IO } = Icons;
const Products = () => {
  const navigate = useNavigate();
  return (
    <div className="seller-admin-container">
      <div>
        <div className="add-icon-button">
          <IO.IoIosAddCircle
            size={50}
            onClick={() => {
              navigate(AdminRoutes.sellerProductsCreate);
            }}
          />
        </div>
        <Card className="product-card mobile-view">
          <CardBody className="product-card-body">
            {productMenu.map((menu, index) => {
              return (
                <div key={index} className="product-heading">
                  {menu}
                </div>
              );
            })}
          </CardBody>
        </Card>
        {amazonProducts.map((product) => {
          return <ProductComponent key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
