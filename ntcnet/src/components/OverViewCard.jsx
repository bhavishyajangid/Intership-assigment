import React from 'react'

const OverViewCard = ({title , value , overview}) => {
  return (
    <div className= {` rounded-xl p-4  cursor-pointer flex justify-between ${overview !== "Income OverView" ? " bg-[linear-gradient(to_right,_#66666636_0%,_#66666612_50%,_#66666600_100%)]" : "flex justify-between border-b border-gray-500 "} `}>
        <p className="text-sm text-gray-400">{title}</p>
        <p className="text-white text-sm">{value}</p>
      </div>
  )
}

export default OverViewCard