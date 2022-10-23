import React from "react";
// import Brands from "../components/brands/Brands";
import Categories from "../components/categories/Categories";
import DisplayedImages from "../components/displayedImages/DisplayedImages";
import Products from "../components/products/Products";
import BottomForm from "../components/form/BottomForm";

export default function HomePage() {
  return (
    <div>
      <DisplayedImages />
      {/* <Brands /> */}
      <Categories />
      <Products />
      <BottomForm />
    </div>
  );
}
