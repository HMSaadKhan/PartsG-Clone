import React from "react";

import { Routes, Route } from "react-router-dom";

import { route } from "../common";
import NavBar from "../components/navbar/NavBar";
import TopBar from "../components/topbar/TopBar";
import Footer from "../components/footer/Footer";

import {
  HomePage,
  ProductsPage,
  ShoppingPersonalInfo,
  SignInPage,
  SignUpPage,
  CategoriesPage,
} from "../pages/Buyer";

const BuyerRoutes = () => {
  return (
    <>
      <TopBar />
      <NavBar />
      <Routes>
        <Route path={route.Home} element={<HomePage />} />
        <Route path={route.Login} element={<SignInPage />} />
        <Route path={route.SignUp} element={<SignUpPage />} />
        <Route path={route.Categories} element={<CategoriesPage />} />
        <Route path={route.Products} element={<ProductsPage />} />
        <Route path={route.Shop} element={<ShoppingPersonalInfo />} />
      </Routes>
      <Footer />
    </>
  );
};

export default BuyerRoutes;
