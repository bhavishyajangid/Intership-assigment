import React, { useRef } from 'react'
import { CiSquarePlus } from "react-icons/ci";
import KanbanColumn from './KanbanColumn';
import { HiDotsVertical } from "react-icons/hi";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { IoAddOutline } from "react-icons/io5";
import {useState} from 'react';
const KanbanBoard = () => {

  const [option , setOption] = useState<Boolean>(false)
  const [colapse , setColapse] = useState<Boolean>(false)

  return (
    // main container
    <div className='h-[calc(100vh-4rem)] p-5 flex gap-3'>


         {/* // todo container */}
      <div className={`max-w-[320px] w-full min-w-[220px] rounded-md shadow-md overflow-hidden border border-green-500 relative z-0 ${colapse && ''} `}>
        

         {/* Add task btn */}
         {/* {
          colapse &&
        <div className='bg-purple-500 w-10 h-10 rounded-full flex items-center justify-center absolute right-5 bottom-5 z-10 cursor-pointer'>
        <IoAddOutline className='text-white text-2xl font-extrabold' />
        </div>
         } */}

           {/* option menu */}
           {
            option && 
       <ol className='max-w-28 w-full flex flex-col border border-gray-300 rounded-md text-sm capitalize absolute top-14 bg-white right-0 z-10'>
        <li className='hover:bg-gray-200 cursor-pointer border-gray-300  text-gray-500 hover:text-gray-900 px-2 py-1'>Rename</li>
        <li className='hover:bg-gray-200 cursor-pointer border-gray-300  text-gray-500 hover:text-gray-900 px-2 py-1'>set WIP Limit</li>
        <li className='hover:bg-gray-200 cursor-pointer border-gray-300  text-red-500  px-2 py-1'>Delete</li>
       </ol>
           }

           {/* column header  */}
        <div className='p-3  flex justify-between items-center border-b border-gray-200'>
          <div className='flex gap-2 items-center'>
          <h1 className=' text-green-500 text-lg  font-bold'>Todo-List</h1>
          <p className='text-sm text-gray-500'>(<span className='text-orange-500'>5</span>/8)</p>
          </div>

           
          <div className='flex items-center gap-1'>
            <MdOutlineArrowForwardIos  onClick={() => setColapse(prev => !prev)} className={`text-sm text-gray-500 cursor-pointer transition-transform duration-300 ${colapse ? 'rotate-90' : 'rotate-0'}`} />  
            <HiDotsVertical onClick={()=>setOption(prev => !prev)} className='text-xl text-gray-500 cursor-pointer' title='menu' />
          </div>
        </div>




        {/* Scrollable Red Section */}



        <div className={`max-h-[450px]  bg-gray-100 p-3 flex flex-col gap-3 overflow-y-auto hide-scrollbar  transition-all duration-500 ease-in-out ${colapse ? "max-h-0 hidden" :  "max-h-[450px] block"}`}>

          

            <KanbanColumn/>
            <KanbanColumn/>
            <KanbanColumn/>
            <KanbanColumn/>
        </div>

        





      </div>


    </div>
  )
}

export default KanbanBoard