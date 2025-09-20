import { createSlice } from "@reduxjs/toolkit";
import { normalizeCityName } from "../utility/formateCityName";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: [],
    forecast: [],
    loading: true,
    useCurrentLocation: true,
    oldInputVal: null,
    error: "",
    storedData : {}
  },
  reducers: {
    setData: (state, action) => {
      let data = action.payload;
      let formateCityName = normalizeCityName(data.city?.name)


      // save previous search city
      if (formateCityName) {
        state.oldInputVal = formateCityName.toLowerCase()
      }


      let obj = {
        ...data.list[0],
        city: data.city.name,
        country: data.city.country,
      };

      
      let forecaste = data.list.filter((entry) =>
        entry.dt_txt.includes("12:00:00")
    );
    
   
    // stored data
    state.storedData = {
      ...state.storedData , 
      [formateCityName.toLowerCase()] : {
        data : {...obj},
        forecaste : [...forecaste],
        timestamp : Date.now()
      }
    }
    
      state.forecast = forecaste
      state.data = obj
      state.loading = false;
      state.error = "";
    },
    setUseCurrentLocation: (state) => {
      state.useCurrentLocation = !state.useCurrentLocation;
      state.error = "";
    },
    setLoader: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setStoredData : (state , action) => {
       const {data , forecaste} = action.payload
       state.data = data
       state.forecast = forecaste
       state.oldInputVal = data.city.name
    },
    setRemoveStoredData : (state , action) => {
        delete state.storedData[action.payload];
    }
  },
});

export const { setData, setUseCurrentLocation, setLoader, setError , setStoredData , setRemoveStoredData } =
  weatherSlice.actions;
export default weatherSlice;
