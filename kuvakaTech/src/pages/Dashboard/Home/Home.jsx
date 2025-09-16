import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import { setUser } from "../../../store/userSlice";
import ChatRooms from "../ChatRooms";
import ChatBox from "./ChatBox";
const Home = () => {
  const dispatch = useDispatch();
  const [loader , setLoader] = useState(true)
  

  if(loader){
    return <p>Loading....</p>
  }
  return (
    <div className="w-full h-screen flex">
      <ChatRooms />

      <div className="flex-1 hidden sm:block">
        <ChatBox />
      </div>
    </div>
  );
};

export default Home;
