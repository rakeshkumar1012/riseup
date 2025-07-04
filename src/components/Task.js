import { useEffect, useState } from "react";

function DailyTask() {
  const [task, setTask] = useState("");

  useEffect(() => {
    const aims = [
      "🎯 Learn something new today",
      "🧘 Practice 10 minutes of mindfulness",
      "📖 Read at least 5 pages of a book",
      "💪 Do a quick workout session",
      "🧹 Organize your desk or workspace",
      "📝 Write down your top 3 priorities",
      "🧠 Solve one coding challenge",
      "🙌 Reach out to a friend you haven’t talked to in a while",
      "🌱 Take a break in nature or go for a short walk"
    ];

    const randomAim = aims[Math.floor(Math.random() * aims.length)];
    setTask(randomAim);
  }, []);

  return (
    <div className="rounded-xl p-6 bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-lg transition hover:scale-[1.02]">
      <h2 className="text-2xl font-semibold mb-2">📌 AIM for the Day</h2>
      {task ? (
        <p className="text-lg">{task}</p>
      ) : (
        <p>Loading your daily aim...</p>
      )}
    </div>
  );
}

export default DailyTask;
