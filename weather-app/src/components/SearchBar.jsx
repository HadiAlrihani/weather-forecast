import { useState } from "react";

function SearchBar({ setCity }) {
  const [input, setInput] = useState("");

  function handleClick() {
    if (input.trim() != "") {
      setCity(input.trim()); // updates city in App.jsx
      setInput(""); // optional: clear the search bar
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleClick();
  }

  return (
    <div className="flex flex-1 justify-end items-top">
      <input
        value={input}
        type="text"
        placeholder="Enter city name..."
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="h-10 px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border 
        border-white/20 text-white placeholder-white/70 focus:outline-none 
        focus:ring-2 focus:ring-white/30 shadow-md"
      />
      <button onClick={handleClick} className="bg-slate-50 rounded-xl text-gray-500 h-10 px-4 ml-2">
        Search
      </button>
    </div>
  )
}

export default SearchBar