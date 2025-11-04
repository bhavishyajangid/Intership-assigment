import { horizontalListSortingStrategy, SortableContext } from "@dnd-kit/sortable"
import KanbanCard from "./KanbanCard"


type props = {
  card : kanbanCard[]
}
const KanbanBoard = ({card} : props) => {
  return (
    // main container
    <div className='h-[calc(100vh-4rem)] max-h-screen p-5 flex gap-3'>
      <SortableContext items={card} strategy={horizontalListSortingStrategy}>

      {
        card.map((item) => (
          <KanbanCard key={item.id} item={item}/>
        ))
      }
      </SortableContext>
      
    </div>
  )
}

export default KanbanBoard