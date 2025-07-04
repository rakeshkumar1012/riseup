import { useState, useEffect } from "react";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = "5095941ff89867f82f0a96500b2787cc"; // 🔁 replace with your real API key
  const CITY = "Hyderabad"; // or use navigator.geolocation for dynamic city

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        setWeather(data);
        setLoading(false);
      } catch (error) {
        console.error("Weather fetch error:", error);
        setLoading(false);
      }
    }

    fetchWeather();
  }, []);

  if (loading) return <p>Loading weather data...</p>;
  if (!weather || weather.cod !== 200)
    return <p>Unable to load weather right now.</p>;

  return (
    <div className="rounded-xl p-6 bg-gradient-to-r from-blue-400 to-cyan-500 shadow-lg transition hover:scale-[1.02] text-white">
      <h2 className="text-2xl font-semibold mb-2">🌤️ Weather</h2>
      <p className="text-lg">
        {weather.name}: {weather.weather[0].description}
      </p>
      <p className="text-lg">
        Temperature: {weather.main.temp}°C | Feels Like:{" "}
        {weather.main.feels_like}°C
      </p>
    </div>
  );
}

export default Weather;
