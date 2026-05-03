// api/config.js
export default function handler(req, res) {
  const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

  if (!OPENROUTER_API_KEY) {
    return res.status(500).json({ error: "Missing OpenRouter key" });
  }

  res.status(200).json({ apiKey: OPENROUTER_API_KEY });
}
