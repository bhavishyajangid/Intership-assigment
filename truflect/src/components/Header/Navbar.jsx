import React from 'react'
import { LuSearch } from "react-icons/lu";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import SearchBar from './SearchBar';
const Navbar = () => {
  return (
    <nav>
       <nav className='flex justify-between items-center sm:px-5 py-2 bg-gray-100  max-sm:px-5 '>
        <h1 className='font-pacifico text-3xl max-sm:text-2xl'>FoodFinds</h1>
        <div className='flex items-center gap-4'>
        <SearchBar className='max-sm:hidden'/>
        <span className='text-lg hidden max-sm:block'><LuSearch /></span>
        <MdOutlineQrCodeScanner className='text-2xl max-sm:text-xl' title='Search a product using barcode' />
        </div>
    </nav>
    </nav>
  )
}

export default Navbar