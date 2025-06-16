import React, { useState } from "react";
import { IoIosArrowForward , IoIosArrowBack  } from "react-icons/io";
import Button from "../../componenets/Button";
import InputOrDate from "../../componenets/CommunityEnthCompo/InputOrDate";
const UserEarningsPage = () => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Team", "My"];

  return (
    <div className="h-screen bg-gray-50 flex flex-col items-center py-6 px-4">
      {/* Profile Card */}
      <div className="w-full max-w-md bg-gradient-to-r from-blue-100 to-green-100 rounded-3xl shadow-md p-4 flex flex-col ">

      
      <div className="flex gap-3">
        <img
          src="https://rehlatiuae.net/cdn/shop/files/imgworld_10216ba6-081c-45e7-a4ca-e28e533cc17a.jpg?v=1735037139" // Replace with actual image path
          alt="Profile"
          className="w-16 h-16 rounded-full border-2 border-white"
        />
        <div className="flex flex-col gap-2">
        <p className=" font-semibold text-lg text-black ">bhavishya8824</p>
        <div className="flex items-center gap-4  text-sm text-gray-700">
        <Button
            img="https://image.treasurenft.xyz/NewVer2212/img/badges_lv0.png"
            tittle="Level"
            tittleVal="0"
          />
        <Button tittle="Points" tittleVal="0" />
        </div>
        </div>
      </div>
        <div className="w-full mt-4 bg-white text-center rounded-xl py-4">
          <p className="text-sm text-black font">Total Earnings</p>
          <p className="text-2xl font-semibold text-black">0</p>
        </div>
        </div>

      {/* Filters */}
      <div className="w-full max-w-md mt-6 bg-white p-4 rounded-xl shadow space-y-4">
        {/* Tabs with animation */}
        <div className="relative flex justify-start gap-6 text-sm font-medium text-gray-600 pb-2 px-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`transition-all duration-300 pb-1 cursor-pointer ${
                activeTab === tab ? "text-black font-semibold" : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
          <div
            className={`absolute bottom-0 h-0.5 bg-black transition-all duration-300`} 
            style={{
              left: `${tabs.indexOf(activeTab) * 50}px`,
              width: "40px"
            }}
          />
        </div>

        
<div>
      <InputOrDate/>
</div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center mt-6 gap-2">
        <button className=" bg-white cursor-pointer rounded-full hover:bg-gray-100">
        <IoIosArrowBack className="" />
        </button>
        <span className="w-6 h-6 bg-gradient-to-r from-blue-200 to-green-200 rounded-full flex items-center justify-center text-xs font-medium text-white">
          1
        </span>
        <button className=" bg-white rounded-full cursor-pointer hover:bg-gray-100">
        <IoIosArrowForward className=""/>
        </button>
      </div>
    </div>
  );
};

export default UserEarningsPage;
