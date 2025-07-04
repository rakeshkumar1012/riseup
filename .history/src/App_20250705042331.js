import Greeting from "./Greeting";
import Weather from "./Weather";
import Quote from "./Quote";
import DailyTask from "./DailyTask";
import News from "./News";
import Exercise from "./Exercise";
import Commute from "./Commute";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white flex flex-col items-center justify-center px-4 py-10 space-y-8">
      <h1 className="text-4xl font-bold text-center drop-shadow-lg">🌅 RiseUp</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
        <Greeting />
        <Weather />
        <Quote />
        <DailyTask />
        <News />
        <Exercise />
        <Commute />
      </div>

      <footer className="mt-10 text-sm text-white/60">Crafted with ❤️ at Call2Code 2025</footer>
    </div>
  );
}

export default App;
