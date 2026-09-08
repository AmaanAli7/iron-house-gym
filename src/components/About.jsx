import { motion } from "framer-motion";

const features = [
  ["Modern Equipment", "01"],
  ["Expert Trainers", "02"],
  ["Clean Environment", "03"],
  ["Flexible Timings", "04"],
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#090909] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* ================= VIDEO ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Outer red frame */}
            <div className="absolute -left-3 -top-3 h-full w-full border border-[#e50914]/30" />

            {/* Second decorative frame */}
            <div className="absolute -bottom-3 -right-3 h-full w-full border border-white/5" />

            {/* Video container */}
            <div className="group relative h-[550px] w-full overflow-hidden bg-black sm:h-[600px]">

              <video
                src="/videos/workout1.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover transition duration-[1.5s] ease-out group-hover:scale-105"
              />

              {/* Dark cinematic overlay */}
              <div className="absolute inset-0 bg-black/25" />

              {/* Red cinematic gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Red glow on right */}
              <div className="pointer-events-none absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-[#e50914]/10 blur-[100px]" />

              {/* Scanline effect */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:repeating-linear-gradient(to_bottom,transparent_0px,transparent_3px,rgba(255,255,255,0.5)_4px)]" />

              {/* Top label */}
              <div className="absolute left-5 top-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#e50914]" />

                <span className="text-[9px] font-black uppercase tracking-[0.35em] text-white/70">
                  Training Floor
                </span>
              </div>

              {/* Bottom video label */}
              <div className="absolute bottom-6 left-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#e50914]">
                  IRON HOUSE
                </p>

                <h3 className="mt-1 font-display text-4xl font-black uppercase text-white">
                  Train Hard.
                </h3>
              </div>

              {/* Commitment badge */}
              <div className="absolute bottom-6 right-6 bg-[#e50914] px-6 py-4 shadow-[0_0_40px_rgba(229,9,20,0.25)]">
                <div className="font-display text-4xl font-black leading-none">
                  100%
                </div>

                <div className="mt-1 text-[10px] font-bold uppercase tracking-widest">
                  Commitment
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute left-0 top-0 h-16 w-16 border-l-2 border-t-2 border-[#e50914]" />

              <div className="absolute bottom-0 right-0 h-16 w-16 border-b-2 border-r-2 border-[#e50914]" />
            </div>
          </motion.div>

          {/* ================= TEXT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#e50914]">
              ABOUT IRON HOUSE
            </p>

            <h2 className="mt-4 font-display text-6xl font-black uppercase leading-none sm:text-7xl">
              More Than
              <span className="block text-gray-500">
                A Gym.
              </span>
            </h2>

            <p className="mt-7 leading-8 text-gray-400">
              Iron House Fitness is built for people who refuse to settle.
              Whether your goal is building muscle, losing fat, increasing
              strength or simply becoming healthier, we give you the
              environment and guidance to make it happen.
            </p>

            {/* Features */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              {features.map(([title, number]) => (
                <motion.div
                  key={number}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="border-l-2 border-[#e50914] pl-4"
                >
                  <div className="text-xs font-bold text-[#e50914]">
                    {number}
                  </div>

                  <div className="mt-1 text-sm font-bold text-white">
                    {title}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Button */}
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-9 border-b border-[#e50914] pb-2 text-xs font-black tracking-widest text-white transition hover:text-[#e50914]"
            >
              VISIT OUR GYM →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;