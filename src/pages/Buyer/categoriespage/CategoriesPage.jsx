import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import "./category.css";
import { CategoriesData } from "../../../common";
import SmallCard from "../../../components/smallcard/SmallCard";
import SmallSearch from "../../../components/smallsearch/SmallSearch";

const CategoriesPage = () => {
  return (
    <div className="category-main">
      <div className="category-content">
        <div className="category-row">
          <h1>Shop By Categories</h1>
          <div className="mobile-view">
            <Breadcrumb>
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem active>Shop By Categories</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
        <div className="category-row">
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
          <div>
            <SmallSearch />
          </div>
        </div>
        <hr className="category-hr" />
        <div className="category-products-row">
          {CategoriesData.map((Category) => {
            return <SmallCard key={Category.id} Category={Category} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
