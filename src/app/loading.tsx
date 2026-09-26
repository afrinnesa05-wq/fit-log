const Loading = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="text-center">

        {/* Spinner */}
        <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-gray-800 border-t-[#ccff00]" />

        <h2 className="mt-6 text-2xl font-black uppercase">
          Loading workouts...
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Preparing your workout library
        </p>

      </div>
    </main>
  );
};

export default Loading;