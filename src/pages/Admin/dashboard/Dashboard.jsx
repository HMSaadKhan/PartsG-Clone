import React from "react";

import DashboardWidget from "../../Seller/dashboard/DashboardWidget";
const Dashboard = () => {
  return (
    <div className="seller-admin-container">
      <div className="dashboard-widgets">
        <DashboardWidget />
        <DashboardWidget />
        <DashboardWidget />
        <DashboardWidget />
      </div>
    </div>
  );
};

export default Dashboard;
