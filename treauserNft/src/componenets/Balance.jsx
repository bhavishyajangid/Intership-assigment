import React from 'react'
import Category from './Category'

const Balance = () => {
  return (
    <div className='px-5 mt-5'>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-5 max-[390px]:text-sm ">
        {/* Wallet Balance Header */}
        <h2 className="text-sm font-semibold">Wallet Balance</h2>
        <div className="flex items-center space-x-2 mt-2">
          <img src="https://image.treasurenft.xyz/coin/usdt.png" alt="USDT" className="w-4 h-4" />
          <span className="text-2xl font-bold">0</span>
        </div>
        {/* Section Divider */}
        <hr className="my-3 border-gray-300" />

        {/* Table Headers */}
        <div className="grid grid-cols-3 text-gray-600 font-medium pb-2 text-sm">
          <span></span>
          <span className="text-center">Daily Income</span>
          <span className="text-center">Total Income</span>
        </div>

        {/* Section Divider */}
        <hr className="mb-3 border-gray-300" />

        {/* Table Rows */}
        {["Comprehensive", "Reserve", "Team", "Activity", "Stake"].map((category, index) => (
          <Category key={index} category={category} imgVal="https://image.treasurenft.xyz/coin/usdt.png" dailyIncome="0" totalIncome="0" />

        ))}
      </div>
    </div>
  )
}

export default Balance