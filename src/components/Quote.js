import { useEffect, useState } from "react";

function Quote() {
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchQuote() {
      try {
        const res = await fetch("https://api.api-ninjas.com/v1/quotes", {
          headers: { "X-Api-Key": "ebOkzrx1CP1teycPeTI4zg==XJkpaOpksCw1qqrA" } // 🔑 replace
        });
        const data = await res.json();
        setQuote(data[0]);
      } catch (err) {
        console.error(err);
        setError("Could not load quote.");
      }
    }
    fetchQuote();
  }, []);

  if (!quote) return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-6 shadow-lg animate-pulse h-32 text-white">
      <div className="w-3/4 h-6 bg-white/30 mb-3 rounded"></div>
      <div className="w-1/2 h-4 bg-white/20 rounded"></div>
    </div>
  );

  return (
    <div className="rounded-xl p-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg transition hover:scale-[1.02]">
      <h2 className="text-2xl font-semibold mb-2">💡 Motivational Quote</h2>
      <p className="italic text-lg">"{quote.quote}"</p>
      <p className="text-sm mt-2">— {quote.author}</p>
    </div>
  );
}

export default Quote;
