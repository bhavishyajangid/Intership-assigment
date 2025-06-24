import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements , Route, RouterProvider } from 'react-router-dom'
import {Team , Home , UserDashboard , Dashboard , Referral , Invest , Report, Withdraw} from './exports.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Home/>}/>

      <Route  element={<UserDashboard/>}>
      <Route path='/dashboard' element={<Dashboard/>}/> 
      <Route path='/team' element={<Team/>}/>
      <Route path='/Referral' element={<Referral/>}/>
      <Route path='/invest' element={<Invest/>}/>
      <Route path='/report' element={<Report/>}/>
      <Route path='/withdraw' element={<Withdraw/>}/>

      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(

  

  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
