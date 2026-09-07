import { motion } from "framer-motion";

const stats = [
  {
    number: "500+",
    label: "Active Members",
  },
  {
    number: "10+",
    label: "Expert Trainers",
  },
  {
    number: "15K",
    label: "Sq. Ft. Facility",
  },
  {
    number: "5+",
    label: "Years Experience",
  },
];

function Stats() {
  return (
    <section className="border-y border-white/10 bg-[#080808]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border-r border-b border-white/10 p-7 last:border-r-0 lg:border-b-0"
          >
            <div className="font-display text-5xl font-black sm:text-6xl">
              {stat.number}
            </div>

            <div className="mt-2 text-[9px] font-bold uppercase tracking-[0.25em] text-gray-500">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Stats;