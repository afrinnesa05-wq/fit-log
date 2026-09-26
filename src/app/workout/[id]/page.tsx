import Image from "next/image";
import Link from "next/link";
import WorkoutActions from "@/components/workout/WorkoutActions";

const WorkoutDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch workout");
  }

  const workout = await response.json();

  return (
    <main className="min-h-screen bg-black px-4 py-10 text-white md:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Back Button */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-400 transition hover:text-[#ccff00]"
        >
          ← Back to workouts
        </Link>

        {/* Main Content */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* LEFT - IMAGE */}
          <div>
            <div className="overflow-hidden rounded-3xl bg-[#111111]">
              <Image
                src={workout.image}
                alt={workout.name}
                width={900}
                height={700}
                className="h-[400px] w-full object-cover md:h-[550px]"
              />
            </div>
          </div>

          {/* RIGHT - DETAILS */}
          <div className="flex flex-col justify-center">

            {/* Category */}
            <div className="mb-5 flex flex-wrap gap-2">
              {workout.muscleGroups?.map(
                (group: string) => (
                  <span
                    key={group}
                    className="rounded-full bg-[#ccff00] px-4 py-2 text-xs font-black text-black"
                  >
                    {group.toUpperCase()}
                  </span>
                )
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl font-black uppercase leading-tight md:text-6xl">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
              {workout.description}
            </p>

            {/* Specs */}
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">

              <div className="rounded-xl border border-gray-800 bg-[#111111] p-4">
                <p className="text-xs uppercase text-gray-500">
                  Equipment
                </p>
                <p className="mt-2 font-bold">
                  {workout.equipment || "No equipment"}
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-[#111111] p-4">
                <p className="text-xs uppercase text-gray-500">
                  Difficulty
                </p>
                <p className="mt-2 font-bold">
                  {workout.difficulty}
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-[#111111] p-4">
                <p className="text-xs uppercase text-gray-500">
                  Sets
                </p>
                <p className="mt-2 font-bold">
                  {workout.sets}
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-[#111111] p-4">
                <p className="text-xs uppercase text-gray-500">
                  Reps
                </p>
                <p className="mt-2 font-bold">
                  {workout.reps}
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-[#111111] p-4">
                <p className="text-xs uppercase text-gray-500">
                  Duration
                </p>
                <p className="mt-2 font-bold">
                  {workout.duration} min
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-[#111111] p-4">
                <p className="text-xs uppercase text-gray-500">
                  Calories
                </p>
                <p className="mt-2 font-bold">
                  {workout.caloriesBurned} kcal
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-[#111111] p-4">
                <p className="text-xs uppercase text-gray-500">
                  Rating
                </p>
                <p className="mt-2 font-bold">
                  ⭐ {workout.rating}
                </p>
              </div>

            </div>

            {/* Instructions */}
            <div className="mt-10">
              <h2 className="text-2xl font-black uppercase">
                Instructions
              </h2>

              <ol className="mt-5 space-y-4">
                {workout.instructions?.map(
                  (instruction: string, index: number) => (
                    <li
                      key={index}
                      className="flex gap-4 rounded-xl border border-gray-800 bg-[#111111] p-4"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ccff00] text-sm font-black text-black">
                        {index + 1}
                      </span>

                      <p className="leading-6 text-gray-300">
                        {instruction}
                      </p>
                    </li>
                  )
                )}
              </ol>
            </div>

            {/* ACTIONS */}
            <WorkoutActions
              workout={{
                id: String(workout.id || id),
                title: workout.name,
                image: workout.image,
                equipment:
                  workout.equipment || "No equipment",
                duration: Number(workout.duration) || 0,
                calories:
                  Number(workout.caloriesBurned) || 0,
                rating: Number(workout.rating) || 0,
              }}
            />

          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetails;