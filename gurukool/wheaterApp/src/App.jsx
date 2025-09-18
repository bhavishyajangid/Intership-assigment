import { useState } from 'react'

import img from './assets/background.png'
import './App.css'
import SearchBox from './components/SearchBox'
import Forcast from './components/Forcast'
import Whether from './components/Whether'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen bg-cover bg-center flex justify-center items-center'
        style={{ backgroundImage: `url(${img})` }} >
         

    <div className="w-full max-w-3xl  min-h-52 rounded-2xl shadow-xl p-5">
      <SearchBox />
      <Whether />
      <Forcast />
    </div>



 

      </div>
    </>
  )
}

export default App
