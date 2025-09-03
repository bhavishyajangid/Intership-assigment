
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <div className='w-screen max-h-screen flex justify-center items-center '>
        <div className='max-w-[450px] w-full max-h-screen h-screen bg-white border my-5 border-gray-200 reletive p-5'>
          <Outlet />
        </div>

      </div>
    </>
  )
}

export default App
