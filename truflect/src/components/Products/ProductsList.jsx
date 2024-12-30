import React, { memo } from "react";
import { ProductCard, Loader } from "../../../exports";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setAllProducts,
  setAllproductsPage,
  setSearchValue,
  setStartLoading,
  setStopLoading,
} from "../../store/Products";
import { setFilterProductPage } from "../../store/Filter";

const ProductsList = () => {
  const { allProducts, loader, categoryApi, loadMoreProducts, searchData } = useSelector(
    (state) => state.allProducts
  );
  const { filterCategory } = useSelector((state) => state.filterProducts);
  const [hasMore, setHasMore] = useState(true);
  const dispatch = useDispatch();

  
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://world.openfoodfacts.org/products.json?page=${allProducts.page}`
        );
        const res = await response.json();
        if (res) {
          dispatch(setAllProducts({search : false , products : res.products}));
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(setStopLoading());
      }
    };

 


  
    const handleInputVlaue = async () => {
      
       dispatch(setStartLoading({loader : true}))
      try {
          const response = await fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchData.searchValue}&json=true`)
          const res =  await response.json()
          if(res){
            console.log(res , 'searchVlaue');
            // console.log(inputValue);
             dispatch(setSearchValue(res.products))
          }
        }
          
        
       catch (error) {
        console.log(error);
        
      }finally{
        dispatch(setStartLoading({loader : false}))
      }
      
     
    };
    
 
    
    useEffect(() => {

      if(searchData.searchValue === ""){
        const lateFetch = setTimeout(() => {
          fetchProducts()
        }, 500);
    
        return () => clearTimeout(lateFetch);
      }else{
        handleInputVlaue()
      }
 

    } , [allProducts.page , searchData.searchValue])


  
  const handleLoadMoreBtn = () => {
    console.log("running");
    
    categoryApi
      ? dispatch(setFilterProductPage())
      : dispatch(setAllproductsPage());
    dispatch(setStartLoading({ loadMoreProducts: true }));
  };

  if (loader) {
    return <Loader className="h-screen w-full" />;
  }

  const productsToDispaly = categoryApi
    ? filterCategory.data
    : allProducts.data;
  return (
    <>
      <div className="p-5 grid gap-4  max-[500px]:grid-cols-1  max-md:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  xl:grid-cols-5 ">
        {productsToDispaly?.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
      <div className="w-full flex justify-center items-center mb-5">
        
        {!loadMoreProducts ? (
          <button
            onClick={() => {
              handleLoadMoreBtn();
            }}
            className={`bg-black text-white px-5 font-medium py-2 rounded-lg ${searchData.searchMode && "hidden"}`}
          >
            Load More
          </button>
        ) : (
          <Loader className="h-10" />
        )}
        {hasMore === false && <p>No more products available</p>}
      </div>
    </>
  );
};

export default memo(ProductsList);
