import React, { memo } from 'react'
import { useForm } from "react-hook-form";
import Input from '../components/Input';
import Button from '../components/Button';
const CreateRoom = ({onsubmit}) => {
      const {
          register,
          handleSubmit,
          watch,
          reset,
          formState: { errors },
        } = useForm();
  return (
   <form  onSubmit={handleSubmit(onsubmit)}>
            {
              errors.title?.message &&  <p className=" ml-5 mb-2 text-red-500 text-xs mt-1">{ errors.title?.message}</p>
            }
           
              <Input   placeholder={'Tittle'} 
              {...register("title", 
              { required: "Title is required" })}
              />
              <Button  label={'Create'} className='w-full mt-2' />
          </form>
  )
}

export default memo(CreateRoom) 