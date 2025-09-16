import React, { memo } from 'react'

const Button = ({type , label , className = '' ,  ...props}) => {
  return (
    <button
      type='submit'
     className={`px-5 py-1 cursor-pointer  rounded-2xl text-lg font-semibold bg-blue-500 text-white ${className} `}
     {...props}
    >{label}</button>
  )
}

export default memo(Button) 