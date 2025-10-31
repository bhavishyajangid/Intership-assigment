import { useSelector } from "react-redux"
import KanbanCard from "./KanbanCard"
import allTaskSlice from "../../store/allTask"
import type {RootState}  from "../../store/index"

const KanbanBoard = () => {

  const {allCards} = useSelector((state:RootState) => state.allTaskSlice)

  return (
    // main container
    <div className='h-[calc(100vh-4rem)] p-5 flex gap-3'>

      {
        allCards.map((item , i) => (
          <KanbanCard key={item.id} item={item}/>
        ))
      }
         {/* <KanbanCard/>
         <KanbanCard/>
         <KanbanCard/> */}
    </div>
  )
}

export default KanbanBoard