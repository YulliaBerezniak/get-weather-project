import React from 'react';

const WeatherCard = () => {
  return (
    <div className="weather-card">
      <h2>{weather?.location?.name}</h2> {/* City or location name */}
      <p>Temperature: {weather?.current?.temp_c}°C</p> {/* Current temperature */}
      <p>Condition: {weather?.current?.condition?.text}</p> {/* Weather condition */}
      <img src={weather?.current?.condition?.icon} alt="weather icon" /> {/* Weather icon */}
      <p>Weather Information</p>
    </div>
  );
};

export default WeatherCard;
  