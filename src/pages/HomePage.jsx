import React from "react";
import Brands from "../components/brands/Brands";
import Categories from "../components/categories/Categories";
import DisplayedImages from "../components/displayedImages/DisplayedImages";
import NavBar from "../components/navbar/NavBar";
import TopBar from "../components/topbar/TopBar";

export default function HomePage() {
  return (
    <div>
      <TopBar />
      <NavBar />
      <DisplayedImages />
      <Brands />
      <Categories />
    </div>
  );
}
