// import React, { useEffect } from 'react'
// import { useDispatch } from 'react-redux'

// const LoadMoreBtn = () => {
//     const dispatch = useDispatch()

//     useEffect(() => {
//         const loadMoreBtn = async() => {
//               try {
//                 const response
//                  dispatch(setFilterProductPage())
//                  dispatch(setAllproductsPage())
//               } catch (error) {
                
//               }
//         }
//     })
//   return (
//     <div className='w-full flex justify-center items-center mb-5'>
        
//         <button onClick={() => {LoadMoreBtn()}} className='bg-black text-white px-5 font-medium py-2 rounded-lg'>Load More</button> 
//     {/* {
//       !loadingNewData  ?  : <Loader className="h-10"/>
//     }
//     {
//       hasMore === false && <p>No more products available</p>
//     } */}
   
//   </div>
//   )
// }

// export default LoadMoreBtn