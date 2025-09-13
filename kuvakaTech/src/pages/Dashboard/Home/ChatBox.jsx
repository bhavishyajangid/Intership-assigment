import React, { useEffect, useRef, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import Input from "../../../components/Input";
import { CiMicrophoneOn } from "react-icons/ci";
const ChatBox = () => {
  const [message, setMessage] = useState([
    {
      sender: "ai",
      text: "Hello 👋 I'm Gemini. Ask me anything!",
      time: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
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

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const formateDate = (date) => {
    date.toLocaleTimeString([], { hours: "2-digit", minute: "2-digit" });
  };

  const handleSend = () => {
    if (!inputRef.current.value.trim()) return;

    const userMessage = {
      sender: "user",
      text: inputRef.current.value,
      time: new Date(),
    };

    setMessage((prev) => [...prev, userMessage]);
    inputRef.current.value = "";
    handleInput();
    setIsTyping(true);

    const delay = Math.floor(Math.random() * 3000) + 1000;

    setTimeout(() => {
      const randomReplay =
        aiReplies[Math.floor(Math.random() * aiReplies.length)];

      const aiMessage = { sender: "ai", text: randomReplay, time: new Date() };

      setMessage((prev) => [...prev, aiMessage]);
      setIsTyping(false);
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
        <h1 className="text-[18px] font-semibold ">Ai research </h1>
        <p className="text-sm text-green-500 font-semibold">
          <span className="inline-block w-[5px] h-[5px] rounded-full bg-green-500"></span>{" "}
          online
        </p>
      </div>

      {/* chat box message */}
      <div className=" max-h-[65vh] h-full overflow-y-auto scrollbar-hide bg-white p-4 space-y-3">
         {
            message.map((item) => (
                <div className={`px-3 py-1 bg-gray-200 rounded-lg w-fit ${item.sender === 'user' ? "ml-auto bg-blue-200 text-right" : "bg-gray-200 text-left"}`}>
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
