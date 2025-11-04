import "./App.css";
import HeaderOption from "./components/HeaderOption";
import Home from "./components/Home";
import Pagination from "./components/Pagination";

const App = () => {
  return (
    <div className="h-screen bg-gray-100 w-full  px-16 py-20 ">
      <HeaderOption/>
      <Home />
      <Pagination/>
    </div>
  );
};

export default App;
