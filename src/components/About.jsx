import { motion } from "framer-motion";

const ABOUT_IMAGE =
  "https://images.pexels.com/photos/5327469/pexels-photo-5327469.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-5327469.jpg&fm=jpg";

const features = [
  ["Modern Equipment", "01"],
  ["Expert Trainers", "02"],
  ["Clean Environment", "03"],
  ["Flexible Timings", "04"],
];

function About() {
  return (
    <section id="about" className="relative bg-[#090909] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -left-3 -top-3 h-full w-full border border-[#e50914]/30" />

            <img
              src={ABOUT_IMAGE}
              alt="Athlete training"
              className="gym-image relative h-[550px] w-full object-cover sm:h-[600px]"
            />

            <div className="absolute bottom-6 left-6 bg-[#e50914] px-6 py-4">
              <div className="font-display text-4xl font-black">100%</div>

              <div className="text-[10px] font-bold uppercase tracking-widest">
                Commitment
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#e50914]">
              ABOUT IRON HOUSE
            </p>

            <h2 className="mt-4 font-display text-6xl font-black uppercase leading-none sm:text-7xl">
              More Than
              <span className="block text-gray-500">A Gym.</span>
            </h2>

            <p className="mt-7 leading-8 text-gray-400">
              Iron House Fitness is built for people who refuse to settle.
              Whether your goal is building muscle, losing fat, increasing
              strength or simply becoming healthier, we give you the
              environment and guidance to make it happen.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {features.map(([title, number]) => (
                <div
                  key={number}
                  className="border-l-2 border-[#e50914] pl-4"
                >
                  <div className="text-xs font-bold text-[#e50914]">
                    {number}
                  </div>

                  <div className="mt-1 text-sm font-bold">{title}</div>
                </div>
              ))}
            </div>

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