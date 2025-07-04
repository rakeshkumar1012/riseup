import { useEffect, useState } from "react";

function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "99a3cecda0cd43adf2d5487bd37cee1b"; // replace this
  const API_URL = `https://gnews.io/api/v4/top-headlines?lang=en&country=in&max=4&apikey=${API_KEY}`;

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (err) {
        console.error("Failed to fetch news:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="bg-gradient-to-r from-amber-400 to-yellow-500 rounded-xl p-6 shadow-lg animate-pulse h-44 text-white">
        <div className="w-1/2 h-6 bg-white/30 mb-3 rounded"></div>
        <div className="w-3/4 h-4 bg-white/20 mb-1 rounded"></div>
        <div className="w-2/3 h-4 bg-white/20 rounded"></div>
      </div>
    );
  }

  return (
    <div className="rounded-xl p-6 bg-gradient-to-r from-amber-400 to-yellow-500 text-white shadow-lg transition hover:scale-[1.02]">
      <h2 className="text-2xl font-semibold mb-4">📰 Top News Headlines</h2>
      <ul className="space-y-3">
        {articles.map((article, idx) => (
          <li key={idx}>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg hover:underline"
            >
              {idx + 1}. {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;
