import { configureStore } from "@reduxjs/toolkit";
import tableDataSlice from "./TableData";


const store = configureStore({reducer : {
   tableDataSlice : tableDataSlice.reducer
}})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store