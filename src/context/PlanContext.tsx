"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type Workout = {
  id: string;
  title: string;
  image: string;
  equipment: string;
  duration: number;
  calories: number;
  rating: number;
};

type PlanContextType = {
  todayPlan: Workout[];
  savedWorkouts: Workout[];
  addToTodayPlan: (workout: Workout) => void;
  saveForLater: (workout: Workout) => void;
  removeFromTodayPlan: (index: number) => void;
  removeFromSaved: (index: number) => void;
};

const PlanContext = createContext<PlanContextType | undefined>(
  undefined
);

export const PlanProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [todayPlan, setTodayPlan] = useState<Workout[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Load data from localStorage
  useEffect(() => {
    const savedPlan = localStorage.getItem("todayPlan");
    const savedLater = localStorage.getItem("savedWorkouts");

    if (savedPlan) {
      setTodayPlan(JSON.parse(savedPlan));
    }

    if (savedLater) {
      setSavedWorkouts(JSON.parse(savedLater));
    }

    setLoaded(true);
  }, []);

  // Save today's plan
  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem(
      "todayPlan",
      JSON.stringify(todayPlan)
    );
  }, [todayPlan, loaded]);

  // Save saved workouts
  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem(
      "savedWorkouts",
      JSON.stringify(savedWorkouts)
    );
  }, [savedWorkouts, loaded]);

  const addToTodayPlan = (workout: Workout) => {
    setTodayPlan((previous) => {
      if (previous.length >= 5) {
        return previous;
      }

      const alreadyAdded = previous.some(
        (item) => item.id === workout.id
      );

      if (alreadyAdded) {
        return previous;
      }

      return [...previous, workout];
    });
  };

  const saveForLater = (workout: Workout) => {
    setSavedWorkouts((previous) => {
      const alreadySaved = previous.some(
        (item) => item.id === workout.id
      );

      if (alreadySaved) {
        return previous;
      }

      return [...previous, workout];
    });
  };

  const removeFromTodayPlan = (index: number) => {
    setTodayPlan((previous) =>
      previous.filter((_, i) => i !== index)
    );
  };

  const removeFromSaved = (index: number) => {
    setSavedWorkouts((previous) =>
      previous.filter((_, i) => i !== index)
    );
  };

  return (
    <PlanContext.Provider
      value={{
        todayPlan,
        savedWorkouts,
        addToTodayPlan,
        saveForLater,
        removeFromTodayPlan,
        removeFromSaved,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};

export const usePlan = () => {
  const context = useContext(PlanContext);

  if (!context) {
    throw new Error(
      "usePlan must be used inside PlanProvider"
    );
  }

  return context;
};