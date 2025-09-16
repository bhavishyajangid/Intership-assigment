import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router';
import './App.css';
import { setCoutryCode, setUser } from './store/userSlice';
import Loader from './components/Loader';
function App() {
  const [loader , setLoader] = useState(true)
  const dispatch  = useDispatch()


  useEffect(() => {
let user = JSON.parse(localStorage.getItem("currentUser"));
          if (user) dispatch(setUser(user));
   setLoader(false)
  } , [])

  

 if(loader)return <Loader/>

  return (
    <>
      <div className ="bg-pink-50 h-screen w-screen flex px-3 md:px-0 ">
      <Outlet/>
      </div>
    </>
  )
}

export default App
