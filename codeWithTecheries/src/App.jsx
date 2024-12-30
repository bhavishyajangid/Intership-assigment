
import { useEffect, useRef } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";

function App() {
 
  
  return (
    <div  onMouseMove={(dets) => {handleCursor(dets)}} className="App">
       <span ref={cursor} className="w-2 h-2 rounded-full fixed bg-white z-10 max-md:hidden"></span>
      {/* <Navbar/> */}
      <HeroSection/>
      <Overview/>
    </div>
  )
}


export default App;
