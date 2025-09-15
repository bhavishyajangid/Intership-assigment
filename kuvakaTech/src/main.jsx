import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux'
import { store } from './store/index.js'
import Signup from './pages/auth/Signup.jsx'
import Login from './pages/auth/Login.jsx'
import Home from './pages/Dashboard/Home/Home.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

let router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>} >
          <Route index element ={<Signup/>}/>
          <Route path='/login' element ={<Login/>}/>
          <Route path='/home' element ={<Home/>}/>
        </Route>
    )
)

createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>

)
