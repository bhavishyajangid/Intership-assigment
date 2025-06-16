import React from "react";
import { IoCopyOutline } from "react-icons/io5";
const Referral = () => {
  return (
    <div className="flex flex-col items-center min-h-screen w-full p-6  bg-white">
      
        {/* Profile and Rewards Card */}
        
        <div className=" w-full mt-10 flex  items-center flex-col  bg-gradient-to-r from-sky-100 via-green-100 to-amber-100 rounded-xl p-6">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md -mt-13 ">
            <span className="text-md  ">img</span>
          </div>
          <div>
          <h2 className="mt-4 text-lg font-semibold ">bhavishya8824</h2>
          </div>
          <div className="border-solid border-gray-600 border flex justify-center items-center flex-col mt-3 w-full py-3 rounded-xl">
          <p className="text-gray-800  text-sm">Your Total Rewards</p>
          <div className="text-2xl font-bold flex gap-2"><span>0</span>USDT</div>
          </div>
          
          <div className="w-full">
          <p className="text-xs text-gray-600 mt-4">1st place in 24 hours</p>
          <div className="mt-1 flex justify-between items-center">
          <p className="text-[15px] font-bold text-gray-900">0 USDT</p>
          <span className="text-xs text-gray-600">ID</span>
          </div>
          </div>
        </div>

        {/* Invite Section */}
        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold">Invite your friends and earn together</h3>
          <p className="text-sm text-gray-500">You can earn extra profit from every trade.</p>
        </div>

        {/* QR Code */}
        <div className="mt-4 flex justify-center">
          <img
            src="https://png.pngtree.com/png-vector/20231220/ourmid/pngtree-blue-qr-code-png-image_11284921.png"
            alt="QR Code"
            className="w-60 h-60 rounded-lg border border-gray-300 shadow-md"
          />
        </div>

        {/* Referral Code */}
        <div className="mt-4 flex flex-col  items-center justify-center gap-2 text-lg font-bold text-gray-700">
          <div className="flex gap-2 items-center">   
          U6Z27HW6
          <button className="p-1 bg-gray-200 rounded-full  cursor-pointer">
          <IoCopyOutline />
          </button>
          </div>
          <div className="flex items-center gap-2 ">
          <p className="text-xs">https://treasurenft.xyz/#/uc/register/?inviteCode=U62Z7HW6</p>
          <button className="p-1 bg-gray-200 rounded-full  cursor-pointer">
          <IoCopyOutline />
          </button>
          </div>
        </div>
      </div>
   
  );
};

export default Referral;
