import { useEffect, useState } from "react";

function Quote() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    async function fetchQuote() {
      try {
        const response = await fetch("https://zenquotes.io/api/random");
        const data = await response.json();
        setQuote(data[0]);
      } catch (error) {
        console.error("Quote fetch error:", error);
      }
    }

    fetchQuote();
  }, []);

  if (!quote) return <p>Loading quote...</p>;

  return (
    <div className="rounded-xl p-6 bg-gradient-to-r from-indigo-400 to-purple-500 shadow-lg transition hover:scale-[1.02] text-white">
      <h2 className="text-2xl font-semibold mb-2">💡 Motivational Quote</h2>
      <p className="italic text-lg">"{quote.q}"</p>
      <p className="text-sm mt-2 text-right">- {quote.a}</p>
    </div>
  );
}

export default Quote;
