
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { useEffect,useState } from 'react';
import Pusher from 'pusher-js';
import axios from "./axios";


function App() {
  const [messages,setMessages]=useState([]);
  useEffect(()=>{
    axios.get('/messages/sync')
    .then(response=>{
      setMessages(response.data);
    })
  },[])

  useEffect(()=>{
    const pusher = new Pusher('24067d371f96455b0d08', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe("messages");
    channel.bind('inserted',(newMessage)=>{
      setMessages([...messages,newMessage])
    });
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    };
  },[messages]);
  console.log(messages);


  return (
    <div className="app">
      <div className='app__body'>
      <Sidebar />
      <Chat messages={messages}/>
      </div>
     
    </div>
  );
}

export default App;
