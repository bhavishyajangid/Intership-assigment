import React from 'react'
import { Link } from 'react-router-dom'

const NavbarLanding = () => {
  return (
     <nav className="w-full h-20  bg-black px-5 flex justify-between items-center  ">
          <img src="/logo.png" alt="Tangam" className="h-auto w-28" />

          <div className="flex items-center gap-3">
            <Link to='/dashboard'>
            <button className="bg-[linear-gradient(to_right,_#66ccffb3,_#09f)] text-white px-5 py-1.5 font-semibold rounded-lg">
              Launch Wallet
            </button>
            </Link>
          </div>
        </nav>
  )
}

export default NavbarLanding