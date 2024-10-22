import React, { useState } from 'react';
import { getCurrentWeather } from '../api';

const Search = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const data = await getCurrentWeather(city);  // Fetch current weather data
      setWeatherData(data);  // Save the fetched data to state
      setError('');  // Clear any previous errors
    } catch (err) {
      setError('City not found or other error');
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <div className="search-buttons">
        <button onClick={handleSearch}>
          <i className="fas fa-search"></i> {/* Search icon */}
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
      {weatherData && (
        <div className="weather-info">
          <h3>{weatherData.location.name}</h3>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Condition: {weatherData.current.condition.text}</p>
        </div>
      )}
    </div>
  );
};

export default Search;
