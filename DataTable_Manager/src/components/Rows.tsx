import { memo } from "react";
import { useDispatch } from "react-redux";
import { handleHide } from "../store/AllData";

type props = {
  item: rowType;
  coloumLen: number;
};

const Rows = ({ item, coloumLen }: props) => {
  const dispatch = useDispatch();

  const toggleHide = (id: rowType["id"]) => {
    dispatch(handleHide(id));
  };

  return (
    <>
      <div
        className="grid gap-5 text-center py-4 text-gray-900 hover:bg-gray-300 transition cursor-pointer border-b border-gray-200"
        style={{
          gridTemplateColumns: `80px 60px repeat(${coloumLen} , minmax(0 , 1fr))`,
        }}
      >
        <div>
          <input
            checked={item.hide}
            onChange={() => {
              toggleHide(item.id);
            }}
            type="checkbox"
            name=""
            id=""
          />
        </div>

        {!item.hide &&
          Object.values(item)?.map(
            (val, idx) => typeof val !== "boolean" && <div key={idx}>{val}</div>
          )}
      </div>
    </>
  );
};

export default memo(Rows, (prev, next) => {
  return (
    prev.item.hide === next.item.hide &&
    prev.coloumLen === next.coloumLen &&
    JSON.stringify(prev.item) === JSON.stringify(next.item)
  );
});
