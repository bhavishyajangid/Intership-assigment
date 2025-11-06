import React from 'react'

const TableRows = () => {
    let tableHeaderField = ['Title' , 'Place_of_Origin' , "Artist_Display" ,'Inscriptions', "Date_Start" , 'Date_End' ]
  return (
     <div>
         
            <input type="checkbox" name="" id="" />

         {
            tableHeaderField.map((item) => (
                <span>{item}</span>
            ))
         }
            
     </div>
  )
}

export default TableRows