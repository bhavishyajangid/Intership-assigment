import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    selectedRoom: 0,
    chatOfUser: [],
    chatRooms: [],
  },
  reducers: {
    setSeletedRoom: (state, action) => {
      state.selectedRoom = action.payload;
    },
    setChatOfUser: (state, action) => {
      state.chatOfUser = action.payload;
    },
    setRooms: (state, action) => {
      state.chatRooms = action.payload;
    },
  },
});

export const { setChatOfUser, setSeletedRoom, setRooms } = chatSlice.actions;
export default chatSlice;
