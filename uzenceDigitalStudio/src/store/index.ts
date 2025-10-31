import { configureStore } from "@reduxjs/toolkit";
import allTaskSlice from '../store/allTask'

const store = configureStore({reducer : {
     allTaskSlice : allTaskSlice.reducer
}})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store