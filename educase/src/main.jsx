import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Setting from './pages/Setting.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element = {<App/>}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/setting" element={<Setting/>} />
      </Route>
   )
)

createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />
)
