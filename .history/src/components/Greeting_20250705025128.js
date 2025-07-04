// src/components/Greeting.js
function Greeting() {
  const hour = new Date().getHours();
  let message = "Good Morning";

  if (hour >= 12 && hour < 18) message = "Good Afternoon";
  else if (hour >= 18) message = "Good Evening";

  return (
    <div className="text-2xl font-bold text-white mb-4">
      🌅 {message}, Rakesh!
    </div>
  );
}

export default Greeting;
