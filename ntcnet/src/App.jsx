import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Card from './components/MiniCard'
import Referral from './components/Referral'
import ProfileOverview from './components/Overview'
import IncomeReport from './components/IncomeReport'
import { Import } from 'lucide-react'
import Main from './components/Main'
import { useState } from 'react'
const App = () => {
  const [isOpen , setIsOpen] = useState(false)
  console.log(isOpen);
  
  return (
     <div className="bg-primary text-white h-screen px-5 max-sm:px-4">
        <Header setIsOpen={setIsOpen}/>
        <div className='flex w-full h-[89vh] py-3 '>
              <Sidebar isOpen={isOpen} />
              <div className='w-full overflow-y-auto scrollbar-hide'>
               <Main/>
         </div>
        </div>
       
      </div>
  )
}

export default App