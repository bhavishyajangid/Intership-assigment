import React from 'react'
import { AiFillDelete } from "react-icons/ai";
const ChatRoomBox = ({item , selectedId , setSelectedId}) => {

  return (
     <div
     onClick={() => {setSelectedId(item.id)}} className={`p-3 border border-gray-300 rounded-lg cursor-pointer  ${selectedId == item.id && 'shadow-lg  scale-105 z-10 bg-blue-100'} `}>
                <div className='flex justify-between'>
               <span className='text-[clamp(1rem,1.3vw,4rem)] font-semibold'>{item.title}</span>
               <span className='text-sm font-semibold text-green-400'>active</span>
                </div>
               <p className='text-sm text-gray-400'>{item.lastMessage}</p>
               <div className='flex items-center justify-between'>
               <span className='text-xs text-gray-500 font-medium'>{item.updatedAt}</span>
               <AiFillDelete  className='text-md text-red-400'/>
               </div>
            </div>
  )
}

export default ChatRoomBox