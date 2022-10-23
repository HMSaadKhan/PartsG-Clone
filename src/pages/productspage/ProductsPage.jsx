import React from "react";

import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { ProductsData, Icons } from "../../common";
import LargeCard from "../../components/largeCard/LargeCard";
import LargeCardLandscape from "../../components/largeCard/LargeCardLandscape";
import SmallSearch from "../../components/smallsearch/SmallSearch";

import "./product.css";
const ProductsPage = () => {
  const [orientation, set0rientation] = React.useState("row");
  const { AI } = Icons;
  return (
    <div className="product-main">
      <div className="product-content">
        <div className="product-row">
          <h1>Products</h1>
          <div>
            <Breadcrumb>
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem active>Products</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
        <div className="product-container">
          {/* <div className="product-filter">filter side</div> */}
          <div className="product-right">
            <div className="product-row">
              <div className="product-row">
                <AI.AiOutlineInsertRowLeft
                  size={25}
                  onClick={() => {
                    set0rientation("row");
                  }}
                />
                <AI.AiOutlineInsertRowBelow
                  size={25}
                  onClick={() => {
                    set0rientation("column");
                  }}
                />
              </div>

              <div className="product-row">
                <SmallSearch />

                <div className="product-row">
                  <div>Sort By &nbsp;</div>
                  <select>
                    <option>Relevence</option>
                    <option>Name (A-Z)</option>
                    <option>Name (Z-A)</option>
                  </select>
                </div>
              </div>
            </div>

            {orientation === "row" && (
              <div className="product-products-row">
                {ProductsData.map((Category) => {
                  return <LargeCard key={Category.id} data={Category} />;
                })}
              </div>
            )}

            {orientation === "column" && (
              <div className="product-products-column">
                {ProductsData.map((Category) => {
                  return (
                    <LargeCardLandscape key={Category.id} data={Category} />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
