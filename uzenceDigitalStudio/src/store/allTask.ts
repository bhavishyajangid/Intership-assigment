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

       },
       updateCardTitle : (state , action) => {
        const {id , value , field} = action.payload
        console.log(action.payload);
        
        field === 'Rename' ? state.allCards[id].title = value :
        state.allCards[id].maxTasks = value
       }
    }
}))

export const {setKanbanCards , updateCardTitle} = allTaskSlice.actions
export default allTaskSlice




