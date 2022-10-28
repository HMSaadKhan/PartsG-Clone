import React from "react";
import { Card, CardBody } from "reactstrap";

import { conversations, Icons } from "../../../common";
import StyledInputField from "../../../components/StyledInputField/StyledInputField";

import "./chat.css";
import ChatListComponent from "./ChatListComponent";
const ChatPage = () => {
  const { IO } = Icons;
  return (
    <div className="seller-admin-container">
      <div className="chat-list">
        {/* <h2>Chats</h2> */}
        <Card className="chat-card">
          <CardBody>
            <h2>Chats</h2>
            <div className="chat-row">
              <div>
                <Card className="chat-list-card">
                  <CardBody className="chat-list-card-body">
                    {conversations.map((chatList) => {
                      return (
                        <ChatListComponent
                          key={chatList._id}
                          chatList={chatList}
                        />
                      );
                    })}
                  </CardBody>
                </Card>
              </div>
              <div>
                <Card className="chat-msgs-card">
                  <CardBody>
                    <div className="chat-messages"></div>
                    <StyledInputField
                      endIcon={<IO.IoMdSend size={25} />}
                      className="chat-input"
                    />
                  </CardBody>
                </Card>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ChatPage;
