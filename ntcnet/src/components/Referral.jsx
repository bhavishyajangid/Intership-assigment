import React, { useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";
import CardHeading from "./CardHeading";

export default function Referral({QR}) {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://ntcnet.biz?refer=0xEe58d5471B85f1A60aB5BdcCAB3b5171E03BA6";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className=" shadow-[0_6px_30px_rgba(0,0,0,0.7)]  border border-[#2a2f3a] rounded-2xl p-3   ">
     <CardHeading title="Your Referral Link" subHeading="Share this link to invite your friends and earn bonuses when they join!"/>
      <div className=" mt-5 flex flex-col sm:flex-row sm:items-center gap-3 justify-between bg-[#0F1116] p-3 rounded-lg border border-[#5F3F2B]">
        <p className="text-gray-300 break-all text-sm">{referralLink}</p>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 bg-[#2A1F17] border border-[#5F3F2B] hover:bg-[#3A2A20] px-4 py-1.5 rounded-md max-sm:flex max-sm:justify-center  text-white hover:text-black transition"
        >
          {copied ? (
            <>
              <FaCheck size={14} /> Copied
            </>
          ) : (
            <>
              <FaCopy size={14} /> Copy
            </>
          )}
        </button>
      </div>

     

      {/* Optional QR Code or illustration */}
      {
        QR && <div className="mt-4 flex justify-center flex-col items-center ">
        <img src={QR} alt="QR Code" className="w-32 h-32" />
         <div className="text-xs  text-gray-400 mt-2">
       Scan this Qr code 
      </div>
      </div>
      }
      
      
    </div>
  );
}
