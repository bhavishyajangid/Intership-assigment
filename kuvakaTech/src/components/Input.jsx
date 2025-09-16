import React, { forwardRef, memo, useEffect } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSelector } from 'react-redux';
const Input = forwardRef(({ placeholder , className = ""   , type , otpOpen  , registerSelect, error  ,   ...props } , ref) => {

  const {countryCode} = useSelector(state => state.userSlice)
  

  return (
    <>
    <div>

   
    {  error && <p className=" ml-5 mb-2 text-red-500 text-xs mt-1">{error}</p>}
    <div className='flex w-full  h-10 border border-gray-400 rounded-4xl  items-center px-3'>
     
        {
            type === 'tel' &&  <select
            {...registerSelect}
              className=" max-w-24 py-2 text-sm font-medium text-gray-600 bg-transparent outline-none border-r border-gray-300"
            
            >
              {
                 countryCode?.map((item) => (
                   <option key={`${item.cca3}`} value={`${item.idd?.root}${item.idd?.suffixes[0]}`}>{`${item.cca3} ${item.idd?.root}${item.idd?.suffixes[0]}`}</option>
                 ))
              }
            </select>
        }
        
        <input ref={ref} type={type} {...props} placeholder={placeholder} className='text-sm placeholder:text-base ml-2 w-full h-full outline-none'/>

 

    </div>
     </div>
    
    </>
  )
})

export default memo(Input) 