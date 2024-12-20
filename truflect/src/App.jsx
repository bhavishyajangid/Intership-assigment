
import './App.css'
import { Navbar , Home, } from '../exports'
import { useEffect } from 'react';

function App() {
  // useEffect(() => {

  //   const response = fetch(`https://world.openfoodfacts.org/api/v0/product/${4099200191041}.json`);
  //         // const resp =a response.text()
  //         // const res = JSON.parse(resp)
  //         // const res =  response.json()
          
  //         console.log(response ,'respose' );
  // } , [])
  return (
    <>
      <Navbar/>
      <Home/>
    </>
  )
}

export default App
