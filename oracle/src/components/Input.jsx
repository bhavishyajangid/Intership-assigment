import React from 'react'

// transfer this input data using forward ref
const Input = React.forwardRef(function({
        placeholder ,
        type , 
        lable , 
        className="w-56 h-8 rounded-lg px-2 text-sm outline-none" ,
        ...props 
        } , ref){
  return (
    <>
    <div className='flex items-center justify-between'>
        {
            lable &&
        <label className='text-white font-medium' htmlFor={lable}>{lable}</label>
        }
        <input ref={ref} className={className} type={type} placeholder={placeholder} {...props} id={lable} />
    </div>
 </>
  )
})

export default Input