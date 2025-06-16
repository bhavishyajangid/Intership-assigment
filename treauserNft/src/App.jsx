
import './App.css'
import Home from '../src/pages/Dashboard/Home/Home'
import Navbar from './componenets/Navbar'
import { Outlet } from 'react-router'
import Sidebar from './componenets/Sidebar'
import { useState } from 'react'
function App() {
 
  return (
    <>
    <div className='max-w-[450px] min-h-screen  m-auto gradient-background '>
       <Navbar/>
       <Outlet/>
    </div>
    </>
  )
}

export default App
