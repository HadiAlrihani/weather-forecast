import React, { useEffect, useState } from 'react'
import './App.css'
import Location from './components/Location'
import SearchBar from './components/SearchBar'
import Temperature from "./components/Temperature"
import TodayDetails from "./components/TodayDetails"
import ForecastDay from './components/ForecastDay'

function App() {
  const [location, setLocation] = useState({city: "Calgary", country: "Canada"});
  const [weather, setWeather] = useState(null);
  const [coordinates, setCoordinates] = useState({lat: 51, lon: -114});
  const TEN_MINUTES = 600000; // in milliseconds

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch(`/api/weather?lat=${coordinates.lat}&lon=${coordinates.lon}`);
        const data = await res.json();
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    }
    // Fetch immediately when city changes
    fetchWeather();

    // Set up interval to refresh every 60 seconds
    const interval = setInterval(fetchWeather, TEN_MINUTES);

    // Cleanup interval when component unmounts or city changes
    return () => clearInterval(interval);

  }, [location]);

  return (
    <div className={`bg-slate-200 dark:bg-sky-950`}>
      <div className='h-[20vh] pl-[4%] pr-[4%] pt-[4%] flex flex-row'>
        <Location place={location || "Loading..."}/>
        <SearchBar setLocation={setLocation} setCoordinates={setCoordinates} />
      </div>
      <div className="h-[40vh] flex flex-row pr-[4%] pl-[4%]">
        <Temperature temp={Math.round(weather?.current?.temp) || "--"} 
                    cond={weather?.current?.weather?.[0]?.description || "loading"} />

        <TodayDetails feelsLike={weather?.current?.feels_like|| "--"}
                      wind={ weather?.current?.wind_speed || "--"}
                      icon={`https://openweathermap.org/img/wn/${weather?.current?.weather?.[0]?.icon}@4x.png`} 
                      />
      </div>
      <div className='h-[40vh] flex items-stretch pl-[4%] pr-[4%] pt-[2%] pb-[2%] box-border'>
        <div className="flex flex-row flex-1 box-border p-[4%] rounded-xl bg-slate-300 
                        backdrop-blur-md shadow-md shadow-sky-900
                        dark:bg-sky-900">
          <ForecastDay day={new Date(weather?.daily?.[1]?.dt * 1000).toLocaleString() || "Loading..."}
                       high={weather?.daily?.[1]?.temp?.max || "--"}
                       low={weather?.daily?.[1]?.temp?.min || "--"}
                       icon={`https://openweathermap.org/img/wn/${weather?.daily?.[1].weather?.[0]?.icon}@4x.png`} />

          <ForecastDay day={new Date(weather?.daily?.[2]?.dt * 1000).toLocaleString() || "Loading..."}
                       high={weather?.daily?.[2]?.temp?.max || "--"}
                       low={weather?.daily?.[2]?.temp?.min || "--"}
                       icon={`https://openweathermap.org/img/wn/${weather?.daily?.[2].weather?.[0]?.icon}@4x.png`} />

          <ForecastDay day={new Date(weather?.daily?.[3]?.dt * 1000).toLocaleString() || "Loading..."}
                       high={weather?.daily?.[3]?.temp?.max || "--"}
                       low={weather?.daily?.[3]?.temp?.min || "--"}
                       icon={`https://openweathermap.org/img/wn/${weather?.daily?.[3].weather?.[0]?.icon}@4x.png`} />
          
          <ForecastDay day={new Date(weather?.daily?.[4]?.dt * 1000).toLocaleString() || "Loading..."}
                       high={weather?.daily?.[4]?.temp?.max || "--"}
                       low={weather?.daily?.[4]?.temp?.min || "--"}
                       icon={`https://openweathermap.org/img/wn/${weather?.daily?.[4].weather?.[0]?.icon}@4x.png`} />
          
          <ForecastDay day={new Date(weather?.daily?.[5]?.dt * 1000).toLocaleString() || "Loading..."}
                       high={weather?.daily?.[5]?.temp?.max || "--"}
                       low={weather?.daily?.[5]?.temp?.min || "--"}
                       icon={`https://openweathermap.org/img/wn/${weather?.daily?.[5].weather?.[0]?.icon}@4x.png`} />
        </div>
      </div>
    </div>
  )
}

export default App
