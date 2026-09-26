import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-black px-4 text-white">
      <div className="text-center">

        <p className="text-sm font-bold tracking-[0.3em] text-[#ccff00]">
          FITLOG
        </p>

        <h1 className="mt-4 text-7xl font-black md:text-9xl">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-black uppercase">
          Workout Not Found
        </h2>

        <p className="mt-3 text-gray-400">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-[#ccff00] px-6 py-3 font-bold text-black transition hover:bg-[#b8e600]"
        >
          BACK TO WORKOUTS
        </Link>

      </div>
    </main>
  );
};

export default NotFound;