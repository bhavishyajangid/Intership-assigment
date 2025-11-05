import { configureStore } from "@reduxjs/toolkit";
import allDataSlice from "./AllData";


const store = configureStore({reducer : {
  allDataSlice : allDataSlice.reducer
}})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store