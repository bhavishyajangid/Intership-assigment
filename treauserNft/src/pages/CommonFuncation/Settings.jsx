import React from "react";
import Button from "../../componenets/Button";
import { MdOutlineSecurity } from "react-icons/md";
import { FaUserGear } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { MdLockOutline } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";
const Setting = () => {
  return (
    <div className="h-screen bg-gray-50 flex flex-col items-center   ">
      {/* Profile Card */}
      <div className="w-full h-46  max-w-md bg-gradient-to-r from-blue-200 to-green-200  shadow-md p-4 flex flex-col gap-5  ">
        <div className="flex gap-3 mt-6">
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
        <div className="flex justify-around py-3 bg-white z-10 rounded-lg border-b  border-2 border-gray-200   ">
          <div className="flex flex-col items-center ">
            <MdOutlineSecurity className="text-sky-500 text-[19px]" />
            <span className="text-[13px] font-semibold mt-2">
              Google Verification
            </span>
            <span className="text-xs font-semibold text-red-500">
              Not bound
            </span>
          </div>
          <div className="flex flex-col items-center ">
            <FaUserGear className="text-sky-500 text-[19px]" />
            <span className="text-[13px] font-semibold mt-2">User Setting</span>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full py-14 px-4  flex flex-col gap-2 relative  ">
        <div className="bg-white p-5 rounded-xl shadow-md">
          <div className="w-full flex items-center gap-2 relative text-gray-900 border-b border-gray-200 p-3 cursor-pointer">
            <MdLockOutline className="text-xl" />
            <span className="font-semibold text-[14px]"> Change Password</span>
            <IoIosArrowForward className="absolute right-0 " />
          </div>

          <div className="w-full flex items-center gap-2 relative text-gray-900 border-b border-gray-200 p-3 cursor-pointer">
            <GiSettingsKnobs className="text-xl" />
            <span className="font-semibold text-[14px]"> Line Setting</span>
            <IoIosArrowForward className="absolute right-0 " />
          </div>
        </div>

        <div>
          <button className="w-full py-2.5 cursor-pointer px-3 bg-gradient-to-r from-sky-300 via-green-300 to-amber-300 rounded-2xl text-white font-semibold absolute bottom-25  ">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
