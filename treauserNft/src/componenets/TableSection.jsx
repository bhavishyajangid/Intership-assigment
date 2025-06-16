import React from 'react'
import { Link } from 'react-router';

const TableSection = ({item}) => {
 

  return (
    <Link to={`/${item.name}`}>
      
    <div className='flex flex-col items-center justify-center gap-1'>
      {
        typeof(item.val) === "string" ? <img className="h-5 w-5"
        src={item.val}
        /> : <p>{item.val}</p> 
      }
            
            <p className="text-xs text-gray-600 text-center">{item.name}</p>
    </div>
    </Link>
  )
}

export default TableSection