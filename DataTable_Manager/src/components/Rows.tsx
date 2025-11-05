import React, { useEffect, useState } from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import type { RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getNewColumnVal } from '../utility/getNewColumnVal';
import { setAdditionalColumn } from '../store/AllData';



type props ={
  item : rowType,
  coloumLen : number
}

const Rows = ({item , coloumLen} : props) => {
 const dispatch = useDispatch()
  const [rowVal , setRowVal] = useState<string[]>(Object.values(item))

  console.log(rowVal);
  
   const {additionalColumn} = useSelector((state : RootState) => state.allDataSlice)

   useEffect(() => {
     
    if(additionalColumn.length > 0){
      let valueArray = getNewColumnVal(item , additionalColumn)
      setRowVal(Object.values(valueArray))
    }
    
    }, [additionalColumn])

    rowVal.map((val) => {
      console.log(val);
      
    })

  return (
    <>
    <div
    className='grid gap-5 text-center py-4 text-gray-900 hover:bg-gray-300 transition cursor-pointer border-b border-gray-200'
      style={{gridTemplateColumns : `80px 60px repeat(${coloumLen-1} , minmax(0 , 1fr)) 60px`}}
    >
    <div>
            <input type="checkbox" name="" id="" />
    </div>


          
         {
          rowVal?.map((val , idx) => 
           typeof val !== 'boolean' &&
            <div key={idx}>{val}</div>  
          )
         }
         <div className=' flex justify-center '><HiOutlineDotsVertical/></div>
    </div>
    </>
  )
}

export default Rows