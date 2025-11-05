import React, { useEffect, useRef, useState } from "react";
import { FcNumericalSorting12, FcNumericalSorting21 } from "react-icons/fc";
import { IoAddOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  handlePagination,
  setAddColumn,
  setSearchVal,
  setSort
} from "../store/AllData";
import type { RootState } from "../store/store";
import { filterRow } from "../utility/searchFilterRow";
const HeaderOption = () => {
  const { searchval } = useSelector((state: RootState) => state.allDataSlice);
  const [showAddColumn, setShowAddColumn] = useState(false);
  const columnName = useRef<HTMLInputElement>(null);
  const [showSort, setShowSort] = useState<boolean>(false);
  // const [searchVal , setSearchVal] = useState<string>('')
  const firstRender = useRef<boolean>(true);
  const dispatch = useDispatch();

  const { rows } = useSelector((state: any) => state.allDataSlice);

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

  const handleSort = (type: string): void => {
    dispatch(setSort(type));
    setShowSort((pre) => !pre);
  };



  useEffect(() => {
    const handler = setTimeout(() => {
      if (firstRender.current) {
        firstRender.current = false;
        return;
      }

      if (!searchval.trim()) {
        dispatch(handlePagination({ currentPage: 1, data: rows }));
        return;
      }

      const filter = filterRow(rows, searchval);
      dispatch(handlePagination({ currentPage: 1, data: filter }));
    }, 500);

    return () => clearTimeout(handler);
  }, [searchval, dispatch]);

  return (
    <div className="p-5 flex justify-between items-center relative">
      <input
        value={searchval}
        onChange={(e) => dispatch(setSearchVal(e.target.value))}
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
            <div
              onClick={() => handleSort("Asc")}
              className="px-3 py-1 border-b border-gray-500 hover:bg-gray-300 hover:text-white cursor-pointer font-medium text-gray-500 bg-white flex items-center justify-between"
            >
              Asc <FcNumericalSorting12 />
            </div>
            <div
              onClick={() => handleSort("Dec")}
              className="px-3 py-1 hover:bg-gray-300 hover:text-white cursor-pointer font-medium text-gray-500 bg-white flex items-center justify-between"
            >
              Dec <FcNumericalSorting21 />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderOption;
