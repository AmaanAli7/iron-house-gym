import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HERO_IMAGE =
  "https://images.pexels.com/photos/29639963/pexels-photo-29639963.jpeg?cs=srgb&dl=pexels-foadshariyati-29639963.jpg&fm=jpg";

function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Modern gym"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(229,9,20,0.20),transparent_35%)]" />
      </div>

      {/* Red Glow */}
      <div className="red-pulse absolute right-[5%] top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#e50914]/20 blur-[140px]" />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-5 pt-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="h-[2px] w-12 bg-[#e50914]" />

            <span className="text-xs font-bold uppercase tracking-[0.35em] text-[#ff4b52]">
              PREMIUM FITNESS CLUB
            </span>
          </div>

          <h1 className="font-display text-7xl font-black uppercase leading-[0.85] tracking-tight sm:text-8xl lg:text-[120px]">
            Forge Your
            <span className="red-glow block text-[#e50914]">Body.</span>
            Own Your
            <span className="block">Power.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-7 text-gray-300 sm:text-lg">
            Train harder. Move stronger. Become the version of yourself
            you've always wanted to be.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => scrollTo("membership")}
              className="shine-button group relative flex items-center justify-center gap-3 bg-[#e50914] px-7 py-4 text-sm font-black tracking-widest transition hover:bg-red-700 hover:shadow-[0_0_35px_rgba(229,9,20,0.35)]"
            >
              START YOUR JOURNEY

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </button>

            <button
              onClick={() => scrollTo("programs")}
              className="border border-white/30 bg-white/5 px-7 py-4 text-sm font-black tracking-widest backdrop-blur-sm transition hover:border-white hover:bg-white/10"
            >
              EXPLORE PROGRAMS
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="text-[9px] font-bold tracking-[0.4em] text-gray-500">
          SCROLL
        </span>

        <div className="h-10 w-px bg-gradient-to-b from-[#e50914] to-transparent" />
      </div>
    </section>
  );
}

export default Hero;