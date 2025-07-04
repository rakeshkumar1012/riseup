import { useEffect, useState } from "react";

function Commute() {
  const [suggestion, setSuggestion] = useState("Loading commute suggestion...");

  useEffect(() => {
    const travelModes = ["🚲 Bike", "🚕 Auto", "🚗 Cab", "🚌 Public Bus"];
    const random = Math.floor(Math.random() * travelModes.length);
    const selectedMode = travelModes[random];

    // Suggested leave time — this can be dynamic if using real API
    const leaveTime = "8:15 AM";

    const message = `
📍 From: BTM Layout
📍 To: Madiwala

🚦 Suggested Mode: ${selectedMode}
🕒 Leave by: ${leaveTime} to reach on time (9:00 AM)
    `;

    setSuggestion(message);
  }, []);

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-xl p-6 shadow-lg text-white transition hover:scale-[1.02]">
      <h2 className="text-2xl font-bold mb-4">🚦 Commute Suggestion</h2>
      <pre className="whitespace-pre-wrap text-lg font-mono">{suggestion}</pre>
    </div>
  );
}

export default Commute;
