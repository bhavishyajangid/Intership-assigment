import React from 'react'
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
const Dropdown = ({downOption , className = "w-32"}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Select");

    
  return (
    <div className={`relative ${className}`} >
      <div
        className="border border-gray-300 px-2 py-2.5 text-gray-700 rounded-xl text-sm flex justify-between items-center cursor-pointer bg-white"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {selectedOption}
        <IoIosArrowDown  className={`text-black transform transition-transform duration-300 ${
            isDropdownOpen ? "rotate-180" : "rotate-0"
          }`} />
      </div>
      {isDropdownOpen && (
        <div className=" absolute left-0 w-full bg-white border border-gray-300 rounded-2xl shadow-md mt-1 z-10">
          {downOption.map((option, index) => (
            
            <div
              key={index}
              className="px-5 py-3 text-sm hover:bg-gradient-to-r from-sky-100 via-green-100 to-amber-100  text-gray-700 cursor-pointer"
              onClick={() => {
                setSelectedOption(option);
                setIsDropdownOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
          
      )}
    </div>
  )
}

export default Dropdown