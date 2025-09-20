import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: [],
    forecast: [],
    loading: true,
    useCurrentLocation: true,
    oldInputVal: null,
    error: "",
  },
  reducers: {
    setData: (state, action) => {
      let data = action.payload;

      // save previous search city
      if (data.city.name) {
        state.oldInputVal = data.city.name;
      }

      
      state.data = {
        ...data.list[0],
        city: data.city.name,
        country: data.city.country,
      };

      state.forecast = data.list.filter((entry) =>
        entry.dt_txt.includes("12:00:00")
      );

      state.loading = false;
      state.error = "";
    },
    setUseCurrentLocation: (state) => {
      state.useCurrentLocation = !state.useCurrentLocation;
      state.loading = true;
      state.error = "";
    },
    setLoader: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setData, setUseCurrentLocation, setLoader, setError } =
  weatherSlice.actions;
export default weatherSlice;
