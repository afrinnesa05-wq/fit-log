import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="container mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left - Logo & Brand */}
        <div className="flex items-center gap-3">
          <Image
            src={logo}
            alt="FitLog logo"
            width={40}
            height={40}
          />

          <span className="text-xl font-bold">
            FITLOG
          </span>
        </div>

        {/* Right - Copyright */}
        <p className="text-sm text-gray-400 text-center">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;