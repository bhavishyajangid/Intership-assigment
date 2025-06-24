import React from 'react'

const CardHeading = ({title , btn , className = "text-xl" , subHeading}) => {
  return (
    <>
    <div className='flex justify-between items-center'>
   <h2 className={`text-white  font-bold mb-2 ${className}`}>{title}</h2>
   {
    btn && <button className="text-xs bg-[#5F3F2B] text-[#f5c679] hover:bg-[#5f3f2bcb] px-2.5 rounded-sm h-6 cursor-pointer ">{btn}</button>
   }
   
    </div>
      <hr className="border-cyan w-20 mb-4" />
      {
        subHeading && <p className='text-xs text-gray-400 '>{subHeading}</p>
      }
      
      </>
  )
}

export default CardHeading