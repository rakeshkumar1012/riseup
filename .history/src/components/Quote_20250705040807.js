import { useEffect, useState } from "react";

function Quote() {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      const apiKey = "YOUR_API_KEY_HERE"; // 🔐 Replace with your key
      const url = "https://quotes.rest/qod?category=inspire";

      try {
        const response = await fetch(url, {
          headers: {
            Accept: "application/json",
            "X-TheySaidSo-Api-Secret": apiKey,
          },
        });

        const data = await response.json();

        if (data?.contents?.quotes?.length > 0) {
          setQuote(data.contents.quotes[0].quote);
          setAuthor(data.contents.quotes[0].author);
        } else {
          setError("No quote available.");
        }
      } catch (err) {
        console.error("Quote API error:", err);
        setError("Failed to load quote.");
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="rounded-xl p-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transition hover:scale-[1.02]">
      <h2 className="text-2xl font-semibold mb-2">💡 Motivational Quote</h2>
      {quote ? (
        <>
          <p className="italic text-lg">"{quote}"</p>
          <p className="text-sm mt-2">— {author}</p>
        </>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>Loading quote...</p>
      )}
    </div>
  );
}

export default Quote;
