import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import img from "./assets/background.png";
import "./App.css";
import SearchBox from "./components/SearchBox";
import Forcast from "./components/Forcast";
import Whether from "./components/Whether";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "./store/weatherSlice";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
function App() {
  const dispatch = useDispatch();

  const { loading , useCurrentLocation } = useSelector((state) => state.weatherSlice);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const res = await fetch(
              `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
            );

            const data = await res.json();
            console.log(data , 'home');
            
            dispatch(setData(data));
          } catch (error) {
            toast.error("Failed To Fetch Data ! Try After Some Time");
          }
        },
        (error) => {
          console.log(error);
          toast.error(error.message);
        }
      );
    }
  }, [useCurrentLocation]);

  if (loading) {
    return <Loader />;
  }

  
  
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="w-full max-w-3xl  min-h-52 rounded-2xl shadow-xl p-5">
          <SearchBox />
          <Whether />
          <Forcast />
        </div>
      </div>
    </>
  );
}

export default App;
