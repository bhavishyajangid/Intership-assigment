import { createSlice } from "@reduxjs/toolkit";

const initialState : StoreType = {
       tableData : [],
       pagination : null
}

const tableDataSlice = createSlice({
    name : 'TableData',
    initialState,
    reducers : {
        setTableData : (state , action) => {
            const {pagination ,data} = action.payload
            state.tableData = data
            state.pagination = pagination
        }
    }
})

export const {setTableData} = tableDataSlice.actions
export default tableDataSlice