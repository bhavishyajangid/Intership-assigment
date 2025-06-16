import React from 'react'

const OverViewCard = ({title , value , overview}) => {
  return (
    <div className= {` rounded-xl px-4 py-3 max-sm:py-2 ${overview !== "Income OverView" ? "bg-primary" : "flex justify-between border-b border-gray-500"} `}>
        <p className="text-sm text-gray-400">{title}</p>
        <p className="text-white text-[15px]">{value}</p>
      </div>
  )
}

export default OverViewCard