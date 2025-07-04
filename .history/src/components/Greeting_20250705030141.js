function Greeting() {
  const hour = new Date().getHours();
  let message = "Good Morning";

  if (hour >= 12 && hour < 18) message = "Good Afternoon";
  else if (hour >= 18) message = "Good Evening";

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:shadow-lg transition-shadow duration-300 hover:border-yellow-300">
      <h2 className="text-xl font-semibold mb-2 text-yellow-300">👋 Greeting</h2>
      <p className="text-white/80">{message}, Rakesh!</p>
    </div>
  );
}

export default Greeting;
