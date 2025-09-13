import React from 'react'
import ChatRoomBox from '../../components/ChatRoomBox'
import { useState } from 'react';
const ChatRooms = () => {
    const [selectedId, setSelectedId] = useState(0);
    const [chatrooms, setChatrooms] = useState([
    {
      id: 1,
      title: "AI Research",
      lastMessage: "Let's talk about Gemini project updates",
      updatedAt: "2025-09-12T12:30:00Z",
    },
    {
      id: 2,
      title: "Frontend Development",
      lastMessage: "I fixed the signup form issue 🎉",
      updatedAt: "2025-09-11T18:10:00Z",
    },
    {
      id: 3,
      title: "Daily Standup",
      lastMessage: "Today's meeting starts in 15 mins",
      updatedAt: "2025-09-10T09:00:00Z",
    },
    {
      id: 3,
      title: "Daily Standup",
      lastMessage: "Today's meeting starts in 15 mins",
      updatedAt: "2025-09-10T09:00:00Z",
    },
    {
      id: 3,
      title: "Daily Standup",
      lastMessage: "Today's meeting starts in 15 mins",
      updatedAt: "2025-09-10T09:00:00Z",
    },
    {
      id: 3,
      title: "Daily Standup",
      lastMessage: "Today's meeting starts in 15 mins",
      updatedAt: "2025-09-10T09:00:00Z",
    },
    {
      id: 3,
      title: "Daily Standup",
      lastMessage: "Today's meeting starts in 15 mins",
      updatedAt: "2025-09-10T09:00:00Z",
    },
  ]);
  return (
    <div className="w-full md:w-[600px] md:min-w-[300px]  h-full p-3  border-r border-gray-300">
        <div className="flex justify-end items-center h-16 ">
          <button className=" py-2 px-7 text-white font-medium cursor-pointer  rounded-xl bg-purple-400">
            Create
          </button>
        </div>

        <h1 className="font-medium text-center mb-2">Active Chat Room</h1>

        <div className="flex flex-col gap-3 max-h-[82vh] overflow-y-scroll scrollbar-hide">
          {chatrooms.map((item) => (
            <ChatRoomBox
              key={item.id}
              item={item}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
            />
          ))}
        </div>
      </div>
  )
}

export default ChatRooms