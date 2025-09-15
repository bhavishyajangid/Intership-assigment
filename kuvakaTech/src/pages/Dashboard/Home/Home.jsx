import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ChatRoomBox from "../../../components/ChatRoomBox";
import ChatRooms from "../ChatRooms";
import ChatBox from "./ChatBox";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../store/userSlice";
import { toast } from "react-toastify";
const Home = () => {
  const dispatch = useDispatch()
  // const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    
    let user = JSON.parse(localStorage.getItem("currentUser"));
    console.log(user);
    
    if (user) dispatch(setUser(user))
      // setCurrentUser(user);
  }, []);

  return (
    <div className="w-full h-screen flex">
      <ChatRooms  />
      <ChatBox />
    </div>
  );
};

export default Home;
