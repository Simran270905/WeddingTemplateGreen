import { useEffect, useState } from "react";
import Couple from "../assets/image/Couple.jpg";
import hands from "../assets/image/hands.jpg";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-2 relative min-h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(21,73,53,0.12) 0%, rgba(243,240,230,0.95) 40%, rgba(243,240,230,0.98) 100%)",
      }}
    >
      {/* soft vignette + noise */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-black/12 via-transparent to-black/35 mix-blend-multiply" />
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_0_0,#000_0,transparent_55%),radial-gradient(circle_at_100%_100%,#000_0,transparent_55%)]" />
      </div>

      {/* LEFT */}
      <div className="bg-left flex flex-col items-center justify-start px-6 sm:px-12 lg:px-20 text-center pt-16 lg:pt-20 relative z-10">
        <div className="flex flex-col items-center animate-hero-left">
          <h1 className="serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-wide text-gold leading-tight font-awesome mt-4 drop-shadow-[0_4px_14px_rgba(0,0,0,0.35)]">
            Hayden & <br /> Melissa
          </h1>

          <div className="relative w-[260px] sm:w-[320px] lg:w-[360px] h-[360px] sm:h-[440px] lg:h-[480px] mt-8 group">
            <div className="absolute -inset-[1px] rounded-[32px] bg-gradient-to-br from-white/55 to-white/10 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -inset-[18px] rounded-[40px] bg-gradient-radial from-[#d5c39b]/22 via-transparent to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700" />
            <div className="relative w-full h-full overflow-hidden rounded-[30px] shadow-[0_32px_90px_rgba(0,0,0,0.65)] bg-black/10">
              <img
                src={Couple}
                alt="Couple"
                className="w-full h-full object-cover transform scale-[1.03] group-hover:scale-[1.07] group-hover:-translate-y-1 transition-transform duration-[1200ms] ease-out"
              />
            </div>
          </div>

          <p className="mt-6 text-xs sm:text-sm tracking-[0.3em]  italic uppercase animate-fade-up">
            — Save the date, we’re gettin’ hitched —
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="bg-right flex flex-col items-center justify-start px-6 sm:px-12 lg:px-20 text-center pt-16 lg:pt-20 relative z-10">
        <div className="flex flex-col items-center animate-hero-right">
          <h2 className="serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-wide text-gold leading-tight mt-4 font-awesome drop-shadow-[0_4px_14px_rgba(0,0,0,0.35)]">
            April 30 <br /> Udaipur
          </h2>

          <div className="relative w-[260px] sm:w-[320px] lg:w-[360px] h-[360px] sm:h-[440px] lg:h-[480px] mt-8 group">
            <div className="absolute -inset-[1px] rounded-[32px] bg-gradient-to-tr from-white/55 to-white/10 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -inset-[18px] rounded-[40px] bg-gradient-radial from-[#d5c39b]/22 via-transparent to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700" />
            <div className="relative w-full h-full overflow-hidden rounded-[30px] shadow-[0_32px_90px_rgba(0,0,0,0.65)] bg-black/10">
              <img
                src={hands}
                alt="Hands"
                className="w-full h-full object-cover transform scale-[1.03] group-hover:scale-[1.07] group-hover:-translate-y-1 transition-transform duration-[1200ms] ease-out"
              />
            </div>
          </div>

          <div className="mt-6 mb-4 text-sm sm:text-base tracking-wide leading-relaxed font-footlight text-[#384535] bg-white/70 backdrop-blur-md border border-white/60 rounded-2xl px-6 sm:px-8 py-4 shadow-[0_26px_80px_rgba(0,0,0,0.35)] animate-fade-up-delayed">
            <p className="font-semibold text-gold">
              Apr 30, 2035 · 5:00 PM – 11:00 PM
            </p>
            <p className="mt-0">
              The Palace Amphitheater <br />
              500 Terry A Francois Blvd <br />
              Udaipur
            </p>
          </div>
        </div>
      </div>

      {/* very soft scroll parallax highlight */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#d5c39b]/70 via-white/70 to-[#d5c39b]/70"
        style={{ transform: `translateX(${Math.min(scrollY * 0.25, 60)}px)` }}
      />
    </section>
  );
};

export default Hero;
