import React, { useEffect, useRef } from 'react'
import ChatRoomBox from '../../components/ChatRoomBox'
import { useState } from 'react';
import { IoMdSend } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import Input from '../../components/Input';
import Button from '../../components/Button';
import { toast } from 'react-toastify';
import { RxCross2 } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { setUserUpdate } from '../../store/userSlice';
import CreateRoom from '../../components/CreateRoom';
const ChatRooms = () => {
  const dispatch = useDispatch()
  const {currentUser} = useSelector(state => state.userSlice)
  const [createRoom , setCreateRoom] = useState(false)
  const [value , setValue] = useState('')
  const [filterRooms , setFilterRooms] = useState(currentUser?.chatRooms || [])
  const [searchBarOpen , setSearchBarOpen] = useState(false)
  const idTake = useRef(2)
   const {
      register,
      handleSubmit,
      watch,
      reset,
      formState: { errors },
    } = useForm();

    const onsubmit = (data) => {
          console.log(idTake);
          let obj = {
             ...data , 
             id: idTake.current ,
             lastMessage : "Hi",
             updatedAt : new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
             messages : []
          }
          
          let users = JSON.parse(localStorage.getItem('users'))
           let loginUser = JSON.parse(localStorage.getItem('currentUser'))

            const updatedChatRooms = [...(loginUser.chatRooms || []), obj];
           const updatedUser = { ...loginUser, chatRooms: updatedChatRooms };

          let idx = users.findIndex(u => u.id == currentUser.id)

          if(idx !== -1){
             users[idx] = updatedUser
          }else{
            toast.error('user not found')
    }

          localStorage.setItem('users' , JSON.stringify(users))
          
          localStorage.setItem('currentUser' , JSON.stringify(updatedUser))
       
          dispatch(setUserUpdate(updatedUser))
          idTake.current += 1
          setCreateRoom(false)
          reset()
    }


    useEffect(() => {
      const handler = setTimeout(() => {
      if (!value.trim()) {
        setFilterRooms(currentUser?.chatRooms || []);
      } else {
        setFilterRooms(
          currentUser?.chatRooms?.filter((room) =>
            room.title?.toLowerCase().includes(value.toLowerCase())
          ) || []
        );
      }
    }, 400);
  

       return () => clearTimeout(handler)
    }, [value , currentUser])
    
  
    useEffect(() => {
       setFilterRooms(currentUser?.chatRooms || [])
    }, [currentUser])

  return (

    <div className="w-full md:w-[600px] md:min-w-[300px]  h-full p-3  border-r border-gray-300">
        <div className="flex justify-end items-center h-16 gap-3 ">
         <span onClick={() => {
          setSearchBarOpen(!searchBarOpen); 
           setCreateRoom(false);
           setValue('')
           }} className='px-5 cursor-pointer  py-2.5 rounded-2xl bg-purple-400 text-xl'><FiSearch /></span>
          
           <button
          onClick={() => {setCreateRoom(!createRoom) ;setSearchBarOpen(false);
          setValue('')}}
            className=" py-2 px-7 text-white font-medium cursor-pointer  rounded-2xl bg-purple-400">
            Create
          </button>
        </div>

           {
               searchBarOpen && 
             <Input type={'text'} placeholder={'Search Rooms'} value={value} onChange={(e) => {setValue(e.target.value)}}/>
           }

        {
          createRoom && 
          <CreateRoom onsubmit={onsubmit}/>
        }

        <h1 className="font-medium text-center mb-2 mt-3">Active Chat Room</h1>

        <div className="flex flex-col gap-3 max-h-[82vh] overflow-y-scroll scrollbar-hide">
          {filterRooms?.map((item) => (
            <ChatRoomBox
              key={item.id}
              item={item}
            />
          ))}

           {filterRooms?.length === 0 && (
          <p className="text-gray-400 text-sm text-center mt-3">
            No chatrooms found
          </p>
        )}
        </div>
      </div>
  )
}

export default ChatRooms