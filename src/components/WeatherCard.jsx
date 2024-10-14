const WeatherCard = ({ weatherData }) => {
    return (
      <div className="weather-card">
        <h2>{weatherData.city}</h2>
        <h3>{weatherData.temperature}°C</h3>
        <p>{weatherData.condition}</p>
        <p>Wind: {weatherData.wind} km/h</p>
        <p>Humidity: {weatherData.humidity}%</p>
      </div>
    );
  };

export default WeatherCard;
  