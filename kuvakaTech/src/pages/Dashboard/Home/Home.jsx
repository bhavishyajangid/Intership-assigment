import ChatRooms from "../ChatRooms";
import ChatBox from "./ChatBox";
const Home = () => {
  
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
