//weather icons: https://www.flaticon.com/packs/weather-538

import { useState } from 'react'
import './App.css'
import Header from './components/header'
import WeatherToday from './components/WeatherToday'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <WeatherToday />
    </>
  )
}

export default App
