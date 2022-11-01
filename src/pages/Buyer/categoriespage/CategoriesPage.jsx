import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import "./category.css";
import SmallCard from "../../../components/smallcard/SmallCard";
import SmallSearch from "../../../components/smallsearch/SmallSearch";
import { AllCategories } from "../../../queries/AllCategories";

const CategoriesPage = () => {
  const { data, isError, error } = AllCategories();

  if (isError) {
    console.log(error);
  }
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
            <SmallSearch placeholder="Search Category" />
          </div>
        </div>
        <hr className="category-hr" />
        <div className="category-products-row">
          {data.data.categories.map((Category) => {
            return <SmallCard key={Category.id} Category={Category} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
