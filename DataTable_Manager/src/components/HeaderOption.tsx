import React from 'react'
import { CiImport, CiExport } from "react-icons/ci";
import { IoAddOutline } from "react-icons/io5";
const HeaderOption = () => {


    const handleImport = () => {

    }
    const handleExport = () => {
        
    }
    const handleAdd = () => {
        
    }

  let option = [
    {
        label : 'Import',
        icons : <CiImport />,
        handleOption : handleImport
    }, {
        label : 'Export',
        icons : <CiExport /> ,
        handleOption : handleExport
    }, {
        label : 'Add',
        icons : <IoAddOutline />,
        handleOption : handleAdd
    },
  ]

  return (
   <div className="p-5 flex justify-between items-center">
        <input
          className="w-60 h-9 border outline-none border-black bg-white px-5 rounded-3xl "
          type="text"
          placeholder="Search"
        />

        <div className="flex gap-4">
           {
             option.map((item) => (
                <div
                key={item.label}
                onClick={item.handleOption}
                 className="bg-gray-600 px-5 py-2 rounded-md text-white font-medium flex items-center gap-2 h-10">
                {item.label}{item.icons}
              </div>
             ))
           }
        </div>
      </div>
  )
}

export default HeaderOption