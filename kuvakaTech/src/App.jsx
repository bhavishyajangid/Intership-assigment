import { useState , useEffect } from 'react'
import './App.css'
import {Button} from '@mui/material'
import Signup from './pages/auth/Signup'
import { useDispatch } from 'react-redux'
import { setCoutryCode } from './store/userSlice'
function App() {
  const [loader , setLoader] = useState(true)
  const dispatch  = useDispatch()


  useEffect(() => {
    const fetchCountryCode = async() => {
      try {
         const  result = await fetch('https://restcountries.com/v3.1/all?fields=name,cca3,idd')
         const res = await result.json()
         dispatch(setCoutryCode(res || []))
      } catch (error) {
          console.log(error);
      }finally{
        setLoader(false)
      }
    }

    fetchCountryCode()
  } , [])




  return (
    <>
      <div className ="bg-pink-50 h-screen w-screen flex px-3 ">
{
  !loader && <Signup/>
}
    
      </div>
    </>
  )
}

export default App
