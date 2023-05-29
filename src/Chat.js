import React from 'react'
import "./Chat.css"
// import { Avatar } from '@mui/material';
import {Avatar,IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVert from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

function Chat({messages}) {
  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar />
        <div className='chat__headerInfo'>
          <h3>Room name</h3>
          <p>last seen at....</p>
        </div>
        <div className='chat__headerRight'>
          <IconButton>
            <SearchIcon/>
          </IconButton>
          <IconButton>
            <AttachFileIcon/>
          </IconButton>
          <IconButton>
            <MoreVert/>
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message)=>{
          <p
          className={`chat_message ${message.received && "chat_reciever"}`}
          >
            <span className="chat_name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">
            {message.timestamp}
          </span>
          </p>
        })}

      </div>

      <div className='chat__footer'>
        <InsertEmoticonIcon/>
        <form>
          <input placeholder="Type a message" type="text"/>
          <button type="submit">Send a message</button>
        </form>
          <MicIcon/>
      </div>
    </div>
  )
}

export default Chat
