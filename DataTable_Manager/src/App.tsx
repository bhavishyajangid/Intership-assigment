import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import HeaderOption from "./components/HeaderOption";
import Home from "./components/Home";
import Pagination from "./components/Footer";
import { setRows } from "./store/AllData";

const App = () => {
   const dispatch = useDispatch()

   // take data from localstorage
  useEffect(() => {
    let rowData = JSON.parse(localStorage.getItem("allRows") || 'null')
    if(rowData || rowData?.length > 0){
     dispatch(setRows(rowData))
    }
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
