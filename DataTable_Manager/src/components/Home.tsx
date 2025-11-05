import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import Rows from "./Rows";

const Home = () => {
  const { column, filteredRows } = useSelector(
    (state: RootState) => state.allDataSlice
  );


  console.log(filteredRows);
  


  return (
    <div className="border border-gray-500">
      {/* coloum  */}
      <div
        className={` grid text-center items-center font-semibold  bg-gray-700 border-b border-black `}
        style={{
          gridTemplateColumns: `80px 60px repeat(${
            column.length - 1
          } , minmax(0 , 1fr)) 60px`,
        }}
      >
        {column.map((item) =>
          item === "Hide" ? (
            <input className="h-3" type="checkbox" name="" id="" />
          ) : (
            <span className={`py-2 text-white`}>{item}</span>
          )
        )}
        <span className={`py-2 text-white`}>{"Menu"}</span>
      </div>

      <div className="h-80  overflow-y-auto">
        {filteredRows.length === 0 ? (
          <div className="text-center font-medium mt-20 text-gray-500 ">Not Found</div>
        ) : (
          filteredRows?.map((item) => (
            <Rows key={item.id} item={item} coloumLen={column.length} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
