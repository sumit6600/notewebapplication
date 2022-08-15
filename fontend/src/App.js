import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LandingPage from "./screens/landingpage/LandingPage";
import LoginPage from "./screens/loginscreen/LoginPage";
import RegisterPage from "./screens/registerscreen/RegisterPage";
import { BrowserRouter, Route } from "react-router-dom";
import MyNotes from "./screens/mynotes/MyNotes";
import CreateNote from "./screens/CreateNote/CreateNote";
import SingleNote from "./screens/singlenote/SingleNote";
import { useState } from "react";
import ProfileScreen from "./screens/profilescreen/ProfileScreen";
import VerifyScreen from "./screens/verifyscreen/VerifyScreen";
import chatPage from "./screens/Chatpage/chatPage";
const App = () => {
  const [search, setSearch] = useState("");

  console.log(search);

  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />

      <main>
        
        <Route path="/chats" component={chatPage} exact />
        <Route path="/" component={LandingPage} exact />
        <Route path="/mynotes" component={() => <MyNotes search={search} />} />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/register" component={RegisterPage} exact />
        <Route path="/createnote" component={CreateNote} />
        <Route path="/note/:id" component={SingleNote} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/verifyemail" component={VerifyScreen} />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
