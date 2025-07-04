import { useEffect, useState } from "react";

function Exercise() {
  const [exercise, setExercise] = useState(null);

  const dummyExercises = [
    {
      name: "Push-ups",
      description: "Do 3 sets of 15 reps to strengthen your upper body.",
    },
    {
      name: "Jumping Jacks",
      description: "Do 3 sets of 30 seconds to boost your cardio.",
    },
    {
      name: "Plank",
      description: "Hold for 1 minute to strengthen your core.",
    },
    {
      name: "Squats",
      description: "Do 3 sets of 20 reps to tone your legs.",
    },
    {
      name: "Yoga – Sun Salutation",
      description: "Complete 5 rounds for full-body flexibility.",
    },
  ];

  useEffect(() => {
    // Simulate API delay
    const timeout = setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * dummyExercises.length);
      setExercise(dummyExercises[randomIndex]);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="rounded-xl p-6 bg-gradient-to-r from-teal-400 to-blue-500 text-white shadow-lg transition hover:scale-[1.02]">
      <h2 className="text-2xl font-semibold mb-2">💪 Exercise Suggestion</h2>
      {exercise ? (
        <>
          <p className="text-xl font-bold">{exercise.name}</p>
          <p>{exercise.description}</p>
        </>
      ) : (
        <p>Loading your workout...</p>
      )}
    </div>
  );
}

export default Exercise;
