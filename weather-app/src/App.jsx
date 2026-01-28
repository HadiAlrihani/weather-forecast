import React, { useEffect, useState } from 'react'
import './App.css'
import LocationDate from './components/LocationDate'
import SearchBar from './components/SearchBar'
import Temperature from "./components/Temperature"
import TodayDetails from "./components/TodayDetails"
import ForecastDay from './components/ForecastDay'
import useCityClock from './hooks/useCityClock'

function App() {
  const [count, setCount] = useState(0);
  const [city, setCity] = useState("Calgary");
  const [weather, setWeather] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const localTime = useCityClock(weather?.location?.tz_id);
  const isDay = weather?.current?.is_day === 1

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch(`/api/weather?city=${city}`);
        const data = await res.json();
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    }
    // Fetch immediately when city changes
    fetchWeather();

    // Set up interval to refresh every 60 seconds
    const interval = setInterval(fetchWeather, 60000);

    // Cleanup interval when component unmounts or city changes
    return () => clearInterval(interval);

  }, [city]);

  return (
    <div className={`bg-slate-50 dark:bg-sky-950`}>
      <div className='h-[20vh] pl-[4%] pr-[4%] pt-[4%] flex flex-row'>
        <LocationDate city={city || "Loading..."} 
                      date={localTime || ""} />
        <SearchBar setCity={setCity} setCoordinates={setCoordinates} />
      </div>
      <div className="h-[40vh] flex flex-row pr-[4%] pl-[4%]">
        <Temperature temp={Math.round(weather?.current?.temp_c) || "--"} 
                     cond={weather?.current?.condition?.text || "loading"} />
        <TodayDetails feelsLike={weather?.current?.feelslike_c || "--"}
                      wind={ weather?.current?.wind_kph || "--"} 
                      icon={`https:${weather?.current?.condition?.icon.replace("64x64", "128x128")}`} />
      </div>
      <div className='h-[40vh] flex items-stretch pl-[4%] pr-[4%] pt-[2%] pb-[2%] box-border'>
        <div className="flex flex-row flex-1 box-border p-[4%] rounded-xl bg-slate-100 
                        backdrop-blur-md shadow-md shadow-sky-900
                        dark:bg-sky-900">
          <ForecastDay day={weather?.forecast?.forecastday?.[1]?.date || "Loading..."}
                       high={weather?.forecast?.forecastday?.[1]?.day?.maxtemp_c || "--"}
                       low={weather?.forecast?.forecastday?.[1]?.day?.mintemp_c || "--"}
                       icon={`https:${weather?.forecast?.forecastday?.[1]?.day?.condition?.icon.replace("64x64", "128x128")}`} />

          <ForecastDay day={weather?.forecast?.forecastday?.[2]?.date || "Loading..."}
                       high={weather?.forecast?.forecastday?.[2]?.day?.maxtemp_c || "--"}
                       low={ weather?.forecast?.forecastday?.[2]?.day?.mintemp_c || "--"}
                       icon={`https:${weather?.forecast?.forecastday?.[2]?.day?.condition?.icon.replace("64x64", "128x128")}`} />

          <ForecastDay day={weather?.forecast?.forecastday?.[3]?.date || "Loading..."}
                       high={weather?.forecast?.forecastday?.[3]?.day?.maxtemp_c || "--"}
                       low={ weather?.forecast?.forecastday?.[3]?.day?.mintemp_c || "--"}
                       icon={`https:${weather?.forecast?.forecastday?.[3]?.day?.condition?.icon.replace("64x64", "128x128")}`} />
        </div>
      </div>
    </div>
  )
}

export default App
