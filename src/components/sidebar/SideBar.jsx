import React from "react";
import { useNavigate } from "react-router-dom";
import HideSideBar from "../../Auth/HideSideBar";

import { AdminRoutes, Icons } from "../../common";
import StyledMenuItem from "../styledsidebarmenu/StyledMenuItem";

import "./sidebar.css";
const SideBar = () => {
  const size = 25;
  const { MD, FA, CG, BS, TB } = Icons;
  const navigate = useNavigate();

  return (
    <>
      <div className="sidebar-main-container">
        <div className="sidebar-heading">Menu</div>
        <StyledMenuItem
          icon={<MD.MdSpaceDashboard size={size} />}
          name="Dashboard"
          onClick={() => {
            navigate(AdminRoutes.sellerDashboard);
          }}
        />
        <StyledMenuItem
          icon={<FA.FaWarehouse size={size} />}
          name="Products"
          onClick={() => {
            navigate(AdminRoutes.sellerProducts);
          }}
        />
        <StyledMenuItem
          icon={<TB.TbTruckDelivery size={size} />}
          name="Orders"
          onClick={() => {
            navigate(AdminRoutes.sellerOrder);
          }}
        />
        <StyledMenuItem
          icon={<CG.CgProfile size={size} />}
          name="Profile"
          onClick={() => {
            navigate(AdminRoutes.sellerProfile);
          }}
        />
        <StyledMenuItem
          icon={<BS.BsFillChatDotsFill size={size} />}
          name="Chats"
          onClick={() => {
            navigate(AdminRoutes.sellerChat);
          }}
        />
        <div className="sidebar-heading">Options</div>
        <StyledMenuItem icon={<MD.MdLogout size={size} />} name="Logout" />
      </div>
    </>
  );
};

export default SideBar;
