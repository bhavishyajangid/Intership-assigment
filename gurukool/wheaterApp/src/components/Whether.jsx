import React from 'react'

const Whether = () => {
    const data = {
    coord: { lon: 75.0846, lat: 28.2822 },
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01d" }],
    main: {
      temp: 35.06,
      feels_like: 36.46,
      pressure: 1006,
      humidity: 37,
    },
    wind: { speed: 3.24, deg: 276, gust: 2.52 },
    sys: { country: "IN" },
    name: "Ranasar",
  };
  return (
    <div className=" mt-10 mx-auto  bg-gradient-to-br from-blue-400 to-blue-300  text-white p-6 rounded-2xl shadow-lg">
      {/* Location */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{data.name}, {data.sys.country}</h2>
        <img src="" alt={data.weather[0].description} className="w-16 h-16" />
      </div>

      {/* Temperature */}
      <div className="mt-4">
        <p className="text-5xl font-semibold">{Math.round(data.main.temp)}°C</p>
        <p className="capitalize text-lg">{data.weather[0].description}</p>
      </div>

      {/* Extra details */}
      <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
        <div className="bg-white/15 p-3 rounded-lg ">
          <p className="font-semibold ">Feels Like</p>
          <p>{Math.round(data.main.feels_like)}°C</p>
        </div>
        <div className="bg-white/15 p-3 rounded-lg">
          <p className="font-semibold">Humidity</p>
          <p>{data.main.humidity}%</p>
        </div>
        <div className="bg-white/15 p-3 rounded-lg">
          <p className="font-semibold">Wind</p>
          <p>{data.wind.speed} m/s</p>
        </div>
        <div className="bg-white/15 p-3 rounded-lg">
          <p className="font-semibold">Pressure</p>
          <p>{data.main.pressure} hPa</p>
        </div>
      </div>
    </div>
  )
}

export default Whether