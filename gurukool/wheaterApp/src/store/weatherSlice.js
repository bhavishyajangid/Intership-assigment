import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: [],
    forecast: [],
    loading: true,
    useCurrentLocation: true,
    oldInputVal: null,
  },
  reducers: {
    setData: (state, action) => {
      let payload = action.payload;

      let data, inputVal;
      if (payload?.data) {
        data = payload.data;
        inputVal = payload.inputVal || null;
      } else {
        data = payload; // raw API response
        inputVal = null;
      }

      if (inputVal) {
        state.oldInputVal = inputVal;
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
    },
    setUseCurrentLocation: (state) => {
      state.useCurrentLocation = !state.useCurrentLocation;
      state.loading = true;
      state.inputVal = null;
    },
    setSearchWeather: (state, action) => {},
    setLoader: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setData, setUseCurrentLocation, setSearchWeather, setLoader } =
  weatherSlice.actions;
export default weatherSlice;
