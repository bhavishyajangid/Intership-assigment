import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./Products";
import filterSlice from "./Filter";

const store = configureStore({reducer : {
  allProducts : productsSlice.reducer,
  filterProducts : filterSlice.reducer
}})

export default store