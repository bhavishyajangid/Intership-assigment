import React, { useRef, useState, type RefObject } from "react";
import { CiImport, CiExport } from "react-icons/ci";
import { IoAddOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setAddColumn, setAscending, setDecending } from "../store/AllData";
import { FcNumericalSorting12 , FcNumericalSorting21 } from "react-icons/fc";
const HeaderOption = () => {
  const [showAddColumn, setShowAddColumn] = useState(false);
  const columnName = useRef<HTMLInputElement>(null);
  const [showSort, setShowSort] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleImport = () => {};
  const handleExport = () => {};
  const handleAdd = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      const value = columnName.current?.value.trim();

      if (!value) return alert("Enter a Column Name");

      dispatch(setAddColumn(value));
      setShowAddColumn(false);

      if (columnName.current) {
        columnName.current.value = "";
      }
    }
  };

  let option = [
    {
      label: "Add",
      icons: <IoAddOutline />,
      handleOption: () => setShowAddColumn((prev) => !prev),
    },
  ];

  return (
    <div className="p-5 flex justify-between items-center relative">
      <input
        className="w-60 h-9 border outline-none border-black bg-white px-5 rounded-3xl "
        type="text"
        placeholder="Search"
      />

      <div className="flex gap-4">
        {showAddColumn ? (
          <input
            ref={columnName}
            onKeyDown={handleAdd}
            className="px-4 bg-white h-9 rounded-4xl border border-gray-500 outline-none placeholder:text-sm"
            type="text"
            placeholder="Enter Column Name"
          />
        ) : (
          <div
            onClick={() => setShowAddColumn((prev) => !prev)}
            className="bg-gray-600 px-5 py-2 rounded-md text-white font-medium flex items-center gap-2 h-10"
          >
            Add
            <IoAddOutline />
          </div>
        )}

        <div
          onClick={() => setShowSort((prev) => !prev)}
          className="px-5 py-2 rounded-md border cursor-pointer border-gray-500 font-medium flex items-center gap-2 h-10"
        >
          Sort
          <IoAddOutline />
        </div>

        {showSort && (
          <div className="flex flex-col w-24 border-gray-500 border rounded-2xl overflow-hidden  absolute -bottom-13 right-5 ">
            <div onClick={() => dispatch(setAscending())} className="px-3 py-1 border-b border-gray-500 hover:bg-gray-300 hover:text-white cursor-pointer font-medium text-gray-500 bg-white flex items-center justify-between">
              Asc <FcNumericalSorting12 />
            </div>
            <div onClick={() => dispatch(setDecending())} className="px-3 py-1 hover:bg-gray-300 hover:text-white cursor-pointer font-medium text-gray-500 bg-white flex items-center justify-between">
              Dec <FcNumericalSorting21 />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderOption;
