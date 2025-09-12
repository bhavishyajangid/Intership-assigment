import React, { forwardRef, useEffect } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSelector } from 'react-redux';
const Input = forwardRef(({ placeholder , className = ""   , type , otpOpen  , registerSelect, error  ,   ...props } , ref) => {

  const {countryCode} = useSelector(state => state.userSlice)
  

  return (
    <>
    <div className='flex w-full  h-10 border border-gray-400 rounded-4xl  items-center px-3'>
        {
            type === 'number' &&  <select
            {...registerSelect}
              className=" max-w-20 py-2 text-sm font-medium text-gray-600 bg-transparent outline-none border-r border-gray-300"
              defaultValue={""}
            >
              {
                 countryCode?.map((item) => (
                   <option value={`${item.idd?.root}${item.idd?.suffixes[0]}`}>{`${item.cca3} ${item.idd?.root}${item.idd?.suffixes[0]}`}</option>
                 ))
              }
              {/* <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+61">🇦🇺 +61</option>
              <option value="+81">🇯🇵 +81</option> */}
            </select>
        }
        
        <input ref={ref} placeholder={placeholder} className=' text-sm placeholder:text-base ml-2 w-full h-full outline-none' type={type} {...props}/>

{  error && <p className="text-red-500 text-xs mt-1">{error}</p>}

    </div>
    
    
    </>
  )
})

export default Input