import axios from "axios";

export default async function handler(req, res) {
  const city = req.query.city;
  const apiKey = process.env.WEATHER_API_KEY;

  if (!city) {
    return res.status(400).json({ error: "City is required" });
  }

  try {
    const response = await axios.get("https://api.weatherapi.com/v1/forecast.json", {
      params: {
        key: apiKey,
        q: city,
        days: 6,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching weather data:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
}