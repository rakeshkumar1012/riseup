// src/App.js
import Greeting from './components/Greeting';
import Weather from './components/Weather';
import Quote from './components/Quote';
import DailyTask from './components/DailyTask';
import News from './components/News';
import Exercise from './components/Exercise';
import Commute from './components/Commute';

function App() {
  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center mb-4 tracking-wide text-cyan-300 animate-pulse">
          🚀 RiseUp - Start Your Day Right
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Greeting />
          <Quote />
          <Weather />
          <DailyTask />
          <News />
          <Exercise />
          <Commute />
        </div>
      </div>
    </div>
  );
}

export default App;
