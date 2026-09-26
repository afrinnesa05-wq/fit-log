"use client";

import { usePlan } from "@/context/PlanContext";
import PlanSort from "./PlanSort";

const MyPlanClient = () => {
  const {
    todayPlan,
    savedWorkouts,
  } = usePlan();

  const minutes = todayPlan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const calories = todayPlan.reduce(
    (total, workout) => total + workout.calories,
    0
  );

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12 md:px-8">

        {/* Header */}
        <section className="mb-10">
          <h1 className="text-4xl font-black uppercase md:text-5xl">
            MY PLAN
          </h1>

          <p className="mt-3 text-gray-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </section>

        {/* Metrics */}
        <section className="mb-10 grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl border border-gray-800 bg-[#111111] p-6">
            <p className="text-sm uppercase text-gray-400">
              Exercises
            </p>

            <h2 className="mt-3 text-4xl font-black">
              {todayPlan.length}
            </h2>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-[#111111] p-6">
            <p className="text-sm uppercase text-gray-400">
              Minutes
            </p>

            <h2 className="mt-3 text-4xl font-black">
              {minutes}
            </h2>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-[#111111] p-6">
            <p className="text-sm uppercase text-gray-400">
              Calories
            </p>

            <h2 className="mt-3 text-4xl font-black">
              {calories}
            </h2>
          </div>

        </section>

        {/* Tabs + Sort + Workout List */}
        <PlanSort />

      </div>
    </main>
  );
};

export default MyPlanClient;
