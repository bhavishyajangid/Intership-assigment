import React, { memo, useEffect, useRef, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { setAllProducts, setSearchValue, setStartLoading } from "../../store/Products";
import { setLoadeMore } from "../../store/Filter";
import { setLoader } from "../../../../benry/src/store/profileList";
const SearchBar = ({ className }) => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const { loader } = useSelector((state) => state.allProducts);
  

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
    dispatch(setSearchValue(event.target.value))
  }
  return (
    <div
      className={`w-80 max-md:w-64 h-9 border-2 flex border-solid border-gray-500 rounded-xl overflow-hidden  ${className} `}
    >
      <input
        value={inputValue}
        onChange={(e) => {
          handleInputValue(e)
        }}
        className="w-full h-full outline-none px-2"
        type="text"
        placeholder="Search"
      />
      <span className="pr-4 py-2 text-lg bg-white">
        <LuSearch />
      </span>
    </div>
  );
};

export default memo(SearchBar) ;
