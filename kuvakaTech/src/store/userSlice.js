import { createSlice } from "@reduxjs/toolkit"


const userSlice = createSlice({
    name : 'auth' ,
    initialState : {
        countryCode : [],
    },
    reducers : {
       setCoutryCode : (state , action) => {
            state.countryCode = action.payload
       }
    }
})

export const {setCoutryCode} = userSlice.actions
export default userSlice