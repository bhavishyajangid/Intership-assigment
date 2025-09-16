import { useEffect, useRef, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import FileInput from "../../../components/FileInput";
import ImagePreview from "../../../components/ImagePreview";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import { setUser } from "../../../store/userSlice";
import dummyMessage from "../../../utility/fetchDummyMessage";
const ChatBox = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.userSlice);
  const { selectedRoom } = useSelector((state) => state.chatSlice);

  // message state
  const [message, setMessage] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  //scroll state
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  // image upload state
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);

  // pagination state
  const [page, setPage] = useState(1);
  const pageSize = 20;
  const [loader, setLoader] = useState(false);
  const containerRef = useRef(null);

  const aiReplies = [
    "🤔 Let me think about that...",
    "That's an interesting question!",
    "Here’s what I found for you 🚀",
    "Good point! Let me explain.",
    "I’ll need a second... okay, done ✅",
    "Wow, that’s deep! Let’s dive in 🧠",
  ];

  // upload file
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    let previewUrl = URL.createObjectURL(file);
    setImage(previewUrl);
    const base64 = await toBase64(file);
    setFile({ preview: previewUrl, base64 });
  };

  // when we select the another chatroom
  useEffect(() => {
    if (selectedRoom >= 0 && currentUser?.chatRooms?.[selectedRoom]) {
      setMessage([...currentUser.chatRooms[selectedRoom]?.messages] || []);
    }
    setImage(null);
    setFile(null);
    setPage(1);
  }, [selectedRoom, currentUser]);

  // scroll to down
  useEffect(() => {
    if (!loader) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      setLoader(false);
    }
  }, [message]);

  // send the message
  const handleSend = async () => {
    if (selectedRoom < 0) {
      toast.error("Select a chat room");
      return;
    }

    if (!inputRef.current.value && !image) return;

    const userMessage = {
      sender: "user",
      text: inputRef.current.value || "",
      image: file?.base64 || "",
      time: new Date().toISOString(),
    };

    // send message locally
    setMessage((prev) => [...prev, userMessage]);
    inputRef.current.value = "";

    // scroll down to latest message again
    handleInput();
    setImage(null);
    setIsTyping(true);

    const delay = Math.floor(Math.random() * 3000) + 1000;

    setTimeout(() => {
      const randomReplay =
        aiReplies[Math.floor(Math.random() * aiReplies.length)];

      const aiMessage = {
        sender: "ai",
        text: randomReplay,
        time: new Date().toISOString(),
      };

      setMessage((prev) => [...prev, aiMessage]);
      setIsTyping(false);

      const updatedUser = {
        ...currentUser,
        chatRooms: currentUser.chatRooms.map((room, idx) =>
          idx === selectedRoom
            ? { ...room, messages: [...room.messages, userMessage, aiMessage] }
            : room
        ),
      };

      dispatch(setUser(updatedUser));

      // update the message in localstorage
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));

      let users = JSON.parse(localStorage.getItem("users"));

      const idx = users.findIndex((u) => u.id == currentUser.id);

      if (idx !== -1) {
        users[idx] = updatedUser;
      } else {
        users.push(updatedUser);
      }

      localStorage.setItem("users", JSON.stringify(users));
    }, [delay]);
  };

  // send message after enter
  const handleEnter = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // for input height increase
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


  // pagination funcation only show 20 message
  const loadMessage = () => {
    if (loader) return;

    setLoader(true);

    setTimeout(() => {
      const start = dummyMessage.length - page * pageSize;
      const end = dummyMessage.length - (page - 1) * pageSize;

      if (start < 0 && page > 1) {
        setLoader(false);
        return;
      }

      const newMessage = dummyMessage.slice(Math.max(start, 0), end);

      let oldHeight = containerRef.current.scrollHeight;

      setMessage((prev) => [...newMessage, ...prev]);

      setTimeout(() => {
        let newHeight = containerRef.current.scrollHeight;
        containerRef.current.scrollTop = newHeight - oldHeight;
      }, 0);

      setPage((prev) => prev + 1);
    }, 1000);
  };

  
  const handleScroll = () => {
    if (containerRef.current.scrollTop === 0) {
      loadMessage();
    }
  };

 
  
  return (
    <div className="w-full h-screen  max-h-screen bg-white ">
      <div className="w-full  px-8 py-3 bg-purple-300">
        <h1 className="text-[18px] font-semibold ">
          {currentUser?.chatRooms?.[selectedRoom]?.title || "AI"}
        </h1>
        <p className="text-sm text-green-500 font-semibold">
          <span className="inline-block w-[5px] h-[5px] rounded-full bg-green-500"></span>{" "}
          online
        </p>
      </div>

      {/* chat box message */}
      <div
        className=" max-h-[65vh] h-full overflow-y-auto scrollbar-hide bg-white p-4 space-y-3"
        ref={containerRef}
        onScroll={() => {
          handleScroll();
        }}
      >
        {loader ? (
          <Loader />
        ) : (
          message?.map((item, index) => <Message key={index} item={item} />)
        )}

        {isTyping && (
          <div className="p-2 rounded-lg w-fit bg-gray-300 italic text-sm">
            Gemini is typing....
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* // chat input  */}
      <div className="w-11/12 relative  overflow-hidden  border border-gray-400 rounded-4xl px-5 py-3 mx-auto ">
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

          {/* // image preview  */}
          {image && (
            <ImagePreview image={image} setFile={setFile} setImage={setImage} />
          )}

          <IoMdSend
            onClick={() => {
              handleSend();
            }}
            className="text-2xl text-gray-500 ml-3"
          />
        </div>

        <FileInput handleFileChange={handleFileChange} />
      </div>
    </div>
  );
};

export default ChatBox;

const toBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });
};
