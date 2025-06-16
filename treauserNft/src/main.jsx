import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Home from './pages/Dashboard/Home/Home.jsx'
const  CommunityEnthu = lazy(() => import('./pages/MyTeamPages/CommunityEnthu.jsx')) 
const  CommunityContri = lazy(() => import('./pages/MyTeamPages/CommunityContri.jsx')) 
const  CommunityOrders = lazy(() => import('./pages/MyTeamPages/CommunityOrders.jsx')) 
const  Referral = lazy(() => import('./pages/MyTeamPages/Referral.jsx')) 
const  Nfts= lazy(() => import('./pages/MyOrdersPages/Nfts.jsx'))
const  Deposit= lazy(() => import('./pages/MyOrdersPages/Deposite.jsx')) 
const  Details= lazy(() => import('./pages/MyOrdersPages/Details.jsx')) 
const  Tutorials= lazy(() => import('./pages/CommonFuncation/Tutorials.jsx')) 
const  Settings= lazy(() => import('./pages/CommonFuncation/Settings.jsx')) 


const router = createBrowserRouter(
   createRoutesFromElements(
     <Route path='/' element={<App/>}>
       <Route path='' element={<Home/>}/>
       <Route path='/Community enthusiasts' element={<CommunityEnthu/>} />
       <Route path='/Community contributions' element={<CommunityContri/>} />
       <Route path='/Community orders' element={<CommunityOrders/>} />
       <Route path='/Referral' element={<Referral/>} />
       <Route path='/Deposit' element={<Deposit/>} />
       <Route path='/Details' element={<Details/>} />
       <Route path='/Tutorials' element={<Tutorials/>} />
       <Route path='/Settings' element={<Settings/>} />
       <Route path='/NFTs' element={<Nfts/>} />

     </Route>
   )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
)
