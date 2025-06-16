import React from 'react'

const CardHeading = ({title}) => {
  return (
    <>
   <h2 className="text-white text-xl font-bold mb-2">{title}</h2>
      <hr className="border-[#00D1B2] w-20 mb-4" />
      </>
  )
}

export default CardHeading