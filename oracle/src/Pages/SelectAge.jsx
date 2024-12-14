import React, { useState } from 'react'
import Option from '../components/Option';

const SelectAge = ({register}) => {
    // heres we receive register para to handle this comp
    const ageArray = Array.from({ length: 100 }, (_, index) => index + 1);
  return (
    
    <div className='flex items-center justify-between'>
        <label htmlFor="" className='text-white font-medium e'>Age : </label>
        <select  {...register("age", {
          required: "Age is required", 
        })} className='w-56 h-8 rounded-md px-2 outline-none border-non text-sm '>
            <option value="" disabled selected>Select your age</option>
            {ageArray.map((ageValue) => (
              <Option key={ageValue} age={ageValue}></Option>
            ))}
        </select>
    </div>
  )
}

export default SelectAge