import React from 'react'
import InputOrDate from '../../componenets/CommunityEnthCompo/InputOrDate'
import Dropdown from '../../componenets/Dropdown'

const CommunityOrders = () => {

  return (
    <div className='bg-white min-h-screen p-4'>
         <InputOrDate/>
         <div className='flex gap-3'>
          <Dropdown downOption={["All", "Seller", "Buyer"]} />
     <input type="text" className='w-full px-3 py-2.5 text-gray-700 border border-gray-300 rounded-xl text-sm 
             bg-clip-border outline-none' placeholder='Please enter your nickname'/>
    </div>
    
    <div className='flex items-center gap-2 mt-4'>
        <Dropdown className='w-full' downOption={["Price" , "Time"]}/>
        <img onClick={() => {changeVal()}} src="https://image.treasurenft.xyz/NewVer2212/btn/btn_sort_03.png" alt="" className='cursor-pointer' />
    </div>

    </div>
  )
}

export default CommunityOrders