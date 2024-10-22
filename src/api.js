const API_KEY = '6e04e115ad2b496db6d195350242210';
const BASE_URL = 'https://api.weatherapi.com/v1';

// Function to get current weather data for a city
export const getCurrentWeather = async (city) => {
  try {
    const response = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${city}`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error.message);
    }

    return data;  // Returns the current weather data
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

// Function to get forecast weather data for today and tomorrow
export const getForecast = async (city) => {
  try {
    const response = await fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=2`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error.message);
    }

    return data.forecast.forecastday;  // Returns forecast data for today and tomorrow
  } catch (error) {
    console.error('Error fetching forecast data:', error);
    throw error;
  }
};