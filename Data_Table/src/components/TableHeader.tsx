import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
const TableHeader = () => {
    let tableHeaderField = ['Title' , 'Place_of_Origin' , "Artist_Display" ,'Inscriptions', "Date_Start" , 'Date_End' ]
  return (
    <div className='py-5 bg-gray-300 px-4 grid'
    style={{
          gridTemplateColumns: `80px repeat(${
           6
          } , minmax(0 , 1fr))`,
        }}
    >

        {/* // checkbox  */}
        <div className='flex gap-2 items-center' >
            <input type="checkbox" name="chekbox" id="" />
            <MdKeyboardArrowDown  className='text-gray-700'/>
        </div>


       {/* tableHeaderField */}
        {
            tableHeaderField.map((item ,idx) => (
                <span key={idx} className='text-sm font-medium text-gray-700'>{item}</span>
            ))
        }

    </div>
  )
}

export default TableHeader