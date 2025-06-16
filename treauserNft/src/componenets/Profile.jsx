import React from "react";
import { RiEyeCloseLine } from "react-icons/ri";
import { IoCalendarClearOutline } from "react-icons/io5";
import Button from "./Button";
import Tutorial from "../pages/CommonFuncation/Tutorials";

const Profile = () => {
  return (
    <div className="w-full py-3 px-6 flex mt-3 ">
      <img
        className="w-16 h-16 rounded-full"
        src="demo.jpg"
        alt=""
      />
      <div className="flex flex-col px-3 w-full ">
        <div className="flex  items-center justify-between ">
          <div className="flex gap-3">
            <span className="font-bold text-md">**************</span>
            <span>
              <RiEyeCloseLine className="text-xl" />
            </span>
          </div>

          <span className="">
            <IoCalendarClearOutline className="text-2xl font-medium" />
          </span>
        </div>

        <div className="flex items-center text-xs text-gray-400">
          <p>
            UID : <span>*********</span>
            
          </p>
        </div>

        <div className="flex gap-4 mt-5 ">
          <Button
            img="https://image.treasurenft.xyz/NewVer2212/img/badges_lv0.png"
            tittle="Level"
            tittleVal="0"
          />
          <Button tittle="Points" tittleVal="0" />
        
        </div>
      </div>
    </div>
  );
};

export default Profile;
