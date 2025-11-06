import { createSlice } from "@reduxjs/toolkit";

const initialState : StoreType = {
       tableData : [],
       pagination : null,
       currentPage : 1
}

const tableDataSlice = createSlice({
    name : 'TableData',
    initialState,
    reducers : {
        setTableData : (state , action) => {
            const {pagination ,data} = action.payload
            state.tableData = data
            state.pagination = pagination
        }, 
        setCurrentPage : (state , action) => {
            const {page} = action.payload
            state.currentPage += page  
        }
    }
})

export const {setTableData , setCurrentPage} = tableDataSlice.actions
export default tableDataSlice