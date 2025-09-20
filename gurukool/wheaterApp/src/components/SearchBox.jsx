import { memo, useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  setData,
  setError,
  setLoader,
  setRemoveStoredData,
  setStoredData,
  setUseCurrentLocation,
} from "../store/weatherSlice";
import { toast } from "react-toastify";
import { calculateTimeDiffrence } from "../utility/calculateTime";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const SearchBox = () => {
  const { oldInputVal, data, error, storedData , loading } = useSelector(
    (state) => state.weatherSlice
  );
  const dispatch = useDispatch();
  const [val, setVal] = useState("");
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    // show previous search
    if (!val && data && error) {
      dispatch(setError(""));
    }

    // prevent from empty or same search again
    if (!val || val.trim().toLowerCase() === oldInputVal?.trim().toLowerCase()|| loading)
      return;

    // check if the search city data is stored or not
    const inputVal = val.toLowerCase();

    // check if the city data is stored or not older than 10 min 
    const dataStatus = calculateTimeDiffrence(storedData, inputVal);

    
    if (dataStatus === "fresh") {
      dispatch(setStoredData(storedData[inputVal]));
      return;
    } else if (dataStatus === "stale") {
      dispatch(setRemoveStoredData(inputVal));
    }

    // fetch data after some delay using debouncing
    const handler = setTimeout(async () => {
      dispatch(setLoader(true));
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${val}&appid=${API_KEY}&units=metric`
        );
        const data = await res.json();

        // handle error
        if (data.cod == "404") {
          dispatch(setError(data.message));
          return;
        }

        dispatch(setData(data));
      } catch (error) {
        console.log(error);
        toast.error("SomeThing Went Wrong ! Try After Some Time");
      } finally {
        dispatch(setLoader(false));
      }
    }, 500);

    return () => clearTimeout(handler);
  }, [val, dispatch]);

  return (
    <div className="flex items-center justify-between max-sm:gap-3">
      <div className="bg-white w-11/12 flex items-center justify-between h-11 rounded-4xl overflow-hidden">
        <input
          autoComplete="off"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className="w-11/12 h-full outline-none placeholder:text-sm placeholder:font-medium text-gray-500 px-5"
          type="text"
          placeholder="Search City"
        />
        <div className="h-full w-16 bg-blue-500 flex justify-center items-center text-2xl text-white cursor-pointer">
          <CiSearch />
        </div>
      </div>

      <span
        onClick={() => dispatch(setUseCurrentLocation())}
        className="p-3 rounded-2xl bg-gray-500 cursor-pointer text-white text-xl"
      >
        <FaLocationCrosshairs />
      </span>
    </div>
  );
};

export default memo(SearchBox);
