import Greeting from './components/Greeting';
import Weather from './components/Weather';
import Quote from './components/Quote';
import DailyTask from './components/DailyTask';
import News from './components/News';
import Exercise from './components/Exercise';
import Commute from './components/Commute';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e1e2f] to-[#3a3a4f] text-white px-4 py-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <Greeting />
        <Weather />
        <Quote />
        <DailyTask />
        <News />
        <Exercise />
        <Commute />
      </div>
    </div>
  );
}

export default App;
