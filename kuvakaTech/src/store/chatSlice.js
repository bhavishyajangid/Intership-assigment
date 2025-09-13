import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name : 'chat',
  initialState : {
     selectedRoom : 0,
     chatOfUser : [],
     chatRooms : [{
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
    },]
  },
  reducers : {
    setSeletedRoom : (state , action) => {
        state.selectedRoom = action.payload
    }, 
    setChatOfUser : (state , action) => {
        state.chatOfUser = action.payload
    },
    setRooms : (state , action) => {
        state.chatRooms = action.payload
    }
  }
})

export const {setChatOfUser , setSeletedRoom , setRooms} = chatSlice.actions
export default chatSlice