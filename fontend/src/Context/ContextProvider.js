import React, { createContext,useState,useEffect,useContext } from "react";
import { useHistory } from "react-router-dom";

const ChatContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  const history = useHistory();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (!userInfo) history.push("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  return (
    <ChatContext.Provider
      value={{
        user,
        setUser,
      }}
    ></ChatContext.Provider>
  );
};
export const ChatState = () => {
  return useContext(ContextProvider);
};

export default ContextProvider;
