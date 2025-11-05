import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables from .env into process.env
dotenv.config();

// Create an Express app instance
const app = express();

// Define the port — use the value from .env, or default to 5000
const PORT = process.env.PORT || 5000;


// Enable Cross-Origin Resource Sharing so your frontend can call this backend
app.use(cors());

// Parse JSON bodies (from POST/PUT requests, if needed)
app.use(express.json());

// A simple route to test if the server is running
app.get("/", (req, res) => {
  res.send("Weather backend is running");
});

app.get("/weather", async (req, res) => {
  // Get the 'city' parameter from the URL query string
  const city = req.query.city;

  // Get the API key from environment variables
  const apiKey = process.env.WEATHER_API_KEY;

  // Check if the city parameter is missing
  if (!city) {
    // Send a 400 Bad Request response
    return res.status(400).json({ error: "City is required" });
  }

  try {
    // Make a GET request to WeatherAPI
    const response = await axios.get("https://api.weatherapi.com/v1/forecast.json", {
      params: {
        key: apiKey,  // API key from .env
        q: city,      // City name
        days: 6
      },
    });

    // If successful, send the weather data back to the frontend
    res.json(response.data);

  } catch (error) {
    // If something goes wrong (e.g. bad city name, network error)
    console.error("Error fetching weather data:", error.message);

    // Respond with an error message and a 500 Internal Server Error code
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

// Begin listening for incoming requests
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});