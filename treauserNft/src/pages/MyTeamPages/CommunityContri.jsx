import React from 'react'
import InputOrDate from '../../componenets/CommunityEnthCompo/InputOrDate'
import { useState , useRef } from 'react';
const CommunityContri = () => {
    const [selectedMember, setSelectedMember] = useState("AMember");
  return (
    <div className="max-w-[450px] mx-auto p-4 bg-white min-h-screen text-gray-700 flex flex-col gap-4 ">
 
  <InputOrDate/>
  
  <div className="space-y-4">
        <div className=" rounded-lg p-4 grid grid-cols-2 gap-4 text-center  shadow-md">
          {["All rebates", "Rebate A", "Rebate B", "Rebate C"].map((text, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className='flex  items-center gap-2'>
              <img src="https://image.treasurenft.xyz/coin/usdt.png" alt="USDT" className="w-3 h-3 " />
              <span className="text-md font-medium text-gray-900 ">0</span>
              </div>
              <p className="text-[13px] ">{text}</p>
            </div>
          ))}
        </div>
        
        <div className=" rounded-lg bg-white shadow-md">
          <div className="relative">
            <div className="grid grid-cols-3 border-b border-gray-300 relative">
              {["A Member", "B Member", "C Member"].map((text, idx) => (
                <button 
                  key={idx} 
                  className={`w-full py-2 text-sm font-semibold  relative cursor-pointer`}
                  onClick={() => setSelectedMember(text)}
                >
                  {text}
                </button>
              ))}
            </div>
            <div className={`absolute bottom-0 left-0 h-[3px] rounded-xl  bg-gradient-to-r from-sky-300 via-green-300 to-amber-300  transition-all duration-300 `} style={{
              width: "33.33%",
              transform: `translateX(${selectedMember === "B Member" ? "100%" : selectedMember === "C Member" ? "200%" : "0"})`
            }}></div>
          </div>
          
          <div className="p-4 font-semibold text-[16px] text-[#202020] flex justify-between ">
            <span>{selectedMember}</span>
            <span>Rebate</span>
          </div>
        </div>
        </div>
    </div>
  )
}

export default CommunityContri