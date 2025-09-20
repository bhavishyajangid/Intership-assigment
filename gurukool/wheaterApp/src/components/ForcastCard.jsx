
const ForcastCard = ({item}) => {
  return (
    <div
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
  src={`https://openweathermap.org/img/wn/${item.weather[0].icon  == '01d' ? '02d' : item.weather[0].icon}@2x.png`}
  alt={item.weather && item.weather[0]?.description}
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
  )
}

export default ForcastCard