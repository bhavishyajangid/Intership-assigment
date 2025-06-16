import React from 'react'
import { useState , useRef } from 'react';
import { IoCalendarClearOutline } from "react-icons/io5";
const InputOrDate = () => {
  const [date, setDate] = useState("");
  const [btn, setBtn] = useState("All");
  const firstButtonRef = useRef(null);
  return (
    <>
    <input
    type="date"
    value={date}
    onChange={(e) => setDate(e.target.value)}
    className="w-full text-sm text-gray-400 mt-5  p-2 border rounded-xl outline-none bg-white"
    placeholder="Select date"
  />
        
  

  <div className="flex gap-4 my-4 ">
    {["All", "Today", "Yesterday", "Week", "Month"].map((filter, index) => (
      <button
        onClick={(e) => {
          setBtn(e.target.innerText);
        }}
        ref={index === 0 ? firstButtonRef : null}
        key={index}
        className={`px-4 py-2 text-xs font-medium border-none outline-none text-black cursor-pointer rounded-lg shadow-md transition-all ${
          btn === filter
            ? "bg-gradient-to-r from-sky-200 via-green-200 to-amber-200 text-black"
            : "border border-solid border-gray-200"
        }`}
      >
        {filter}
      </button>
    ))}
    <IoCalendarClearOutline />
  </div>
  </>
  )
}

export default InputOrDate
