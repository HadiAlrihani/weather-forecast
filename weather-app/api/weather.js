export default async function handler(req, res) {
  const { lat, lon } = req.query;

  const latitude = Number(lat);
  const longitude = Number(lon);

  if (
    Number.isNaN(latitude) ||
    Number.isNaN(longitude) ||
    latitude < -90 || latitude > 90 ||
    longitude < -180 || longitude > 180
  ) {
    return res.status(400).json({ error: "Invalid coordinates", });
  }

  try {
    // call openweathermap
    const url =
      `https://api.openweathermap.org/data/3.0/onecall` +
      `?lat=${latitude}&lon=${longitude}` +
      `&exclude=minutely,hourly,alerts` +
      `&units=metric` +
      `&appid=${process.env.OPENWEATHER_KEY}`;
    const response = await fetch(url);

    const data = await response.json();

    //sned data back to frontend
    res.status(200).json(data);
  } catch(err) { 
      res.status(500).json({ error: "Failure fetching weather data."});
  }

}
