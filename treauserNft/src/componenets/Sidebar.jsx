import React, { useState } from "react";
import { MdHome } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { RiCustomerServiceLine } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { MdMailOutline ,  MdOutlineSecurity} from "react-icons/md";

const Sidebar = ({isOpen , setIsOpen}) => {
  

  return (
      
      <div
        className={`fixed top-14 right-0 h-fit w-48 bg-white shadow-lg p-4 space-y-4 rounded-r-xl  transform ${
          isOpen ? "translate-x- block  " : " translate-x-full hidden "
        } transition-transform duration-500 ease-in`}
      >
        
        <ul className="space-y-4">
          <li className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <span><MdHome /></span>
            <span className="text-gray-800 text-sm">Home</span>
          </li>
          <li className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <span><AiOutlineGlobal /></span>
            <span className="text-gray-800 text-sm">Language</span>
          </li>
          <li className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <span><RiCustomerServiceLine /></span>
            <span className="text-gray-800 text-sm">Service</span>
          </li>
          <li className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <span className="text-blue-500"><FaTelegram /></span>
            <span className="text-gray-800 text-sm">Telegram</span>
          </li>
          <li className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <span><FaDownload /></span>
            <span className="text-gray-800 text-sm">Download</span>
          </li>
          <li className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <span><MdMailOutline /></span>
            <span className="text-gray-800 text-sm">Message</span>
          </li>
          <li className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <span><MdOutlineSecurity /></span>
            <span className="text-gray-800 text-sm">Security TAP</span>
          </li>
        </ul>
      </div>
  );
};

export default Sidebar;
