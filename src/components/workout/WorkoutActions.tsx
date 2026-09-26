"use client";

import { usePlan, Workout } from "@/context/PlanContext";
import { toast } from "sonner";

const WorkoutActions = ({
  workout,
}: {
  workout: Workout;
}) => {
  const { addToTodayPlan, saveForLater } = usePlan();

  const handleAddToPlan = () => {
    addToTodayPlan(workout);
    toast.success("Added to today's plan");
  };

  const handleSaveForLater = () => {
    saveForLater(workout);
    toast.success("Saved for later");
  };

  return (
    <div className="mt-6 flex gap-3">
      <button
        onClick={handleAddToPlan}
        className="rounded-md bg-[#ccff00] px-5 py-2 font-semibold text-black hover:bg-[#b8e600]"
      >
        Add to plan
      </button>

      <button
        onClick={handleSaveForLater}
        className="rounded-md border border-white px-5 py-2 font-semibold text-white hover:bg-white hover:text-black"
      >
        Save for later
      </button>
    </div>
  );
};

export default WorkoutActions;