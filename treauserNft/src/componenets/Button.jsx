import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Button = ({img , tittle , tittleVal}) => {
  return (
   <button className="flex items-center border-2 border-solid border-gray-500 rounded-xl px-6 gap-1 text-xs py-0.5 max-[390px]:px-4  ">

   

    {
        img ? <img
        className="h-4 w-4"
        src={img}
        alt="img"
      /> 
      : <span>{tittleVal}</span>
    } 
               {tittle} 
               {
                img && <span>{tittleVal}</span>
               }
               <MdOutlineKeyboardArrowRight className="text-lg" />
    </button>
  )
}

export default Button