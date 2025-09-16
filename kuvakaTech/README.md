# 📱 Chat Rooms App

A real-time chat room application built with **React**, **Redux Toolkit**, and **React Hook Form**, featuring room creation, search, throttling, pagination, infinite scroll, and form validation.  

---

## 🚀 Project Overview

This app allows users to:
- Create and manage chat rooms.
- Search chat rooms by title.
- Persist data in **localStorage**.
- Manage authentication and OTP flow with Redux.
- Demonstrates Redux state handling for user details and room IDs.
- Implements **throttling, pagination, infinite scroll, and form validation**.  

🔗 **Live Demo:** [View Project](<your-live-link-here>)

---

## 🛠️ Setup & Run Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repo-link>
   cd <project-folder>
Install dependencies

bash
Copy code
npm install
Run the development server

bash
Copy code
npm run dev
Build for production

bash
Copy code
npm run build
📂 Folder & Component Structure
graphql
Copy code
src/
│── components/         
│   ├── Input.jsx            # Custom input field integrated with react-hook-form
│   ├── ChatRoomBox.jsx      # UI for individual chat room card
│   ├── CreateRoom.jsx       # Form to create new chat rooms
│   └── Loader.jsx           # Loading spinner
│
│── store/              
│   ├── userSlice.js         # Redux Toolkit slice for users, OTP, and IDs
│   └── store.js             # Redux store configuration
│
│── pages/              
│   └── ChatRooms.jsx        # Main page for listing/searching/creating rooms
│
│── App.js                   # Main entry with routes and layouts
│── main.jsx                 # React root setup
│── index.css                # Global styles with TailwindCSS
🔑 Key Components
ChatRooms – manages search, filtering, and new room creation.

CreateRoom – form with validation for creating a chat room.

ChatRoomBox – displays each chat room with last message and time.

userSlice – Redux logic for login, OTP, and room ID handling.

Input – reusable input integrated with react-hook-form.

⚙️ Features & Implementations
🔄 Throttling (Search Optimization)
Implemented with setTimeout inside useEffect.

Example:

js
Copy code
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
  }, 400); // 400ms delay

  return () => clearTimeout(handler);
}, [value, currentUser]);
📄 Pagination
Rooms list can be split across pages with currentPage and pageSize.

Example:

js
Copy code
const pageSize = 5;
const [currentPage, setCurrentPage] = useState(1);

const paginatedRooms = filterRooms.slice(
  (currentPage - 1) * pageSize,
  currentPage * pageSize
);
🔁 Infinite Scroll
Loads more rooms as the user scrolls to the bottom.

Example:

js
Copy code
const handleScroll = (e) => {
  if (
    e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight
  ) {
    setCurrentPage((prev) => prev + 1);
  }
};
✅ Form Validation
Powered by react-hook-form.

Example:

js
Copy code
const {
  register,
  handleSubmit,
  formState: { errors }
} = useForm();

<Input
  {...register("title", { required: "Room title is required" })}
  placeholder="Enter room title"
/>

{errors.title && <p className="text-red-500">{errors.title.message}</p>}
📸 Screenshots (Optional)
Add screenshots of your UI here:



👨‍💻 Author
Your Name

yaml
Copy code

---

⚡ This is a **ready-to-publish README.md** file.  
You just need to:
- Replace `<your-live-link-here>` with your deployed site link.  
- Replace `<your-repo-link>` with your GitHub repo.  
- Replace `<screenshot-link>` with uploaded screenshot links (if any).  

Would you like me to also add a **badges section** (React, Redux, Tailwind, etc.) at the top for