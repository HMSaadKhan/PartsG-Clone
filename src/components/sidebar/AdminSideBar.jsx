import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { AdminRoutes, Icons } from "../../common";
import StyledMenuItem from "../styledsidebarmenu/StyledMenuItem";

import "./sidebar.css";
const AdminSideBar = () => {
  const size = 25;
  const { MD, FA, BI } = Icons;
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/admin/login" && (
        <div className="sidebar-main-container">
          <div className="sidebar-heading">Menu</div>
          <StyledMenuItem
            icon={<MD.MdSpaceDashboard size={size} />}
            name="Dashboard"
            onClick={() => {
              navigate(AdminRoutes.adminDashboard);
            }}
          />
          <StyledMenuItem
            icon={<FA.FaWarehouse size={size} />}
            name="Shops"
            onClick={() => {
              navigate(AdminRoutes.adminShops);
            }}
          />
          <StyledMenuItem
            icon={<MD.MdTrackChanges size={size} />}
            name="Requests"
            onClick={() => {
              navigate(AdminRoutes.adminRequests);
            }}
          />
          <StyledMenuItem
            icon={<BI.BiCategoryAlt size={size} />}
            name="Categories"
            onClick={() => {
              navigate(AdminRoutes.adminCategories);
            }}
          />

          <div className="sidebar-heading">Options</div>
          <StyledMenuItem icon={<MD.MdLogout size={size} />} name="Logout" />
        </div>
      )}
    </>
  );
};

export default AdminSideBar;
