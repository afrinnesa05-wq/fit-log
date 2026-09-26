import Image from "next/image";
import logo from "@/assets/logo.png";
import PlanBadges from "./PlanBadges";

const Navbar = () => {
  return (
    <nav className="bg-black text-white shadow-sm">
      <div className="mx-auto flex min-h-[81px] max-w-7xl items-center justify-between px-4 md:px-8">

        {/* Logo */}
        <a
          href="/"
          className="flex shrink-0 items-center"
        >
          <Image
            src={logo}
            alt="FitLog logo"
            width={40}
            height={40}
          />

          <span className="ml-2 text-xl font-black">
            FITLOG
          </span>
        </a>

        {/* Center Navigation */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-2">
            <li>
              <a
                href="/"
                className="rounded-lg bg-[#ccff00] px-5 py-3 font-semibold text-black"
              >
                Workout
              </a>
            </li>

            <li>
              <a
                href="/my-plan"
                className="rounded-lg px-5 py-3 font-semibold text-white transition hover:bg-[#1a1a1a]"
              >
                My Plan
              </a>
            </li>
          </ul>
        </div>

        {/* Plan + Saved */}
        <PlanBadges />

      </div>
    </nav>
  );
};

export default Navbar;