//weather icons: https://www.flaticon.com/packs/weather-538

import { useState } from 'react'
import './App.css'
import Header from './components/header'
import WeatherToday from './components/WeatherToday'
import Forecast from './components/Forecast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <WeatherToday />
      <div className='h-[40vh] flex items-stretch pl-[4%] pr-[4%] pt-[2%] pb-[2%] box-border'>
        <Forecast />
      </div>
    </>
  )
}

export default App
