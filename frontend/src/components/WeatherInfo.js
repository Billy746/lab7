import React, { useState, useEffect } from "react";

function WeatherInfo() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch("https://app-portfolio-lab7.netlify.app/.netlify/functions/api/weather") 
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((error) => console.error("Error fetching weather:", error));
  }, []);

  return (
    <div>
      <h2>Weather Info</h2>
      {weather ? (
        <p>
          {weather.city}: {weather.temperature.current}°C, Humidity: {weather.humidity}%
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default WeatherInfo;
