import Weather from "./components/Weather";
import Quote from "./components/Quote";
import Task from "./components/Task";
import News from "./components/News";
import Exercise from "./components/Exercise";
function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-950 via-gray-900 to-black text-white px-4 py-10">
      <h1 className="text-4xl font-bold mb-10 text-center text-cyan-300 animate-pulse">
        🚀 RiseUp — Start Your Day Right
      </h1>

      <div className="w-full max-w-4xl space-y-6">
        {/* Greeting */}
        <Section title="👋 Greeting" gradient="from-purple-500 to-pink-500">
          <p className="text-white/90">Good Morning, Rakesh!</p>
        </Section>
        


        {/* Weather */}
        <Section title="🌤️ Weather" gradient="from-blue-400 to-cyan-500">
          
          <p className="text-white/90">API will show your local weather here.</p>
          <Weather />
        </Section>

        {/* Quote */}
        <Section title="💡 Motivational Quote" gradient="from-yellow-400 to-orange-500">
          <Quote />
        </Section>

        {/* Daily Task */}
        <Section title="🎯 Aim for the Day" gradient="from-green-400 to-lime-500">
          <p className="text-white/90">Stay focused and finish your tasks today.</p>
          <Task />
        </Section>

        {/* News */}
        
          
          <News/>
        

        {/* Exercise */}
        <Section title="🏋️‍♂️ Exercise Suggestion" gradient="from-indigo-500 to-purple-700">
          <Exercise/>
          
        </Section>

        {/* Commute */}
        <Section title="🚗 Commute Suggestion" gradient="from-sky-500 to-blue-600">
          <p className="text-white/90">
            Based on current traffic, leave by 8:15 AM. Prefer cab or auto.
          </p>
        </Section>
      </div>
    </div>
  );
}

// Reusable Box Component
function Section({ title, gradient, children }) {
  return (
    <div
      className={`rounded-xl shadow-lg p-6 bg-gradient-to-r ${gradient} transition duration-300 hover:scale-[1.02]`}
    >
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <div className="text-lg">{children}</div>
    </div>
  );
}

export default App;
