import React from "react";
import { Card, CardBody } from "reactstrap";

import "./dashboard.css";
const DashboardWidget = () => {
  return (
    <div className="dashboard-widget">
      <Card className="dashboard-card">
        <CardBody>
          icon
          <div className="dashboard-card-body">
            <div className="dashboard-widget-count">0</div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default DashboardWidget;
