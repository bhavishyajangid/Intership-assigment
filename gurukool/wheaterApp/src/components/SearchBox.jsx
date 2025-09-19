import React, { memo, useEffect, useRef, useState } from 'react'
import { FaLocationCrosshairs } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { setData, setLoader, setUseCurrentLocation } from '../store/weatherSlice';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const SearchBox = () => {
  const [val , setVal] = useState(null)
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const {oldInputVal} = useSelector(state => state.weatherSlice)

  useEffect(() => {
    
    
  }, [val])

  
  const fetchSearch = async () => {
    console.log(oldInputVal , inputRef.current.value);

    let city = inputRef.current?.value?.trim()
    
    if (!city || oldInputVal === city) return;

    dispatch(setLoader(true));
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${inputRef.current.value}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      dispatch(setData({data , inputVal : city}));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoader(false));
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      fetchSearch();
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div className="bg-white w-11/12 flex items-center justify-between h-11 rounded-4xl overflow-hidden">
        <input
          ref={inputRef}
          onKeyDown={handleEnter}
          onChange={(e)=> {setVal(e.target.value)}}
          className="w-11/12 h-full outline-none placeholder:text-sm placeholder:font-medium text-gray-500 px-5"
          type="text"
          placeholder="Search City"
        />
        <div
          onClick={fetchSearch}
          className="h-full w-16 bg-blue-500 flex justify-center items-center text-2xl text-white cursor-pointer"
        >
          <CiSearch />
        </div>
      </div>

      <span
        onClick={() => dispatch(setUseCurrentLocation())}
        className="p-3 rounded-2xl bg-gray-500 cursor-pointer text-white text-xl"
      >
        <FaLocationCrosshairs />
      </span>
    </div>
  );
};

export default memo(SearchBox) ;
