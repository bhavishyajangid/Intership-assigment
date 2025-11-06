import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import Rows from "./Rows";

const Home = () => {
  const { column, filteredRows } = useSelector(
    (state: RootState) => state.allDataSlice
  );

  return (
    <div className="border border-gray-500">
      {/* coloum  */}
      <div
        className={` grid text-center items-center font-semibold min-h-10 bg-gray-700 border-b border-black `}
        style={{
          gridTemplateColumns: `80px 60px repeat(${
            column.length
          } , minmax(0 , 1fr))`,
        }}
      >
        {
           column.length > 0 &&
           <>
          <span className={`py-2 text-white`}>Hide</span>
          <span className={`py-2 text-white`}>Sr</span>
           </>
         
        }
        {column.map((item) =>
              <span className={`py-2 text-white`}>{item}</span>
        )}
      </div>


    {/* // show rows  */}
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
