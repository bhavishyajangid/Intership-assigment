import React, { memo } from 'react'
import { RxCross2 } from "react-icons/rx";
import { IoMdSend } from "react-icons/io";
const ImagePreview = ({image , setImage , setFile}) => {
  return (
    <>
    <div className="p-2 absolute right-10 top-0  ">
        <img
          src={image}
          alt="preview"
          className="w-20 h-20 object-cover rounded-lg border"
          />
        <button
          className="bg-black text-white p-1 rounded-full absolute top-2 right-3 text-sm mt-1 cursor-pointer"
          onClick={() => {setImage(null) , setFile(null)}}
        >
          <RxCross2 />
        </button>
      </div>
      
          </>
  )
}

export default memo(ImagePreview) 