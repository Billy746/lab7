import React, { useState, useEffect } from 'react';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const response = await fetch(process.env.REACT_APP_WEATHER_URL);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setWeather(data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch weather data:", err);
        setError("Could not load weather data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
    
    // Refresh weather data every 30 minutes
    const interval = setInterval(fetchWeather, 30 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="card p-3 mb-4">
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card p-3 mb-4">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="card p-3 mb-4">
      <h5 className="card-title">Current Weather</h5>
      {weather && (
        <div className="card-body p-0">
          <h6>{weather.city}, {weather.country}</h6>
          <div className="d-flex justify-content-between">
            <div>
              <p className="mb-0">Temperature: {weather.temperature.current}°C</p>
              <p className="mb-0">Feels like: {weather.temperature.feels_like}°C</p>
            </div>
            <div>
              <p className="mb-0">Humidity: {weather.humidity}%</p>
              <p className="mb-0">Wind: {weather.wind.speed} m/s</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;