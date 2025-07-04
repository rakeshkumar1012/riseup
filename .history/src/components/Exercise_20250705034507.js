import { useEffect, useState } from "react";

function Exercise() {
  const [exercise, setExercise] = useState(null);

  useEffect(() => {
    async function fetchExercise() {
      try {
        const response = await fetch(
          "https://wger.de/api/v2/exercise/?language=2&limit=20"
        );
        const data = await response.json();
        const filtered = data.results.filter((ex) => ex.description && ex.name.length < 40);
        const random = filtered[Math.floor(Math.random() * filtered.length)];
        setExercise(random);
      } catch (error) {
        console.error("Exercise fetch error:", error);
      }
    }

    fetchExercise();
  }, []);

  if (!exercise) {
    return (
      <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl p-6 shadow-lg animate-pulse h-32 text-white">
        <div className="w-1/2 h-6 bg-white/30 mb-3 rounded"></div>
        <div className="w-3/4 h-4 bg-white/20 mb-1 rounded"></div>
      </div>
    );
  }

  return (
    <div className="rounded-xl p-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg transition hover:scale-[1.02]">
      <h2 className="text-2xl font-semibold mb-2">🏃 Exercise for Today</h2>
      <p className="text-lg font-bold">{exercise.name}</p>
      <div
        className="text-sm mt-2"
        dangerouslySetInnerHTML={{ __html: exercise.description }}
      />
    </div>
  );
}

export default Exercise;
