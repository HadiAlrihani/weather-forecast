import { useState, useRef } from "react";

function SearchBar({ setCity }) {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const timeoutRef = useRef(null);
  const abortRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // cancel previous timer
    }

    if (abortRef.current) {
      abortRef.current.abort(); // cancel previous api call
    }

    if (value.length < 3) {
      setResults([]);
      return;
    }

    timeoutRef.current = setTimeout(async () => {
      try {
        abortRef.current = new AbortController();

        const res = await fetch(
          `/api/location?q=${encodeURIComponent(value)}`,
          { signal: abortRef.current.signal }
        );

        const data = await res.json();
        setResults(data);
        console.log(data);
      } catch (err) {
        if (err.name !== "AbortError") { // only log unexpected errors
          console.error(err);
        }
      }
    }, 300); // debounce delay
  };

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      if (input.trim() != "") {
        setCity(input.trim()); // updates city in App.jsx
        setInput(""); // clear the search bar
      }
    };
  }

  function selectCity(item) {
    var latitiude = item.lat;
    var longitude = item.lon;
    setCity(item.display_place);
  }

  return (

    <div className="relative flex flex-1 justify-end items-start">
    <input
      value={input}
      type="text"
      placeholder="Enter city name..."
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      className="h-10 w-64 px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border 
        border-white/20 text-white placeholder-white/70 focus:outline-none 
        focus:ring-2 focus:ring-white/30 shadow-md"
    />

    {results.length > 0 && (
      <ul
        id="suggestions"
        className="absolute top-full mt-1 w-64 rounded-xl 
          bg-black/80 backdrop-blur-md text-white 
          border border-white/20 shadow-lg z-50"
      >
        {results.map((item) => (
          <li
            key={item.place_id}
            onClick={() => selectCity(item)}
            className="px-3 py-2 hover:bg-white/10 cursor-pointer"
          >
            {item.display_name}
          </li>
        ))}
      </ul>
    )
    }
  </div>

  )
}

export default SearchBar