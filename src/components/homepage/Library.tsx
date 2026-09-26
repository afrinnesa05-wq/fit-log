import WorkoutCard from "./WorkoutCard";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

const Library = async () => {
 const response = await fetch(API_URL, {
  cache: "no-store",
});

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const workouts = await response.json();

  return (
    <section
      id="library"
      className="bg-black px-4 py-16 text-white md:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-bold tracking-[0.2em] text-[#ccff00]">
            WORKOUTS
          </p>

          <h2 className="text-4xl font-black uppercase md:text-5xl">
            THE LIBRARY
          </h2>

          <p className="mt-3 text-gray-400">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Workout Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout: any) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Library;