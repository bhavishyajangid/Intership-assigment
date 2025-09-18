import React from 'react'

const Forcast = () => {
    const weatherData = {
  cod: "200",
  list: [
    {
      dt_txt: "2025-09-18 09:00:00",
      main: { temp: 35.65, feels_like: 36.64, humidity: 34 },
      weather: [{ main: "Clear", description: "clear sky", icon: "01d" }],
    },
    {
      dt_txt: "2025-09-18 12:00:00",
      main: { temp: 35.68, feels_like: 36.42, humidity: 33 },
      weather: [{ main: "Clouds", description: "few clouds", icon: "02d" }],
    },
    {
      dt_txt: "2025-09-18 15:00:00",
      main: { temp: 33.4, feels_like: 33.77, humidity: 37 },
      weather: [{ main: "Clouds", description: "broken clouds", icon: "04n" }],
    },{
      dt_txt: "2025-09-18 15:00:00",
      main: { temp: 33.4, feels_like: 33.77, humidity: 37 },
      weather: [{ main: "Clouds", description: "broken clouds", icon: "04n" }],
    },{
      dt_txt: "2025-09-18 15:00:00",
      main: { temp: 33.4, feels_like: 33.77, humidity: 37 },
      weather: [{ main: "Clouds", description: "broken clouds", icon: "04n" }],
    },
  ],
};
  return (
    
    <div className="  p-3 mt-5 rounded-2xl">
      <h1 className="text-3xl font-bold text-center  mb-8">
        🌤 Weather Forecast
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {weatherData.list.map((item, index) => (
          <div
            key={index}
            className="p-3  backdrop-blur-md shadow-xl rounded-2xl text-white hover:scale-105 transform transition duration-300 bg-blue-300"
          >
            {/* Date */}
            <h2 className="font-semibold text-sm mb-2 text-center">
              {new Date(item.dt_txt).toLocaleDateString("en-US", {
                weekday: "short",
                day: "numeric",
                month: "short",
              })}{" "}
              <span className="block text-xs opacity-80">
                {new Date(item.dt_txt).toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </h2>

            {/* Icon */}
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={item.weather[0].description}
              className="mx-auto w-14 h-14"
            />

            {/* Temperature */}
            <p className="text-2xl font-bold text-center">
              {Math.round(item.main.temp)}°C
            </p>

            {/* Description */}
            <p className="capitalize text-center text-xs opacity-90">
              {item.weather[0].description}
            </p>

            {/* Extra details */}
            <div className="mt-4 flex justify-between text-sm opacity-90">
              <p>🌡 Feels {Math.round(item.main.feels_like)}°C</p>
              <p>💧 {item.main.humidity}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Forcast