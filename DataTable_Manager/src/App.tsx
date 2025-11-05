import { useEffect } from "react";
import "./App.css";
import HeaderOption from "./components/HeaderOption";
import Home from "./components/Home";
import Pagination from "./components/Pagination";
import { dummyData } from "./data";
import { useDispatch } from "react-redux";
import { handlePagination, setRows } from "./store/AllData";
import { current } from "@reduxjs/toolkit";

const App = () => {
   const dispatch = useDispatch()
  useEffect(() => {
    let rowData = JSON.parse(localStorage.getItem("allRows") || 'null')
    if(!rowData || rowData.length === 0){
      rowData = dummyData
      localStorage.setItem('allRows' , JSON.stringify(dummyData))
    }

      dispatch(setRows(rowData))
      dispatch(handlePagination({currentPage : 1 , data : rowData}))
  }, [dispatch])

  return (
    <div className="h-screen bg-gray-100 w-full  px-16 py-20 ">
      <HeaderOption/>
      <Home />
      <Pagination/>
    </div>
  );
};

export default App;
