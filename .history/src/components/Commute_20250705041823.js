import { useEffect, useState } from "react";

function Commute() {
  const [duration, setDuration] = useState(null);
  const [leaveTime, setLeaveTime] = useState("");
  const [mode, setMode] = useState("");

  useEffect(() => {
    const fetchCommuteTime = async () => {
      const apiKey = "eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6IjVlOGE3M2RkYTYzNjQ1YThiMTQ5ZWNmNzJlMzk3OGUyIiwiaCI6Im11cm11cjY0In0=";
      const url = "https://api.openrouteservice.org/v2/directions/driving-car";
      const body = {
        coordinates: [
          [77.6101, 12.9166], // BTM Layout (lng, lat)
          [77.6170, 12.9250], // Madiwala
        ],
      };

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Authorization": apiKey,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });

        const data = await response.json();
        const seconds = data.routes[0].summary.duration;
        const mins = Math.round(seconds / 60);
        setDuration(mins);

        const arrival = new Date();
        arrival.setHours(9, 0, 0, 0); // 9:00 AM
        const leave = new Date(arrival.getTime() - mins * 60000);
        const leaveFormatted = leave.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        setLeaveTime(leaveFormatted);

        if (mins <= 10) setMode("🛵 Take a Bike Taxi");
        else if (mins <= 20) setMode("🚗 Take a Cab or Auto");
        else setMode("🚌 Take a Public Bus (Traffic Alert)");
      } catch (err) {
        console.error("Commute API error:", err);
      }
    };

    fetchCommuteTime();
  }, []);

  return (
    <div className="rounded-xl p-6 bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg transition hover:scale-[1.02]">
      <h2 className="text-2xl font-semibold mb-2">🚦 Commute Suggestion</h2>
      <p className="text-lg mb-2">📍 <strong>From:</strong> BTM Layout &nbsp;&nbsp;&nbsp; <strong>To:</strong> Madiwala</p>

      {duration ? (
        <>
          <p className="text-lg">🕒 Estimated Travel Time: <strong>{duration} mins</strong></p>
          <p className="text-lg">🎯 To reach by <strong>9:00 AM</strong>, leave by <strong>{leaveTime}</strong></p>
          <p className="text-lg mt-2">{mode}</p>
        </>
      ) : (
        <p>Loading commute details...</p>
      )}
    </div>
  );
}

export default Commute;
