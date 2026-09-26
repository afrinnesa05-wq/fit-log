"use client";

import { usePathname } from "next/navigation";
import { usePlan } from "@/context/PlanContext";

const PlanBadges = () => {
  const { todayPlan, savedWorkouts } = usePlan();
  const pathname = usePathname();

  const isMyPlan = pathname === "/my-plan";

  return (
    <div className="flex items-center gap-2">

      {/* Plan */}
      <a
        href="/my-plan"
        className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold md:px-4 ${
          isMyPlan
            ? "bg-[#ccff00] text-black"
            : "bg-[#ccff00] text-black"
        }`}
      >
        <span>Plan</span>

        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-xs text-white">
          {todayPlan.length}
        </span>
      </a>

      {/* Saved */}
      <a
        href="/my-plan"
        className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold md:px-4 ${
          isMyPlan
            ? "border-2 border-[#ccff00] text-[#ccff00]"
            : "border border-white text-white"
        }`}
      >
        <span>Saved</span>

        <span
          className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${
            isMyPlan
              ? "bg-[#ccff00] text-black"
              : "bg-white text-black"
          }`}
        >
          {savedWorkouts.length}
        </span>
      </a>

    </div>
  );
};

export default PlanBadges;