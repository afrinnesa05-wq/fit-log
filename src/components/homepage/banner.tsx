import Image from "next/image";
import banner from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="rounded-2xl bg-black text-white">
      <div className="container mx-auto grid min-h-[600px] items-center gap-10 px-6 py-16 lg:grid-cols-2">

        {/* Left Side */}
        <div>
          <p className="mb-4 text-sm font-bold tracking-[0.2em] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="mb-6 text-5xl font-black uppercase leading-tight md:text-6xl lg:text-7xl">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="mb-8 max-w-xl text-base leading-7 text-gray-400 md:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <a
            href="#library"
            className="btn border-none bg-[#ccff00] px-6 text-black hover:bg-[#b8e600]"
          >
            BROWSE WORKOUTS
            <span>→</span>
          </a>
        </div>

        {/* Right Side */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src={banner}
            alt="Workout banner"
            width={600}
            height={500}
            priority
            className="h-auto w-full max-w-[600px] object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;
