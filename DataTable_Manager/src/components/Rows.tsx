import { memo, useEffect, useState } from 'react';
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import { handleHide } from '../store/AllData';
import type { RootState } from '../store/store';
import { getNewColumnVal } from '../utility/getNewColumnVal';



type props = {
  item : rowType,
  coloumLen : number
}

const Rows = ({item , coloumLen} : props) => {
  const dispatch = useDispatch()
  const [rowVal , setRowVal] = useState<string[]>([])
   const {additionalColumn} = useSelector((state : RootState) => state.allDataSlice)

   
   useEffect(() => {
      setRowVal(Object.values(item))
   }, [item])


   useEffect(() => {
     
    if(additionalColumn.length > 0){
      let valueArray = getNewColumnVal(item , additionalColumn)
      setRowVal(Object.values(valueArray))
    }
    
    }, [additionalColumn])


    const toggleHide = (id:rowType['id']) => {
        dispatch(handleHide(id))
    }


  return (
    <>
    <div
    className='grid gap-5 text-center py-4 text-gray-900 hover:bg-gray-300 transition cursor-pointer border-b border-gray-200'
      style={{gridTemplateColumns : `80px 60px repeat(${coloumLen-1} , minmax(0 , 1fr)) 60px`}}
    >
      
    <div>
            <input
             checked={item.hide}
             onChange={() => {toggleHide(item.id)}} type="checkbox" name="" id="" />
    </div>


          
         {
          !item.hide &&
          rowVal?.map((val , idx) => 
           typeof val !== 'boolean' &&
            <div key={idx}>{val}</div>  
          )
        }
         {
           !item.hide &&  
          <div className=' flex justify-center '><HiOutlineDotsVertical/></div>
         }
         
         
    </div>
    </>
  )
}

export default memo(Rows , (prev , next) => {
    return (
      prev.item.hide === next.item.hide &&
      prev.coloumLen === next.coloumLen &&
      JSON.stringify(prev.item) === JSON.stringify(next.item)
    )
}) 