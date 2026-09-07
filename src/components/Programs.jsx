import { motion } from "framer-motion";
import {
  ArrowRight,
  Dumbbell,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

const programs = [
  {
    title: "Strength Training",
    text: "Build serious strength with structured resistance training.",
    icon: Dumbbell,
  },
  {
    title: "Personal Training",
    text: "One-on-one guidance designed around your personal goals.",
    icon: Users,
  },
  {
    title: "Fat Loss",
    text: "Smart training and consistent routines to help you get lean.",
    icon: Zap,
  },
  {
    title: "Muscle Building",
    text: "Progressive workouts built for sustainable muscle growth.",
    icon: Trophy,
  },
];

function Programs() {
  return (
    <section id="programs" className="bg-black py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-2xl"
        >
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#e50914]">
            WHAT WE OFFER
          </p>

          <h2 className="mt-4 font-display text-6xl font-black uppercase leading-none sm:text-7xl">
            Train With
            <span className="block text-gray-500">Purpose.</span>
          </h2>
        </motion.div>

        <div className="grid gap-px bg-white/10 md:grid-cols-2">
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="premium-card group relative overflow-hidden bg-[#0a0a0a] p-8 transition hover:bg-[#111]"
              >
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full bg-[#e50914]/10 blur-3xl transition group-hover:bg-[#e50914]/30" />

                <div className="mb-10 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center border border-white/10 bg-[#111] transition group-hover:border-[#e50914]">
                    <Icon className="text-[#e50914]" size={25} />
                  </div>

                  <span className="font-display text-5xl font-black text-white/5">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-display text-4xl font-black uppercase">
                  {program.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-gray-500">
                  {program.text}
                </p>

                <button
                  onClick={() =>
                    document
                      .getElementById("membership")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="mt-7 flex items-center gap-2 text-xs font-black tracking-widest text-[#e50914]"
                >
                  LEARN MORE
                  <ArrowRight size={14} />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Programs;