import React from "react";
import { Container } from "react-bootstrap";
import { ChatState } from "../../Context/ContextProvider";
import { useState } from "react";
import SideDrawer from "../../components/chatComponents/SideDrawer";
import MyChats from "../../components/chatComponents/MyChats";
import ChatBox from "../../components/chatComponents/ChatBox";

const ChatPage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  //const { user } = ChatState();
  return (
    <div style={{ width: "100%" }}>
      { <SideDrawer />}
      <Container
        d="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        { <MyChats fetchAgain={fetchAgain} />}
        { (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Container>
    </div>
  );
};

export default ChatPage;
