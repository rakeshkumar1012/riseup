function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg transition-all duration-300 hover:scale-105">
          🌈 Colorful Centered Layout
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Section title="🟣 Section 1" bg="from-purple-400 to-purple-600">
            This is the first colorful box.
          </Section>
          <Section title="🔵 Section 2" bg="from-blue-400 to-blue-600">
            Here's some content in another vibrant section.
          </Section>
          <Section title="🟢 Section 3" bg="from-green-400 to-green-600">
            Fully responsive and modern look.
          </Section>
          <Section title="🔴 Section 4" bg="from-red-400 to-red-600">
            Smooth hover transitions for engagement.
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, bg, children }) {
  return (
    <div
      className={`bg-gradient-to-br ${bg} text-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300`}
    >
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-white/90">{children}</p>
    </div>
  );
}

export default App;
