import React from "react";

import { Card, CardBody } from "reactstrap";
import { Icons } from "../../../common";
import { StyledButton } from "../../../components/StyledButtons/StyledButton";
const RequestsComponent = ({ request }) => {
  const { TI, GR } = Icons;
  return (
    <div>
      <Card className="request-card">
        <CardBody className="request-card-body">
          <div>{request.name}</div>
          <div className="request-email">{request.email}</div>
          <div className="mobile-view">
            <StyledButton className="request-accept">Accept</StyledButton>
            <StyledButton className="request-reject">Reject</StyledButton>
          </div>
          <div className="web-view">
            <TI.TiTick size={25} />
            <GR.GrFormClose size={25} />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default RequestsComponent;
