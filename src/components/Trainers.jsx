import { motion } from "framer-motion";

const trainers = [
  {
    name: "Arjun Singh",
    role: "Head Strength Coach",
    experience: "8+ Years Experience",
    image:
      "https://images.pexels.com/photos/5327469/pexels-photo-5327469.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-5327469.jpg&fm=jpg",
  },
  {
    name: "Rahul Sharma",
    role: "Fitness & Conditioning",
    experience: "6+ Years Experience",
    image:
      "https://images.pexels.com/photos/39219660/pexels-photo-39219660.jpeg?cs=srgb&dl=pexels-silverkblack-39219660.jpg&fm=jpg",
  },
  {
    name: "Vikram Rao",
    role: "Personal Trainer",
    experience: "5+ Years Experience",
    image:
      "https://images.pexels.com/photos/6046978/pexels-photo-6046978.png?cs=srgb&dl=pexels-totalshape-6046978.jpg&fm=jpg",
  },
];

function Trainers() {
  return (
    <section id="trainers" className="bg-black py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#e50914]">
              OUR TEAM
            </p>

            <h2 className="mt-4 font-display text-6xl font-black uppercase leading-none sm:text-7xl">
              Meet The
              <span className="block text-gray-500">Experts.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-gray-500">
            Real results require real guidance. Our coaches help you train
            smarter, harder and consistently.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden bg-[#0a0a0a]"
            >
              <div className="h-[430px] overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="gym-image h-full w-full object-cover grayscale transition duration-700 group-hover:grayscale-0"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/90 to-transparent p-7 pt-24">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#e50914]">
                  {trainer.experience}
                </p>

                <h3 className="mt-2 font-display text-4xl font-black uppercase">
                  {trainer.name}
                </h3>

                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-gray-400">
                  {trainer.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trainers;