import Rows from "./Rows";
import { HiOutlineDotsVertical } from "react-icons/hi";
const Home = () => {
  let coloum = ["Hide", "Sr", "Name", "Email", "Age", "Role" , 'Menu'];

  const rows = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      age: 25,
      role: "Admin",
      hide : true ,
    },
    {
      id: 2,
      name: "Alice Smith",
      email: "alice@example.com",
      age: 30,
      role: "User",
      hide : true,
    },
  ];



  return (
    <div className="border border-gray-500">
      {/* coloum  */}
      <div className={` grid text-center items-center font-semibold  bg-gray-700 border-b border-black `}
      style={{gridTemplateColumns : `80px 60px repeat(${coloum.length - 2} , minmax(0 , 1fr))`}}
      >
        {coloum.map((item) => (
            item === 'Hide'  ? <input className="h-3" type="checkbox" name="" id="" /> : 
          <span className={`py-2 text-white`}>{item}</span>
        ))}
      </div>

      <div className="h-80  overflow-y-auto">
            {
                rows.map((item) => (
                    <Rows key={item.id} item={item} coloumLen={coloum.length}/>
                ))
            }

          
         
      </div>
    </div>
  );
};

export default Home;
