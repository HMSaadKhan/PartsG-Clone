import React from "react";
import Categories from "../../components/categories/Categories";
import DisplayedImages from "../../components/displayedImages/DisplayedImages";
import Products from "../../components/products/Products";
import BottomForm from "../../components/form/BottomForm";

export default function HomePage() {
  return (
    <div>
      <DisplayedImages />
      <Categories />
      <Products />
      <BottomForm />
    </div>
  );
}
