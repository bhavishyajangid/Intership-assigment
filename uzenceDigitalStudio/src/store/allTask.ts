import { createSlice } from "@reduxjs/toolkit";
import { KanbanCards } from "../sampleData/SampleData";

const initialState = {
     allCards : KanbanCards,
     collapse : false
}

const allTaskSlice = createSlice(({
    name : "TaskData",
    initialState,
    reducers : {
       updateCardTitle : (state , action) => {
        const {id , value , field} = action.payload
        console.log(action.payload);
        
        field === 'Rename' ? state.allCards[id].title = value :
        state.allCards[id].maxTasks = value
       },
     setDeleteCard : (state , action) => {
        state.allCards = state.allCards.filter((item) => item.id !== action.payload)
        console.log(state.allCards);
        
     },
    }
}))

export const { updateCardTitle , setDeleteCard } = allTaskSlice.actions
export default allTaskSlice




