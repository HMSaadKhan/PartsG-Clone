import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { AdminRoutes as routes } from "../common";
import AdminSideBar from "../components/sidebar/AdminSideBar";
import {
  AddProduct,
  ChatPage,
  Dashboard,
  EditProduct,
  Orders,
  Products,
  Profile,
  SignInPage,
} from "../pages/Seller";
import {
  Categories,
  CreateShop,
  Dashboard as AdminDashboard,
  Requests,
  Shops,
} from "../pages/Admin";

const AdminRoutes = () => {
  return (
    <div>
      {/* <SideBar /> */}
      <AdminSideBar />

      <Routes>
        <Route path={routes.adminLogin} element={<SignInPage />} />
        <Route path={routes.sellerDashboard} element={<Dashboard />} />
        <Route path={routes.sellerProducts} element={<Products />} />
        <Route path={routes.sellerProductsCreate} element={<AddProduct />} />
        <Route path={routes.sellerProductsEdit} element={<EditProduct />} />
        <Route path={routes.sellerOrder} element={<Orders />} />
        <Route path={routes.sellerProfile} element={<Profile />} />
        <Route path={routes.sellerChat} element={<ChatPage />} />
        {/* <Route
          path="*"
          element={<Navigate to={routes.adminDashboard} replace />}
        /> */}
        <Route path={routes.adminDashboard} element={<AdminDashboard />} />
        <Route path={routes.adminCreateShop} element={<CreateShop />} />
        <Route path={routes.adminShops} element={<Shops />} />
        <Route path={routes.adminRequests} element={<Requests />} />
        <Route path={routes.adminCategories} element={<Categories />} />
      </Routes>
    </div>
  );
};

export default AdminRoutes;
