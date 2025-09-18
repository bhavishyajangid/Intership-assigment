import React, { useEffect } from 'react'
import { FaLocationCrosshairs } from "react-icons/fa6";
const SearchBox = () => {

    useEffect(() => {
        //  https://api.openweathermap.org/data/2.5/weather?q=ranasar&appid=8a34f33388df78277f56f7e438a1a8be&units=metric
        // https://api.openweathermap.org/data/2.5/forecast?q={CITY_NAME}&appid={YOUR_API_KEY}&units=metric
    })

  return (
    <div className='bg-white  w-full flex items-center justify-between px-5 h-11 rounded-4xl '>
        <input 
        className='w-11/12 h-full outline-none placeholder:text-sm placeholder:font-medium text-gray-500'
         type="text"
         placeholder='Search City'
          />
         <FaLocationCrosshairs className='text-xl cursor-pointer' title='Current Location' />
    </div>
  )
}

export default SearchBox