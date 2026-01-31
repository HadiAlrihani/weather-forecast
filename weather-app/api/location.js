export default async function handler(req, res) {
    const { q } = req.query; //get query form url

    if (!q || q.length < 3) {
        return res.status(400).json([]);
    }

    try {
        //call LocationIQ
        const response = await fetch(
            `https://api.locationiq.com/v1/autocomplete?key=${process.env.LOCATIONIQ_KEY}&q=${q}
            &tag=place%3Acity&dedupe=1&accept-language=en&limit=5&format=json`
        );

        const data = await response.json();
        
        //send back to frontend
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: "location lookup failed."});
    }
}