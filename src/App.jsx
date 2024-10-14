import Header from './components/Header';
import Search from './components/Search';
import WeatherCard from './components/WeatherCard';
import DaySwitcher from './components/DaySwitcher';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <WeatherCard />
      <DaySwitcher />
    </div>
  );
}

export default App;
