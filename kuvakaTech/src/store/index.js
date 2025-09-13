import {configureStore} from '@reduxjs/toolkit'
import userSlice from './userSlice'
import chatSlice from './chatSlice'


export const store = configureStore({
    reducer : {
        userSlice : userSlice.reducer,
        chatSlice : chatSlice.reducer
    }
})