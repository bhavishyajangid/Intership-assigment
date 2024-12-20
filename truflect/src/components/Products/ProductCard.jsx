import React from 'react'

const ProductCard = ({item}) => {

  return (
    <div className='rounded-lg overflow-hidden shadow-lg shadow-gray-400   cursor-pointer max-sm:w-fit '>
        <div>
        <img className='bg-center min-w-40 mx-auto h-48' src={item.image_url} alt="" />
        </div>
        <div className=' flex flex-col px-2 text-sm py-3 capitalize font-medium'>
        <h1 className="text-sm capitalize mb-0">{item.generic_name
        }</h1>
        {/* <div >category : <span className='font-normal text-[13px]'>{item.categories.split(',').slice(0, 2).join(",")}</span> </div> */}
        <div>increadients :  
          {
            item.ingredients?.slice(0,5).map((item) => ( <span className='font-normal text-[13px]'>{item.text} , </span> 
           ))
          }
      
          </div>
        <div>nutrication grade : <span className='font-normal'>{item.nutrition_grades}</span></div>
        </div>
    </div>
  )
}

export default ProductCard