import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './pages/Home/components/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='max-w-[1440px] mx-auto px-[53px] max-md:px-[30px]'>

      <Navbar/>
      <HeroSection/>
    </div>
    </>
  )
}

export default App
