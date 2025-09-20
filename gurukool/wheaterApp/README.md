# 🌤️ React Weather App with Caching and Redux

A fast, clean, and optimized weather forecast application built with **React**, **Redux Toolkit**, and **Tailwind CSS**. It uses the **OpenWeatherMap API** to provide live weather data and caches results to improve performance.

---

## 🚀 Live Demo & Repository

🔗 **Live App:** https://gurukoolassigment.netlify.app/ 
🔗 **GitHub Repo:** [ https://github.com/bhavishyajangid/Intership-assigment/tree/main/gurukool/wheaterApp]

> Replace these links with your actual deployed app and repository.

---

## 📸 Features

- 🔍 Search weather by **city name**
- 📍 Use **current location** for weather
- ⚡ **Caches data** per city to avoid duplicate API calls
- 🕒 Automatically **refreshes stale data** after 10 minutes
- 🌐 **Responsive UI** using Tailwind CSS
- 🚫 Handles loading and error states gracefully
- ⏳ **Debounced** search input
- 🔄 Clean state management with **Redux Toolkit**

---

## 📂 Project Structure

src/
├── assets/
│ └── background.png
├── components/
│ ├── SearchBox.jsx
│ ├── Weather.jsx
│ └── Loader.jsx
├── store/
│ └── weatherSlice.js
├── utility/
│ ├── calculateTime.js
│ └── formateCityName.js
├── App.jsx
└── main.jsx


---

## 🧠 Key Concepts

### 🏙️ City Data Caching with Expiry

Weather data is stored in Redux like this:

```js
storedData = {
  jaipur: {
    data: { ... },           // Current weather
    forecaste: [ ... ],      // 5-day forecast at 12:00 PM
    timestamp: 1695200000000 // When data was fetched
  },
  delhi: { ... }
}

If a city is searched again within 10 minutes, data is used from cache.

If older than 10 minutes, the data is removed and fetched again.

🧼 City Name Normalization

We remove accents/special characters from city names using normalizeCityName()
E.g., Gangānagar → ganganagar

This helps with consistent storage and comparison.

 ---

🧪 Redux Store Structure

Redux is used to manage the following:

{
  data: {},                  // Current weather
  forecast: [],              // 5-day forecast
  loading: true,             // Loader flag
  error: "",                 // Error message
  oldInputVal: null,         // Previously searched input
  useCurrentLocation: true,  // Toggle to use geolocation
  storedData: {}             // Cached weather data per city
}

Actions:

setData()

setLoader()

setError()

setUseCurrentLocation()

setStoredData()

setRemoveStoredData()

Tech Stack

⚛️ React

🔄 Redux Toolkit

🎨 Tailwind CSS

🌍 OpenWeatherMap API

🔔 React Toastify

⏱️ React Icons

💻 How to Run Locally
1. Clone the repository
git clone https://github.com/yourusername/weather-app.git
cd weather-app

2. Install dependencies
npm install

3. Set up environment variables

Create a .env file in the root and add your OpenWeatherMap API key:

VITE_WEATHER_API_KEY=your_api_key_here

4. Start the development server
npm run dev

🔒 Environment Variables
Variable	Description
VITE_WEATHER_API_KEY	Your OpenWeatherMap API key

You can get your key here → https://openweathermap.org/api

🧠 Future Improvements

🌡️ Add support for Celsius/Fahrenheit toggle

🧠 Store data in localStorage for persistence

🌙 Add Dark Mode

🌍 Add internationalization (multi-language)

📊 Add graphs or charts for forecast

👨‍💻 Author

Developed by Bhavishya Jangid
🔗 GitHub: https://github.com/bhavishyajangid/Intership-assigment/tree/main/gurukool/wheaterApp

🔗 LinkedIn: https://www.linkedin.com/in/bhavishya-jangid-bb39212a4/



📄 License

This project is licensed under the MIT License.
You are free to use, modify, and distribute this project for personal or commercial purposes, as long as the original license is included.


---

### ✅ Notes

- This `README.md` includes **everything**:
  - Caching logic
  - Redux usage
  - Setup instructions
  - Environment config
  - Project structure
  - License
- You only need to **replace live and repo links** (and optionally your name or GitHub profile).

Let me know if you'd like me to export this as a downloadable `.md` file or help you deploy the app live.
