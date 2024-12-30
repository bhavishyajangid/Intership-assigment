import React from 'react'
import parse from 'html-react-parser';
const NewPost = ({savedContent}) => {
  return (
    <div className=' m-auto h-96 bg-gray-200 mt-10 mx-5 rounded-lg p-5'>
        {/* // show all the  saved data  */}
        {parse(savedContent)}
    </div>
  )
}

export default NewPost