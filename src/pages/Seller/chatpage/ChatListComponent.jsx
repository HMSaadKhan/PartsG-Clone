import React from "react";
import { Card, CardBody } from "reactstrap";

const ChatListComponent = ({ chatList }) => {
  console.log(chatList);
  return (
    <div>
      <Card className="chat-list-component-card">
        <CardBody className="chat-list-component-body route-link">
          <div className="chat-list-image-container">
            <img
              src={chatList.productImage}
              className="chat-list-image"
              alt="chat"
            />
          </div>
          <div className="chat-name mobile-view">{chatList.productName}</div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ChatListComponent;
