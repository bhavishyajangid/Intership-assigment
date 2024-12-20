import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState : {
        data : [] ,
        allProducts : {
            page : 1,
            data : [],

        },
        loader : true,
        categoryApi : false,
        loadMoreProducts : false,
        searchData : {
            searchValue : "" ,  
            searchMode : false
        }
        

    }, 
    reducers : {
        setAllProducts : (state , action) => {   
            state.allProducts.data = [...state.allProducts.data , ...action.payload.products] 
            state.searchData.searchMode = false
           console.log(action.payload , 'allproducts');
           
        },

        setSearchValue : (state , action) => {
            state.allProducts.data = action.payload
            state.searchData.searchMode = true
        },
    
        setAllproductsPage : (state) => {
             state.allProducts.page += 1     
        },
       
        changeCategoryApi : (state , action) => {
            state.categoryApi = action.payload
        },  
        setStopLoading : (state) => {
            state.loadMoreProducts = false
            state.loader = false
        }, 

        setStartLoading : (state , action) => {
             state.loader = action.payload.loader ?? false,
             state.loadMoreProducts = action.payload.loadMoreProducts ??  false
        } , 
        setSearchValue : (state , action) => {
            state.searchData.searchValue = action.payload
        }

    }
})

export const {setAllProducts  , setAllproductsPage ,  changeCategoryApi ,setStopLoading , setStartLoading , setSearchValue} = productsSlice.actions
export default productsSlice