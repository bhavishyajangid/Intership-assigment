
import React, { useState } from 'react'
import { Table } from '../../exports'

const Invest = () => {
   let data = []
    let option = ["Date" ,	"Amount",	"Type"	,"Status"]
      const [amount, setAmount] = useState(100);
  const [packageType, setPackageType] = useState("Basic");
  const [walletAddress, setWalletAddress] = useState("0xEe58d5471B85f1A60aB5BdcCAB3b5171E03BA6");

  return (
    <>
    <div className='flex flex-col gap-5'>

   
        <div className="shadow-[0_6px_30px_rgba(0,0,0,0.7)]  border border-[#2a2f3a] text-white p-6 rounded-2xl  ">
      <h2 className="text-lg font-bold mb-4">Investment Amount</h2>

      {/* Investment Amount Display */}
      <div className="bg-card-primary  p-4 rounded-xl text-center text-gray-300 text-xl font-medium mb-4">
        {amount} USDT
      </div>

      {/* Package Selection */}
      <div className="mb-4">
        <label className="text-sm text-gray-300 block mb-1">Select Package</label>
        <select
          value={packageType}
          onChange={(e) => {
            setPackageType(e.target.value);
            if (e.target.value === "Basic") setAmount(100);
            if (e.target.value === "Pro") setAmount(500);
            if (e.target.value === "Elite") setAmount(1000);
          }}
          className="w-full bg-[#0F1116] border border-[#7c7c7c]  rounded-lg p-2 text-white focus:outline-none"
        >
          <option value="Basic">Basic - 100 USDT</option>
          <option value="Pro">Pro - 500 USDT</option>
          <option value="Elite">Elite - 1000 USDT</option>
        </select>
      </div>

      {/* Editable Wallet Address */}
      <div className="mb-4">
        <label className="text-sm text-gray-300 block mb-1">Your Wallet Address</label>
        <input
          type="text"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          className="w-full bg-[#0F1116] text-gray-500 p-2 rounded-lg border border-[#7c7c7c]  text-sm focus:outline-none"
        />
      </div>

      {/* Submit Button */}
      <button className="bg-gradient-to-r from-[#5F3F2B] to-[#7a4f37] text-orange-300 hover:from-[#6f4731] hover:to-[#8a5f47] cursor-pointer w-full py-2 mt-2 rounded-lg font-bold hover:opacity-90 transition">
  Deposit Now!
</button>
    </div>
       <Table data={data} title={"Invest Your Money"} option={option} />
    </div>
    </>
  )
}

export default Invest