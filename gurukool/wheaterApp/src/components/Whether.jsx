import { useSelector } from 'react-redux';
import WeatherCard from './WeatherCard';
const Whether = () => {
    const {data} = useSelector(state => state.weatherSlice)
    const weatherDetails = [
    { label: "Feels Like", value: `${Math.round(data.main.feels_like)}°C` },
    { label: "Humidity", value: `${data.main.humidity}%` },
    { label: "Wind", value: `${data.wind.speed} m/s` },
    { label: "Pressure", value: `${data.main.pressure} hPa` },
  ];
  return (
    <div className="mt-10 mx-auto bg-gradient-to-br from-blue-400 to-blue-300 text-white p-6 rounded-2xl shadow-lg">

      {/* Location */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          {data.city}, {data.country}
        </h2>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={data.weather[0].description}
          className="w-20 h-20"
        />
      </div>

      {/* Temperature */}
      <div className="mt-4">
        <p className="text-5xl font-semibold">{Math.round(data.main.temp)}°C</p>
        <p className="capitalize text-lg">{data.weather[0].description}</p>
      </div>

      
      {/* Cards  */}
      <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
        {weatherDetails.map((detail, index) => (
          <WeatherCard key={index} label={detail.label} value={detail.value} />
        ))}
      </div>
    </div>
  )
}

export default Whether