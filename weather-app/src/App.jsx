import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-[20vh] bg-sky-900 text-white p-5 flex flex-row'>
      <div className='flex flex-1 flex-col items-start'>
        <h1 className='text-4xl font-mono font-bold'>City name</h1>
        <h2>Date and Time</h2>
      </div>
      <div className='flex flex-1 justify-end'>
        search bar here
      </div>
    </div>
  )
}

export default App
