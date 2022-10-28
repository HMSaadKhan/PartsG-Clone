import React from "react";
import { Card, CardBody } from "reactstrap";

import "./requests.css";
import { Requests as RequestsData, RequestsMenu } from "../../../common";
import RequestsComponent from "./RequestsComponent";
const Requests = () => {
  return (
    <div className="seller-admin-container">
      <div>
        <Card className="request-card">
          <CardBody className="request-card-body">
            {RequestsMenu.map((menu, index) => {
              return (
                <div key={index} className="request-heading">
                  {menu}
                </div>
              );
            })}
          </CardBody>
        </Card>
        {RequestsData.map((request) => {
          return <RequestsComponent key={request._id} request={request} />;
        })}
      </div>
    </div>
  );
};

export default Requests;
