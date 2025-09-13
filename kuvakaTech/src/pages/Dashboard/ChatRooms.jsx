import React from 'react'
import ChatRoomBox from '../../components/ChatRoomBox'
import { useState } from 'react';
import { IoMdSend } from "react-icons/io";
import { useSelector } from 'react-redux';
const ChatRooms = () => {
   const {chatRooms} = useSelector(state => state.chatSlice)
  return (
    <div className="w-full md:w-[600px] md:min-w-[300px]  h-full p-3  border-r border-gray-300">
        <div className="flex justify-end items-center h-16 ">
          <button className=" py-2 px-7 text-white font-medium cursor-pointer  rounded-xl bg-purple-400">
            Create
          </button>
        </div>

        <h1 className="font-medium text-center mb-2">Active Chat Room</h1>

        <div className="flex flex-col gap-3 max-h-[82vh] overflow-y-scroll scrollbar-hide">
          {chatRooms.map((item) => (
            <ChatRoomBox
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </div>
  )
}

export default ChatRooms