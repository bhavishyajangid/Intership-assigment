import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "./App.css";
import img from "./assets/background.png";
import { Loader, SearchBox, Weather } from "../import";
import {
  setData,
  setError,
  setLoader,
  setRemoveStoredData,
  setStoredData,
} from "./store/weatherSlice";
import { calculateTimeDiffrence } from "./utility/calculateTime";
import { normalizeCityName } from "./utility/formateCityName";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  const dispatch = useDispatch();
  const currentCity = useRef(null);

  const { loading, useCurrentLocation, error, storedData } = useSelector(
    (state) => state.weatherSlice
  );

  // fetch user current location weather
  useEffect(() => {

    // check the currentCity is present 
    if (currentCity.current) {

      // formate the city in normal form without specialCharacter
      const city = normalizeCityName(currentCity.current).toLowerCase();

      // check if the city data is stored or not older than 10 min 
      const dataStatus = calculateTimeDiffrence(storedData, city);

      // if the stored data is not older than 10 min show 
      if (dataStatus === "fresh") {
        dispatch(setStoredData(storedData[city]));
        return;
      } else if (dataStatus === "stale") {
        // if the stored data is older than 10 min than remove it and fetch again
        dispatch(setRemoveStoredData(city));
      }
    }

    dispatch(setLoader(true));
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const res = await fetch(
              `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
            );

            const data = await res.json();
            
            // handle error
            if (data.cod !== "200") {
              dispatch(setError(data.message));
              return;
            }

            currentCity.current = data.city.name;
            dispatch(setData(data));
          } catch (error) {
            console.log(error);
            dispatch(setLoader(false));
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
          {error ? (
            <p className="text-xl capitalize font-medium text-gray-500 text-center mt-10">
              {error}
            </p>
          ) : loading ? (
            <Loader />
          ) : (
            <Weather />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
