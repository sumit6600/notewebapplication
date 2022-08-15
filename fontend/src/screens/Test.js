import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Test = () => {
  const [chats, setChats] = useState([]);

  const fetchChat = async () => {
    const { data } = await axios.get("api/chats");
    setChats(data);
    console.log(data);
  };

  useEffect(() => {
    fetchChat();
  }, []);

  return (
    <div>
      {/* {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName} </div>
      ))} */}

      <h1>chats</h1>
    </div>
  );
};

export default Test;
