import { useSelector } from "react-redux"
import type { RootState } from "../../store/index"
import KanbanCard from "./KanbanCard"

const KanbanBoard = () => {

  const {allCards} = useSelector((state:RootState) => state.allTaskSlice)
  

  return (
    // main container
    <div className='h-[calc(100vh-4rem)] p-5 flex gap-3'>
      {
        allCards.map((item) => (
          <KanbanCard key={item.id} item={item}/>
        ))
      }
      
    </div>
  )
}

export default KanbanBoard