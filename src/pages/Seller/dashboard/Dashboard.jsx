import React from "react";

import "./dashboard.css";
import DashboardWidget from "./DashboardWidget";

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
