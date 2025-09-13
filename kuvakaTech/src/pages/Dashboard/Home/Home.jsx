import React from "react";
import { useState } from "react";
import ChatRoomBox from "../../../components/ChatRoomBox";
import ChatRooms from "../ChatRooms";
import ChatBox from "./ChatBox";
const Home = () => {
  

  return (
    <div className="w-full h-screen flex">
      <ChatRooms/>
     <ChatBox/>
    </div>
  );
};

export default Home;
