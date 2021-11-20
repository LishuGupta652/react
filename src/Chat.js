import {
  AttachFile,
  InsertEmoticon,
  InsertEmoticonOutlined,
  MicOutlined,
  SearchOutlined,
} from "@mui/icons-material";
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
        <p className="chat__message">
          <span className="chat__name">Lishu</span>
          This is the message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat__receiver">
          <span className="chat__name">Lishu</span>
          This is the message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Lishu</span>
          This is the message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticonOutlined />
        <form>
          <input
            type="text"
            // value={input}
            // onChange={(e) => setInput(e.target.value)}
            placeholder="Type a text"
          />
          <button
            // onClick={sendMessage}
            type="submit"
          >
            Send a message
          </button>
          <MicOutlined />
        </form>
      </div>
    </div>
  );
};

export default Chat;
