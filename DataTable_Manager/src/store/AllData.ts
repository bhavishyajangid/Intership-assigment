import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import Rows from "../components/Rows";





const initialState : DataState = {
 column : ["Hide", "Sr", "Name", "Email", "Age", "Role"],
      additionalColumn : [],
      rows : [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      age: 25,
      role: "Admin",
      hide : true ,
    },
    {
      id: 2,
      name: "Alice Smith",
      email: "alice@example.com",
      age: 30,
      role: "User",
      hide : true,
    },
  ]
}

const allDataSlice = createSlice({
    name : 'data',
    initialState : initialState,
    reducers : {
       setAddColumn : (state , action : PayloadAction<string>) => {
           state.column.push(action.payload)
           state.additionalColumn.push(action.payload)
       },
       setAdditionalColumn : (state) => {
       state.additionalColumn = []
       }, 
       setAscending : (state) => {
         
       },
       setDecending : (state) => {

       }
    }
})

export const {setAddColumn , setAdditionalColumn , setAscending , setDecending } =allDataSlice.actions

export default allDataSlice
