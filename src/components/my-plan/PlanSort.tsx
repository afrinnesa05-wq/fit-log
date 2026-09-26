
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

import { usePlan } from "@/context/PlanContext";

const PlanSort = () => {
  const {
    todayPlan,
    savedWorkouts,
    removeFromTodayPlan,
    removeFromSaved,
  } = usePlan();

  const [activeTab, setActiveTab] = useState<"today" | "saved">(
    "today"
  );

  const [sortBy, setSortBy] = useState("duration");

  const [doneWorkouts, setDoneWorkouts] = useState<string[]>([]);

  const workouts =
    activeTab === "today" ? todayPlan : savedWorkouts;

  const sortedWorkouts = [...workouts].sort((a, b) => {
    if (sortBy === "calories") {
      return b.calories - a.calories;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return a.duration - b.duration;
  });

  const handleRemove = (index: number) => {
    if (activeTab === "today") {
      removeFromTodayPlan(index);
    } else {
      removeFromSaved(index);
    }

    toast.success("Workout removed");
  };

  const handleDone = (id: string) => {
    setDoneWorkouts((previous) => {
      if (previous.includes(id)) {
        return previous.filter((item) => item !== id);
      }

      return [...previous, id];
    });

    toast.success("Workout marked as done");
  };

  return (
    <>
      {/* Tabs + Sort */}
      <section className="mb-8">
        <div className="flex flex-col gap-4 border-b border-gray-800 pb-0 md:flex-row md:items-end md:justify-between">

          {/* Tabs */}
          <div className="flex gap-6 overflow-x-auto md:gap-8">
            <button
              onClick={() => setActiveTab("today")}
              className={`whitespace-nowrap pb-4 font-bold uppercase ${
                activeTab === "today"
                  ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                  : "text-gray-500"
              }`}
            >
              Today's Plan ({todayPlan.length})
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`whitespace-nowrap pb-4 font-bold uppercase ${
                activeTab === "saved"
                  ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                  : "text-gray-500"
              }`}
            >
              Saved ({savedWorkouts.length})
            </button>
          </div>

          {/* Sort */}
          <div className="mb-2 flex items-center gap-2 self-end">
            <label
              htmlFor="sort"
              className="whitespace-nowrap text-sm text-gray-400"
            >
              Sort by:
            </label>

            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-lg border border-gray-700 bg-[#111111] px-3 py-2 text-sm text-white outline-none"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
      </section>

      {/* Workout List */}
      {sortedWorkouts.length === 0 ? (
        <section className="rounded-2xl border border-dashed border-gray-800 bg-[#111111] px-6 py-20 text-center">
          <h2 className="text-3xl font-black uppercase">
            NOTHING HERE YET
          </h2>

          <p className="mt-3 text-gray-400">
            Browse the library and add a lift to get today moving.
          </p>

          <Link
            href="/"
            className="mt-6 inline-block rounded-full bg-[#ccff00] px-6 py-3 font-bold text-black"
          >
            Go to workouts
          </Link>
        </section>
      ) : (
        <section className="space-y-5">
          {sortedWorkouts.map((workout, index) => {
            const isDone = doneWorkouts.includes(workout.id);

            return (
              <article
                key={`${workout.id}-${index}`}
                className={`rounded-2xl border bg-[#111111] p-5 ${
                  isDone
                    ? "border-[#ccff00]"
                    : "border-gray-800"
                }`}
              >
                <div className="flex flex-col gap-5 md:flex-row">

                  {/* Image */}
                  <Image
                    src={workout.image}
                    alt={workout.title}
                    width={220}
                    height={150}
                    className="h-48 w-full rounded-xl object-cover md:h-36 md:w-52"
                  />

                  {/* Content */}
                  <div className="flex flex-1 flex-col">

                    <h2
                      className={`text-2xl font-black uppercase ${
                        isDone
                          ? "text-[#ccff00]"
                          : "text-white"
                      }`}
                    >
                      {isDone && "✓ "}
                      {workout.title}
                    </h2>

                    <p className="mt-2 text-sm text-gray-400">
                      Equipment:{" "}
                      <span className="text-gray-200">
                        {workout.equipment}
                      </span>
                    </p>

                    <div className="mt-5 flex flex-wrap gap-5 text-sm text-gray-400">
                      <span>⏱ {workout.duration} min</span>
                      <span>🔥 {workout.calories} kcal</span>
                      <span>⭐ {workout.rating}</span>
                    </div>

                    {/* Buttons */}
                    <div className="mt-5 flex flex-wrap gap-3">

                      <Link
                        href={`/workout/${workout.id}`}
                        className="rounded-full bg-[#ccff00] px-5 py-2 text-sm font-semibold text-black"
                      >
                        View Details
                      </Link>

                      {activeTab === "today" && (
                        <button
                          onClick={() =>
                            handleDone(workout.id)
                          }
                          className="rounded-full border border-gray-600 px-5 py-2 text-sm font-semibold"
                        >
                          {isDone
                            ? "✓ Done"
                            : "Mark as Done"}
                        </button>
                      )}

                      <button
                        onClick={() =>
                          handleRemove(index)
                        }
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-red-500 text-red-400"
                      >
                        ✕
                      </button>

                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      )}
    </>
  );
};

export default PlanSort;
