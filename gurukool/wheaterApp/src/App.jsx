import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "./App.css";
import img from "./assets/background.png";
import {Loader , SearchBox , Weather} from "../import";
import { setData } from "./store/weatherSlice";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


function App() {
  const dispatch = useDispatch();

  const { loading , useCurrentLocation , error } = useSelector((state) => state.weatherSlice);


  // fetch user current location weather
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

  

  
  
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="w-full max-w-3xl  min-h-52 rounded-2xl shadow-xl p-5">
          <SearchBox />
 
         {/*  show error and loading  */}
          {
          error ? <p className="text-xl capitalize font-medium text-gray-500 text-center mt-10">{error}</p> : 
            loading ? <Loader/> : <Weather/>
          }
        </div>
      </div>
    </>
  );
}

export default App;
