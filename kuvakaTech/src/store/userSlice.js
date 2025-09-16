import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: {},
    isLogin: false,
    countryCode: [],
    otpSend: false,
    resend: false,
    otpVerify: false,
    generatedOtp: "",
    id : 2
  },
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload;
      state.isLogin = true;
    },
    setCoutryCode: (state, action) => {
      state.countryCode = action.payload;
    },
    setOtpSend: (state) => {
      state.generatedOtp = Math.floor(
        100000 + Math.random() * 900000
      ).toString();
      state.otpSend = true;
    },
    setResend: (state) => {
      state.generatedOtp = Math.floor(
        100000 + Math.random() * 900000
      ).toString();
      state.resend = !state.resend;
    },
    setOtpVerify: (state, action) => {
      state.otpVerify = action.payload;
    },
    setUserUpdate: (state, action) => {
      state.currentUser = action.payload;
    },
    addMessage: (state, action) => {
      state.currentUser;
    },
    increaseId : (state , action) => {
       state.id = state.id + 1
    },
    decreaseId : (state , action) => {
      state.id  = state.id - 1
    }
  },
});

export const {
  setCoutryCode,
  setOtpSend,
  setUser,
  setResend,
  setOtpVerify,
  setUserUpdate,
  addMessage,
  increaseId,
  decreaseId
} = userSlice.actions;
export default userSlice;
