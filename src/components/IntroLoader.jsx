import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

function IntroLoader({ onComplete }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 400),
      setTimeout(() => setStage(2), 1100),
      setTimeout(() => setStage(3), 1900),
      setTimeout(() => setStage(4), 2700),
      setTimeout(() => onComplete(), 3800),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-black"
        exit={{
          opacity: 0,
          scale: 1.05,
          filter: "blur(15px)",
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        {/* RED LIGHT */}

        <motion.div
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: stage >= 1 ? 1 : 0,
            opacity: stage >= 1 ? 0.35 : 0,
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="absolute h-[500px] w-[500px] rounded-full bg-red-600 blur-[150px]"
        />

        {/* HORIZONTAL LASER */}

        <motion.div
          initial={{
            x: "-100%",
            opacity: 0,
          }}
          animate={{
            x: stage >= 2 ? "100%" : "-100%",
            opacity: stage >= 2 ? 1 : 0,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="absolute left-0 top-1/2 h-[2px] w-full bg-red-600 shadow-[0_0_40px_#ff0000]"
        />

        {/* CONTENT */}

        <div className="relative z-10 text-center">

          {/* WELCOME */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: stage >= 1 ? 1 : 0,
              y: stage >= 1 ? 0 : 20,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mb-5 text-[9px] font-bold uppercase tracking-[0.7em] text-gray-500"
          >
            Welcome to
          </motion.p>

          {/* LOGO */}

          <motion.h1
            initial={{
              opacity: 0,
              scale: 1.4,
              letterSpacing: "0.8em",
            }}
            animate={{
              opacity: stage >= 2 ? 1 : 0,
              scale: stage >= 2 ? 1 : 1.4,
              letterSpacing: stage >= 2 ? "0.12em" : "0.8em",
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="font-display text-6xl font-black text-white md:text-8xl"
          >
            IRON HOUSE
            <span className="text-red-600">.</span>
          </motion.h1>

          {/* SUBTITLE */}

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: stage >= 3 ? 1 : 0,
              y: stage >= 3 ? 0 : 15,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mt-3 text-[9px] font-bold uppercase tracking-[0.6em] text-gray-500"
          >
            Fitness Club
          </motion.p>

          {/* TAGLINE */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: stage >= 4 ? 1 : 0,
              y: stage >= 4 ? 0 : 30,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mt-16"
          >
            <p className="font-display text-2xl font-bold uppercase tracking-[0.3em] text-white">
              Built by discipline.
            </p>
          </motion.div>
        </div>

        {/* PROGRESS BAR */}

        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 3.8,
            ease: "linear",
          }}
          className="absolute bottom-0 left-0 h-[2px] bg-red-600 shadow-[0_0_15px_#e50914]"
        />

        {/* CORNERS */}

        <div className="absolute bottom-7 left-7 text-[8px] font-bold tracking-[0.4em] text-gray-700">
          EST. 2026
        </div>

        <div className="absolute bottom-7 right-7 text-[8px] font-bold tracking-[0.4em] text-gray-700">
          DISCIPLINE / POWER / RESULTS
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default IntroLoader;