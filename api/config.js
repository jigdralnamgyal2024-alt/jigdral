// api/config.js
export default function handler(req, res) {
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

  if (!GEMINI_API_KEY) {
    return res.status(500).json({ error: "Missing key" });
  }

  res.status(200).json({ apiKey: GEMINI_API_KEY });
}
