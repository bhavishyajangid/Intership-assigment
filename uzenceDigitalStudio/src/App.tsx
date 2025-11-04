import type { DragEndEvent } from '@dnd-kit/core'
import { closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core'
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import Header from './components/KanbanBoard/Header'
import KanbanBoard from './components/KanbanBoard/KanbanBoard'
import type { RootState } from './store'

function App() {
  
  const {allCards} = useSelector((state : RootState) => state.allTaskSlice)

  const [card , setCard] = useState<kanbanCard[]>(allCards)


  useEffect(() => {
     setCard(allCards)
  }, [allCards])


  const getTaskPos = (id:kanbanCard['id'] , item : kanbanCard[] | kanbanTaskColumn[]) => {
     return  item.findIndex((item) => item.id === id)
       
  }

  const handleDragEnd = (event : DragEndEvent) => {
    const {active , over} = event

    const activeType = active.data.current?.type
    const overType = over?.data.current?.type
    const activeCardIndex = active.data.current?.cardIndex
    const overCardIndex = over?.data.current?.cardIndex

    if(!over || active.id === over.id) return

    if(activeType === 'task' || overType === 'task'){
        setCard(card => {
           const originalPos = getTaskPos(active.id , card[activeCardIndex].taskIds)
           const newPos = getTaskPos(over.id , card[overCardIndex].taskIds)
           return arrayMove(card[overCardIndex].taskIds ,originalPos , newPos)
        })
    }else{
      setCard(card => {
        const originalPos = getTaskPos(active.id , card)
        const newPos = getTaskPos(over.id , card)
        return arrayMove(card , originalPos , newPos)
      })
      
    }

  }

   const sensors = useSensors(
       useSensor(PointerSensor , {
        activationConstraint : {
          distance : 8
        }
       }),
       useSensor(TouchSensor),
       useSensor(KeyboardSensor , {
         coordinateGetter : sortableKeyboardCoordinates
       })
   )


  return (
    <>
    <Header/>
    <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
    <KanbanBoard card={card} />
    </DndContext>
    </>
  )
}

export default App
