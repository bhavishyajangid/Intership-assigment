import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setSeletedRoom } from "../store/chatSlice";
import { setUserUpdate } from "../store/userSlice";
const ChatRoomBox = ({ item }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.userSlice);
  const { selectedRoom } = useSelector((state) => state.chatSlice);

  const deleteRoom = (id) => {
    // take the data from local storage
    const users = JSON.parse(localStorage.getItem("users"));
    const loginUser = JSON.parse(localStorage.getItem("currentUser"));

    

    // update the chatrooms
    let updatedChatRooms = loginUser.chatRooms.filter((item) => item.id !== id);

    // update the user
    let updatedCurrentUser = {
      ...currentUser,
      chatRooms: updatedChatRooms,
    };

    // find the user from the users
    let idx = users.findIndex((u) => u.id == currentUser.id);

    if (idx !== -1) {
       // update it
      users[idx] = updatedCurrentUser;
    }

    // set back to local storeage
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(updatedCurrentUser));

    dispatch(setUserUpdate(updatedCurrentUser));
  };
  return (
    <div
      onClick={() => {
        dispatch(setSeletedRoom(item.id));
      }}
      className={`p-3 border border-gray-300 rounded-lg cursor-pointer  ${
        selectedRoom == item.id && "shadow-lg  scale-105 z-10 bg-blue-100"
      } `}
    >
      <div className="flex justify-between">
        <span className="text-[clamp(1rem,1.3vw,4rem)] font-semibold">
          {item.title}
        </span>
        <span className="text-sm font-semibold text-green-400">active</span>
      </div>
      <p className="text-sm text-gray-400">{item.lastMessage}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500 font-medium">
          {item.updatedAt}
        </span>
        <AiFillDelete
          onClick={() => {
            deleteRoom(item.id);
          }}
          className="text-md text-red-400"
        />
      </div>
    </div>
  );
};

export default ChatRoomBox;
