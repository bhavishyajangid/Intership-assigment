import React, { useEffect, useRef, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import Input from "../../../components/Input";
import { CiMicrophoneOn } from "react-icons/ci";
import { IoMdSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import userSlice, { addMessage, setUser } from "../../../store/userSlice";
import { toast } from "react-toastify";
const ChatBox = () => {
  const dispatch = useDispatch()
  const {currentUser} = useSelector(state => state.userSlice)
  const {selectedRoom } = useSelector(state => state.chatSlice)
  const [message, setMessage] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [image , setImage] = useState(null)
  const [file , setFile]  = useState(null)
  const inputRef = useRef(null);
  const bottomRef = useRef(null); 

  const aiReplies = [
    "🤔 Let me think about that...",
    "That's an interesting question!",
    "Here’s what I found for you 🚀",
    "Good point! Let me explain.",
    "I’ll need a second... okay, done ✅",
    "Wow, that’s deep! Let’s dive in 🧠",
  ];

  
  const handleFileChange = (e) => {
    const file = e.target.file[0]

    if(!file) return 

    setFile(file)
    setImage(URL.createObjectURL(file))
  }
  
 useEffect(() => {

  if (selectedRoom >= 0 && currentUser?.chatRooms?.[selectedRoom]) {
    setMessage([...currentUser.chatRooms[selectedRoom]?.messages] || []);
  }
}, [selectedRoom, currentUser]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const formateDate = (date) => {
     return  new Date(date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const handleSend = async() => {
    if (!inputRef.current.value.trim()) return;
   



    const userMessage = {
      sender: "user",
      text: inputRef.current.value || "",
      time: new Date().toISOString(),
    };
 console.log(currentUser , currentUser.chatRooms[selectedRoom]);
 
    

    setMessage((prev) => [...prev, userMessage]);
    inputRef.current.value = "";
    handleInput();
    setIsTyping(true);

    const delay = Math.floor(Math.random() * 3000) + 1000;

    setTimeout(() => {
      const randomReplay =
        aiReplies[Math.floor(Math.random() * aiReplies.length)];

      const aiMessage = { sender: "ai", text: randomReplay, time: new Date().toISOString() };

    
      setMessage((prev) => [...prev, aiMessage]);
      setIsTyping(false);
      

      const updatedUser = {
  ...currentUser,
  chatRooms: currentUser.chatRooms.map((room, idx) =>
    idx === selectedRoom
      ? { ...room, messages: [...room.messages, userMessage , aiMessage] }
      : room
  )
};

dispatch(setUser(updatedUser));
localStorage.setItem("currentUser", JSON.stringify(updatedUser));


      
      let users = JSON.parse(localStorage.getItem('users'))
        
       const idx = users.findIndex(u => u.id == currentUser.id)

       if(idx !== -1){
        users[idx] = updatedUser
       }else{
        users.push(updatedUser)
       }

       localStorage.setItem('users' , JSON.stringify(users))

    }, [delay]);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = () => {
    const el = inputRef.current;

    if (el) {
      el.style.height = "auto";
      el.style.height = `${el.scrollHeight}px`;

      if (el.scrollHeight > 208) {
        el.style.height = "208px";
        el.style.overflowY = "auto";
      } else {
        el.style.overflowY = "hidden";
      }
    }
  };


  return (
    <div className="w-full max-h-screen bg-white">
      <div className="w-full  px-8 py-3 bg-purple-300">
        <h1 className="text-[18px] font-semibold ">{currentUser?.chatRooms?.[selectedRoom]?.title || "AI"}</h1>
        <p className="text-sm text-green-500 font-semibold">
          <span className="inline-block w-[5px] h-[5px] rounded-full bg-green-500"></span>{" "}
          online
        </p>
      </div>

      {/* chat box message */}
      <div className=" max-h-[65vh] h-full overflow-y-auto scrollbar-hide bg-white p-4 space-y-3">
         {
            message?.map((item , index) => (
                <div key={index} className={`px-3 py-1 bg-gray-200 rounded-lg w-fit ${item.sender === 'user' ? "ml-auto bg-blue-200 text-right" : "bg-gray-200 text-left"}`}>
             <p>{item.text}</p>
             <span className="text-xs text-gray-500">{formateDate(item.time)}</span>
            </div>
            ))
         }

         {
            isTyping && <div className="p-2 rounded-lg w-fit bg-gray-300 italic text-sm">
                Gemini is typing....
            </div>
         }

        <div ref={bottomRef}/>
      </div>

      {/* // chat input  */}
      <div className="w-11/12 overflow-hidden  border border-gray-400 rounded-4xl px-5 py-3 mx-auto">
      <div className="flex">

        <textarea
          ref={inputRef}
          onKeyDown={(e) => {
            handleEnter(e);
          }}
          onInput={handleInput}
          placeholder="Ask anything..."
          className="w-full min-h-5  max-h-52 resize-none overflow-hidden outline-none placeholder:font-medium placeholder:text-gray-400  "
          name=""
          id=""
        ></textarea>
        <IoMdSend onClick={() => {handleSend()}} className="text-2xl text-gray-500 ml-3" />
      </div>

        <div className="flex justify-between items-center">
          <button>
            <IoIosAdd className="text-3xl text-gray-500" />
          </button>
          <button>
            <CiMicrophoneOn className="text-2xl text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;

const toBase64 = (file) => {
   new Promise((resolve , reject) => {
     const reader = new FileReader()
     reader.readAsDataURL(file)
     reader .onload =() => resolve(reader.result)
     reader.onerror = reject
   })
}
