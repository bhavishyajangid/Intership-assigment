import { createSlice } from "@reduxjs/toolkit";
import { KanbanCards } from "../sampleData/SampleData";

const initialState = {
     allCards : KanbanCards,

}

const allTaskSlice = createSlice(({
    name : "TaskData",
    initialState,
    reducers : {
       setKanbanCards : (state , action) => {

       }
    }
}))

export const {setKanbanCards} = allTaskSlice.actions
export default allTaskSlice




