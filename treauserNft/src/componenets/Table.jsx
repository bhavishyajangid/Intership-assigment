import React from 'react'
import TableSection from './TableSection';
const Table = ({data}) => {
  return (

    <div className='px-5 mt-5'> 
      <div className="bg-white rounded-2xl shadow-lg p-5 w-full max-w-md">
        {/* Title Section */}
        <h2 className="text-lg font-semibold">{data.tittle}</h2>
        <hr className="my-3 border-gray-300" />

        {/* Stats Section */}
        <div className="grid grid-cols-4 ">
           { data.value &&
            data.value.map((item) => (
                <TableSection item={item}/>
            ))
           }
        </div>

        {/* Icons Section */}
        <div className="grid grid-cols-4 mt-5">
            {
                data.icons && 
                data.icons.map((item) => (
                  <TableSection item={item}/>
                ))
            }
          
        </div>
      </div>
      </div>
  )
}

export default Table