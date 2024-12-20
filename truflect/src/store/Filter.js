import { createSlice } from "@reduxjs/toolkit";


const filterSlice = createSlice({
    name : "filter" , 
    initialState : {
        filterCategory : {
            data : [],
            page : 1,
            loadMore : false
        }, 
        
    },
    reducers : {
        setFilterProduct : (state , action) => {
            
            if(state.filterCategory.loadMore === true){
                console.log('loadmore true'  , state.filterCategory.loadMore);
                
                state.filterCategory.data = [...state.filterCategory.data , ...action.payload]
                console.log(state.filterCategory.data , 'filter products');
                
            }else{
                console.log("load more false" );
                state.filterCategory.data = action.payload
   
            }
            console.log(state.filterCategory.page ,'page value ending' );
            
        },

        setFilterProductPage : (state) => {
            state.filterCategory.page += 1
        },
        setLoadeMore : (state , action) => {
            console.log('clicking loadmore' , action.payload);
            
            state.filterCategory.loadMore = action.payload

        }
    }
})

export const {setFilterProduct , setFilterProductPage , setLoadeMore} = filterSlice.actions
export default filterSlice