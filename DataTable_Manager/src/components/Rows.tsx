import React from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";

type itemtype ={
     id : number | string,
     name : string,
     email : string,
     age : number |string,
     role : string,
     hide : boolean
}

type props ={
  item : itemtype,
  coloumLen : number
}

const Rows = ({item , coloumLen} : props) => {
  return (
    <>
    <div
    className='grid text-center py-4 text-gray-900 hover:bg-gray-300 transition cursor-pointer border-b border-gray-200'
      style={{gridTemplateColumns : `80px 60px repeat(${coloumLen - 2} , minmax(0 , 1fr))`}}
    >
    <div>
            <input type="checkbox" name="" id="" />
    </div>
          <div>{item.id}</div>
          <div>{item.name}</div>
          <div>{item.email}</div>
          <div>{item.age}</div>
          <div>{item.role}</div>
          <div className='flex justify-center'><HiOutlineDotsVertical/></div>
    </div>
    </>
  )
}

export default Rows