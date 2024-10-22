import React, { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import WeatherCard from './components/WeatherCard';
import DaySwitcher from './components/DaySwitcher';

function App() {
  const [selectedDay, setSelectedDay] = useState('today');
  const [weatherData, setWeatherData] = useState(null);

  const handleDaySwitch = (day) => {
    setSelectedDay(day);
  };
  const handleSearch = (data) => {
    setWeatherData(data);  // Save the fetched weather data
  };

  return (
    <div className="App">
      <Header />
      <Search onSearch={handleSearch} />  {/* Pass the handler as `onSearch` */}
      {weatherData && <WeatherCard weather={weatherData} selectedDay={selectedDay} />}  {/* Pass weather data and selected day to WeatherCard */}
      <DaySwitcher onSwitchDay={handleDaySwitch} selectedDay={selectedDay} />
    </div>
  );
}

export default App;