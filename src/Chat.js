import { AttachFile, SearchOutlined } from "@mui/icons-material";
import MoreVert from "@mui/icons-material/MoreVert";
import { Avatar, IconButton } from "@mui/material";
import React from "react";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>last seen at..</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <p>Rhisis message</p>
      </div>
    </div>
  );
};

export default Chat;
