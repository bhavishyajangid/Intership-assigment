import { useState } from 'react'

import './App.css'
import Header from './components/KanbanBoard/Header'
import KanbanBoard from './components/KanbanBoard/KanbanBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <KanbanBoard/>
    </>
  )
}

export default App
