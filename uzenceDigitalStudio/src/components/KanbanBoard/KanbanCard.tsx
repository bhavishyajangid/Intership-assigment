
import { useState } from 'react';
import { HiDotsVertical } from "react-icons/hi";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Option from '../primitives/Option';
import KanbanColumn from './KanbanColumn';
import { IoAddOutline } from "react-icons/io5";
import HeaderOption from '../primitives/HeaderOption';
import { useDispatch } from 'react-redux';
import { updateCardTitle } from '../../store/allTask';
type itemType = {
    item : kanbanCard
}

const KanbanCard = ({item} : itemType) => {
    
    
    const dispatch = useDispatch()
    const [option , setOption] = useState<boolean>(false)
    const [colapse , setColapse] = useState<boolean>(false)
    const [inputvalTitle , setInputValTitle] = useState<string | number>(item.title)
    // const [inputvalMaxTask , setInputValMaxTask] = useState<number>(item.maxTasks || 0)

    const [updateCard , setUpdateCard] = useState<updateCardType>(
        {
            id : null,
            show : false,
            field : ''
        },
    )


    const handleUpdateCard = (id: number , label : string):void => {
        console.log(id , label);
        
         setUpdateCard({
            id,
            field : label,
            show : !updateCard.show
         })
       
         setOption(prev => !prev)
    }

        
    const handleUpdateTitle = (e : React.KeyboardEvent<HTMLTextAreaElement>):void => {
         if(e.key === 'Enter'){
          let obj = {
            ...updateCard,
            value : inputvalTitle
          }

             dispatch(updateCardTitle(obj))
             setUpdateCard({id : null , field : "" , show : false ,})
         }
    }


  return (
    <>
   <div className={`max-w-[320px] w-full min-w-[220px] rounded-md shadow-md overflow-hidden  relative z-0 border ${colapse && ''} `} style={{borderColor : item.color}}>
        

         {/* Add task btn */}
         {
          !colapse &&
        <div className='bg-purple-500 w-10 h-10 rounded-full flex items-center justify-center absolute right-5 bottom-5 z-10 cursor-pointer'>
        <IoAddOutline className='text-white text-2xl font-extrabold' />
        </div>
         }

           {/* option menu */}
           {
            option && 
             <HeaderOption id={item.id} handleRename={handleUpdateCard} 
             handleSetWip = {handleUpdateCard}
             />
           }

           {/* column header  */}
        <div className='p-3  flex justify-between items-center border-b border-gray-200'>
          <div className='flex gap-2 items-center'>
            {
                (updateCard.show && updateCard.field === 'Rename') ? <textarea onKeyDown={(e) => handleUpdateTitle(e)} value={inputvalTitle} onChange={(e) => setInputValTitle(e.target.value)} className=' border border-black w-28 h-10'></textarea> :  <h1 className='  text-lg  font-bold' style={{color : item.color}}>{item.title} </h1>
            }
            
          {
            item.maxTasks &&  
          <p className='text-sm text-gray-500'>(<span className='text-orange-500'>5</span>/{item.maxTasks})</p>
          }
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
        </>
  )
}

export default KanbanCard