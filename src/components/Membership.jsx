import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "BASIC",
    price: "999",
    duration: "1 Month",
    features: [
      "Full Gym Access",
      "Cardio Zone",
      "Locker Facility",
      "Basic Workout Plan",
    ],
  },
  {
    name: "PRO",
    price: "2,499",
    duration: "3 Months",
    popular: true,
    features: [
      "Everything in Basic",
      "Personal Workout Plan",
      "Diet Guidance",
      "Progress Tracking",
    ],
  },
  {
    name: "ELITE",
    price: "4,999",
    duration: "6 Months",
    features: [
      "Everything in Pro",
      "Personal Trainer",
      "Monthly Body Assessment",
      "Priority Support",
    ],
  },
];

function Membership() {
  const contactWhatsApp = (plan) => {
    const message = `Hi, I am interested in the ${plan} membership at Iron House Fitness.`;

    window.open(
      `https://wa.me/919999999999?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section
      id="membership"
      className="relative overflow-hidden bg-[#090909] py-24 lg:py-32"
    >
      {/* =========================================
          BACKGROUND VIDEO
      ========================================= */}
      <div className="pointer-events-none absolute inset-0">
        <video
          src="/videos/workout2.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/75" />

        {/* Red cinematic glow */}
        <div className="absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#e50914]/10 blur-[140px]" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-[#090909] to-transparent" />

        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#090909] to-transparent" />

        {/* Scanlines */}
        <div className="absolute inset-0 opacity-[0.025] [background-image:repeating-linear-gradient(to_bottom,transparent_0px,transparent_3px,rgba(255,255,255,0.5)_4px)]" />
      </div>

      {/* =========================================
          CONTENT
      ========================================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#e50914]" />

            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#e50914]">
              Iron House / Membership
            </span>

            <span className="h-px w-12 bg-[#e50914]" />
          </div>

          <h2 className="font-display text-6xl font-black uppercase leading-none sm:text-7xl lg:text-8xl">
            Choose Your
            <span className="block text-gray-500">
              Level.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-400">
            No matter where you are starting from, there is a level designed
            to push you further.
          </p>
        </motion.div>

        {/* =========================================
            MEMBERSHIP CARDS
        ========================================= */}
        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.12,
                duration: 0.7,
              }}
              whileHover={{ y: -8 }}
              className={`premium-card group relative overflow-hidden border p-8 backdrop-blur-md ${
                plan.popular
                  ? "border-[#e50914] bg-[#110607]/90"
                  : "border-white/10 bg-black/70"
              }`}
            >
              {/* Red top line */}
              <div
                className={`absolute left-0 top-0 h-[2px] transition-all duration-500 ${
                  plan.popular
                    ? "w-full bg-[#e50914]"
                    : "w-0 bg-[#e50914] group-hover:w-full"
                }`}
              />

              {/* Popular */}
              {plan.popular && (
                <div className="absolute right-0 top-0 bg-[#e50914] px-4 py-2 text-[9px] font-black tracking-widest">
                  MOST POPULAR
                </div>
              )}

              {/* Plan name */}
              <p className="text-xs font-black tracking-[0.3em] text-gray-500">
                {plan.name}
              </p>

              {/* Price */}
              <div className="mt-6 flex items-end gap-1">
                <span className="text-sm text-gray-500">
                  ₹
                </span>

                <span className="font-display text-6xl font-black">
                  {plan.price}
                </span>
              </div>

              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-gray-500">
                {plan.duration}
              </p>

              {/* Divider */}
              <div className="my-8 h-px bg-white/10" />

              {/* Features */}
              <div className="space-y-4">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center border border-[#e50914]/30 bg-[#e50914]/5">
                      <Check
                        size={13}
                        className="text-[#e50914]"
                      />
                    </span>

                    {feature}
                  </div>
                ))}
              </div>

              {/* Button */}
              <button
                onClick={() => contactWhatsApp(plan.name)}
                className={`shine-button relative mt-10 flex w-full items-center justify-center gap-3 py-4 text-xs font-black tracking-widest transition ${
                  plan.popular
                    ? "bg-[#e50914] hover:bg-red-700"
                    : "border border-white/20 hover:border-[#e50914] hover:text-[#e50914]"
                }`}
              >
                GET STARTED

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </motion.div>
          ))}
        </div>

        {/* =========================================
            VIDEO STATEMENT
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mt-24 overflow-hidden border border-white/10"
        >
          <video
            src="/videos/workout2.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="h-[320px] w-full object-cover md:h-[420px]"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-black/70" />

          {/* Red glow */}
          <div className="absolute left-1/3 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#e50914]/10 blur-[100px]" />

          {/* Text */}
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <div>
              <p className="mb-4 text-[9px] font-black uppercase tracking-[0.5em] text-[#e50914]">
                YOUR NEXT LEVEL
              </p>

              <h3 className="font-display text-5xl font-black uppercase leading-none text-white sm:text-7xl">
                Don't Just
                <span className="block text-[#e50914]">
                  Train.
                </span>
                Transform.
              </h3>
            </div>
          </div>

          {/* Corner borders */}
          <div className="absolute left-0 top-0 h-16 w-16 border-l-2 border-t-2 border-[#e50914]" />

          <div className="absolute bottom-0 right-0 h-16 w-16 border-b-2 border-r-2 border-[#e50914]" />
        </motion.div>

        {/* Bottom statement */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center text-[9px] font-bold uppercase tracking-[0.4em] text-gray-600"
        >
          Built by discipline / Powered by consistency / Defined by results
        </motion.p>
      </div>
    </section>
  );
}

export default Membership;