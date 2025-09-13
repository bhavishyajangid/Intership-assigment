import { useState , useEffect } from 'react'
import './App.css'
 import { ToastContainer, toast } from 'react-toastify';
import Signup from './pages/auth/Signup'
import { useDispatch } from 'react-redux'
import { setCoutryCode } from './store/userSlice'
import Login from './pages/auth/Login';
import Home from './pages/Dashboard/Home/Home';
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
      <div className ="bg-pink-50 h-screen w-screen flex px-3 md:px-0 ">
{
  !loader && <Home/>
}
    <ToastContainer />
      </div>
    </>
  )
}

export default App
