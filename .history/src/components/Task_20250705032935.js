import { useEffect, useState } from "react";

function Task() {
  const [task, setTask] = useState(null);

  useEffect(() => {
    async function fetchTask() {
      try {
        const response = await fetch("https://www.boredapi.com/api/activity");
        const data = await response.json();
        setTask(data);
      } catch (error) {
        console.error("Task fetch error:", error);
      }
    }

    fetchTask();
  }, []);

  if (!task)
    return (
      <div className="rounded-xl p-6 bg-gradient-to-r from-green-400 to-lime-500 shadow-lg animate-pulse h-24 text-white">
        <div className="w-3/4 h-5 bg-white/30 mb-3 rounded"></div>
        <div className="w-1/2 h-4 bg-white/20 rounded"></div>
      </div>
    );

  return (
    <div className="rounded-xl p-6 bg-gradient-to-r from-green-400 to-lime-500 shadow-lg transition hover:scale-[1.02] text-white">
      <h2 className="text-2xl font-semibold mb-2">🧠 AIM for Today</h2>
      <p className="text-lg italic">{task.activity}</p>
      <p className="text-sm mt-2">Type: {task.type}</p>
    </div>
  );
}

export default Task;
