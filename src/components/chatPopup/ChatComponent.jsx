import React from "react";
import { Card, CardBody } from "reactstrap";

const ChatComponent = ({ chatList }) => {
  return (
    <Card className="buyer-chat-list-card">
      <CardBody className="buyer-chat-list-component-body route-link">
        <div className="buyer-chat-list-image-container">
          <img
            src={chatList.productImage}
            className="buyer-chat-list-image"
            alt="chat"
          />
        </div>
        <div className="buyer-chat-name mobile-view">
          {chatList.productName}
        </div>
      </CardBody>
    </Card>
  );
};

export default ChatComponent;
