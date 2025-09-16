import React from 'react'
import { IoCopy } from "react-icons/io5";
import { toast } from 'react-toastify';
const Message = ({item}) => {
     const formateDate = (date) => {
    return new Date(date).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleCopy = (text) => {
  
    
  navigator.clipboard.writeText(text).then(() => {
    toast.success("Copied to clipboard!")
  });

};

  return (
    <div
            onClick={() => handleCopy(item.text)}
            className={`px-3 py-1  group bg-gray-200 rounded-lg w-fit cursor-pointer ${
              item.sender === "user"
                ? "ml-auto bg-blue-200 text-right"
                : "bg-gray-200 text-left"
            }`}
          >



            <p>{item.text}</p>

            
            {item.image && (
              <img
                src={item.image}
                className="w-32 h-32 object-cover rounded-lg"
                alt=""
              />
            )}
        
        <div className='flex justify-between items-center'>

            <span className="text-xs text-gray-500">
              {formateDate(item.time)}
            </span>
            {item.text && <button
      
      className=" hidden group-hover:block items-center justify-center w-6 h-6 rounded-full  text-gray-600 cursor-pointer'"
      title="Copy"
    >
      <IoCopy />
    </button>}
        </div>
          </div>
  )
}

export default Message