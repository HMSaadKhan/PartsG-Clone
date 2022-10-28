import React from "react";
import { Icons } from "../../../common";
import { Card, CardBody } from "reactstrap";
import { AdminRoutes } from "../../../common";
import { useNavigate } from "react-router-dom";
const ProductComponent = ({ product }) => {
  const { MD } = Icons;
  const navigate = useNavigate();
  return (
    <div>
      <Card className="product-card">
        <CardBody className="product-card-body">
          <div className="product-card-image">
            <img src={product.imageUrl} alt="product-image" />
          </div>
          <div>{product.name}</div>
          <div>{product.brandName}</div>
          <div className="mobile-view">{product.quantity}</div>
          <div className="mobile-view">PKR.{product.sellingPrice}</div>
          <div className="mobile-view">PKR.{product.retailPrice}</div>
          <div className="mobile-view">{product.category}</div>
          <div className="product-action">
            <div
              onClick={() => {
                navigate(AdminRoutes.sellerProductsEdit);
              }}
            >
              <MD.MdEdit size={25} />
            </div>
            <div>
              <MD.MdDelete size={25} />
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductComponent;
