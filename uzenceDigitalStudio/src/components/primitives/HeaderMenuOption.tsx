import { useDispatch } from "react-redux"
import { setDeleteCard } from "../../store/allTask"
import Option from "./Option"
import { HiDotsVertical } from "react-icons/hi";
import { useState } from "react";
type idType = {
    id : kanbanCard['id'],
   setUpdateCard : React.Dispatch<React.SetStateAction<updateCardType>>
}

const HeaderOption = ({id , setUpdateCard}:idType) => {
    const dispatch = useDispatch()
    const [option , setOption] = useState<boolean>(false)


  const  handleUpdateCard = (id : kanbanCard['id'] , label: string):void => {
       setUpdateCard({
        id,
        field  : label,
        show : true
       })

       setOption(prev => !prev)
    }
    
    const HandleDelete = (id: kanbanCard['id']) => {
         dispatch(setDeleteCard(id))
    }

  
    
let headerOption = [
        {  
            id : id,
            label : 'Rename',
            className : 'text-gray-500',
            handleOption : handleUpdateCard
        },{
           id : id,
            label : 'set WIP limit',
            className : 'text-gray-500',
            handleOption : handleUpdateCard
        },{
           id : id,
            label : 'Delete',
            className : 'text-red-500',
            handleOption : HandleDelete
        }
    ]
  return (
    <div>
        <HiDotsVertical onClick={() => setOption(prev => !prev)}  className='text-xl text-gray-500 cursor-pointer' title='menu' />

      <ol className='max-w-28 w-full flex flex-col border border-gray-300 rounded-md text-sm capitalize absolute top-14 bg-white right-0 z-10'>
        { option && 
            headerOption.map((opt , i) => (
                <Option key={i} option={opt} /> 
            ))
        }
       </ol>
        </div>
  )
}

export default HeaderOption