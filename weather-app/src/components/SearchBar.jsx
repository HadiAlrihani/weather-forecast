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
    setCoordinates({lat: item.lat, lon: item.lon});
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
      className="h-3/5 w-1/2 px-3 bg-slate-100 rounded-xl background-blur-md 
                shadow-sm shadow-sky-900 dark:bg-sky-900"
    />

    {results.length > 0 && (
      <ul
        id="suggestions"
        className="absolute top-3/4 w-1/2 rounded-xl bg-slate-100 
                  background-blur-md shadow-sm shadow-sky-900 z-50
                  dark:bg-sky-900"
      >
        {results.map((item) => (
          <li
            key={item.place_id}
            onClick={() => selectCity(item)}
            className="px-3 py-2 hover:bg-slate-300 rounded-xl cursor-pointer
                      dark:hover:bg-sky-700"
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