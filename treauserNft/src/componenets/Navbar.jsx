import { useState } from "react";
import { FaRegBell } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { Link } from 'react-router';
import Sidebar from './Sidebar';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div className='w-full h-14  p-4 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-[2px] border-b-[1px] border-solid border-gray-200 z-10 '>
        <Link to="/">
      <img className='max-w-36' src="/treasurelogo.webp" alt="djkh" />
        </Link>
      <div className='flex items-center gap-2'>
      <div className='flex relative'>
      <FaRegBell className='text-2xl' />
      <span className='bg-red-500 h-2 w-2 absolute -top-1 -right-1 rounded-full'></span>
      </div>
      <span className='underline text-md  bg-gradient-to-r from-sky-400 via-green-400 to-amber-500 text-transparent bg-clip-text'>Airdrop</span>
      <IoIosMenu onClick={() => {setIsOpen(!isOpen)}} className=' cursor-pointer text-3xl text-gray-600' />
      </div>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
      </>
  )
}

export default Navbar