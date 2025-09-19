import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./weatherSlice";


const store = configureStore({
    reducer : {
        weatherSlice : weatherSlice.reducer
    }
})

export default store