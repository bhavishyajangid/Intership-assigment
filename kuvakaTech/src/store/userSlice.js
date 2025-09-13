import { createSlice } from "@reduxjs/toolkit"



const userSlice = createSlice({
    name : 'auth' ,
    initialState : {
        user : {},
        isLogin : false , 
        countryCode : [],
        otpSend : false,
        resend : false,
        otpVerify : false,
        generatedOtp : ''
    },
    reducers : {
        setUser : (state , action) => {
             state.user = action.payload 
             state.isLogin = true
        },
       setCoutryCode : (state , action) => {
            state.countryCode = action.payload
       },
       setOtpSend : (state) => {
        state.generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
          state.otpSend = true
       }, 
       setResend : (state) => {
          state.generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
            state.resend = !state.resend
       },
       setOtpVerify : (state , action) => {
        state.otpVerify = action.payload
       }
    }
})

export const {setCoutryCode , setOtpSend , setUser , setResend , setOtpVerify} = userSlice.actions
export default userSlice