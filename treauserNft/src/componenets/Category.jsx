import React from 'react'

const Category = ({category , imgVal , dailyIncome , totalIncome}) => {
  return (
    <div className="grid grid-cols-3 text-gray-700 py-3 text-sm">
            <span>{category}</span>
            <div className="flex items-center justify-center gap-0.5">
              <img src={imgVal}alt="USDT" className="w-3 h-3 mr-1" />
              <span>{dailyIncome}</span>
            </div>
            <div className="flex items-center justify-center gap-0.5">
              <img src={imgVal}alt="USDT" className="w-3 h-3 mr-1" />
              <span>{totalIncome}</span>
            </div>
    </div>
  )
}

export default Category