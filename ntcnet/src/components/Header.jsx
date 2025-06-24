 import { useState } from 'react';
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
export default function Header({setIsOpen}) {
   
  return (
  <header className="flex justify-between items-center px-4 max-sm:px-3 py-4  border-b border-[#2D3748] sticky top-0 bg-[#0F1116] z-10">
        <Link to="/">
        <img src={Logo} className="h-7 w-auto max-sm:h-5" alt="logo" />
        </Link>
      <div className="flex items-center gap-3">
      {/* <button  className="text-sm font-medium px-4 py-2 max-sm:hidden border border-cyan text-cyan rounded-md hover:bg-cyan hover:text-black transition">
        Disconnect
      </button> */}

      <input onClick={() => {setIsOpen(prev => !prev)}} type="checkbox" role="button" aria-label="Display the menu" className='menu max-sm:block '></input>
        
      </div>
      
    </header>
  );
}