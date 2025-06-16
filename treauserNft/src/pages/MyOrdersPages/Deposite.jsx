import React from "react";
// import { Copy } from "lucide-react";

const Deposit = () => {
  const options = ["Node 1 — USDT-BEP-20"];
  const minDeposit = "50 USDT";
  const warningMessage = "*You can only deposit, USDT-BEP-20 to this address. Other assets cannot be recovered.";
  const qrImageSrc = "/qr-placeholder.png"; // Replace with dynamic QR generation if needed
  const depositAddress = "0x983c1607682b3cb59e997dfe5be09611624535";
  const chainName = "BSC (BEP-20)";

  return (
    <div className="min-h-screen bg-white px-4 md:px-6 py-8 flex flex-col items-center">
      <div className="w-full max-w-md space-y-6">
        {/* Dropdown */}
        <div className="border border-gray-300 rounded-lg p-2 shadow-sm">
          <select className="w-full bg-transparent px-2 py-1 text-sm text-gray-700 font-medium focus:outline-none">
            {options.map((opt, index) => (
              <option key={index}>{opt}</option>
            ))}
          </select>
        </div>

        {/* Deposit Chain Info */}
        <div className="rounded-2xl shadow-md border border-gray-200 p-6 flex flex-col items-center text-center space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Deposit Chain</h2>
          <p className="text-sm text-gray-500">Minimum Deposit : {minDeposit}</p>
          <p className="text-xs text-red-500">
            {warningMessage.split("USDT-BEP-20")[0]}
            <span className="text-blue-600 font-semibold">USDT-BEP-20</span>
            {warningMessage.split("USDT-BEP-20")[1]}
          </p>
          <div className="w-40 h-40 bg-gray-200 rounded-lg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3bTlaTdaKOc_QUO3-dtd2TiNU5CO06n0lQg&s"
              alt="QR Code"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <button className="w-full mt-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-2 cursor-pointer">
            Save QR Code
          </button>
        </div>

        {/* Address Section */}
        <div className="border border-gray-300 rounded-xl p-4 bg-white shadow-sm">
          <div className="text-sm font-semibold text-gray-700 mb-2">USDT Deposit Address</div>
          <div className="flex items-center justify-between border border-gray-200 p-3 rounded-lg bg-gray-100">
            <span className="text-xs break-all text-gray-800">{depositAddress}</span>
            {/* <Copy size={16} className="text-gray-500 cursor-pointer hover:text-gray-700" /> */}
          </div>

        </div>
          <div className="mt-3 p-3 border border-gray-300 rounded-xl  bg-white shadow-sm  text-sm text-gray-700">
            <span className="font-semibold">Chain:</span> <span className="text-gray-600">{chainName}</span>
          </div>
      </div>
      
    </div>
  );
};

export default Deposit;
