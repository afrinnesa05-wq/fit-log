import Link from "next/link";
import Image from "next/image";

type Workout = {
  id: number | string;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  duration: number;
  caloriesBurned: number;
  rating: number;
};

type WorkoutCardProps = {
  workout: Workout;
};

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link href={`/workout/${workout.id}`} className="block">
      <div className="overflow-hidden rounded-2xl bg-[#111111] transition hover:-translate-y-1 hover:bg-[#181818]">

        <Image
          src={workout.image}
          alt={workout.name}
          width={600}
          height={400}
          className="h-56 w-full object-cover"
        />

        <div className="p-5">

          {/* Categories */}
          <div className="mb-3 flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-bold text-black"
              >
                {group.toUpperCase()}
              </span>
            ))}
          </div>

          {/* Name */}
          <h3 className="text-xl font-bold text-white">
            {workout.name.toUpperCase()}
          </h3>

          {/* Equipment */}
          <p className="mt-2 text-sm text-gray-400">
            {workout.equipment}
          </p>

          {/* Stats */}
          <div className="mt-5 flex justify-between text-sm text-gray-300">
            <span>🔴 {workout.duration} min</span>
            <span>🔥 {workout.caloriesBurned} kcal</span>
            <span>⭐ {workout.rating}</span>
          </div>

        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;