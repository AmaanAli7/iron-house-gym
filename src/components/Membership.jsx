import { motion } from "framer-motion";
import { Check } from "lucide-react";

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
    <section id="membership" className="bg-[#090909] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#e50914]">
            MEMBERSHIP
          </p>

          <h2 className="mt-4 font-display text-6xl font-black uppercase leading-none sm:text-7xl">
            Choose Your
            <span className="block text-gray-500">Level.</span>
          </h2>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`premium-card relative border p-8 ${
                plan.popular
                  ? "border-[#e50914] bg-[#110607]"
                  : "border-white/10 bg-black"
              }`}
            >
              {plan.popular && (
                <div className="absolute right-0 top-0 bg-[#e50914] px-4 py-2 text-[9px] font-black tracking-widest">
                  MOST POPULAR
                </div>
              )}

              <p className="text-xs font-black tracking-[0.3em] text-gray-500">
                {plan.name}
              </p>

              <div className="mt-6 flex items-end gap-1">
                <span className="text-sm text-gray-500">₹</span>

                <span className="font-display text-6xl font-black">
                  {plan.price}
                </span>
              </div>

              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-gray-500">
                {plan.duration}
              </p>

              <div className="my-8 h-px bg-white/10" />

              <div className="space-y-4">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    <Check size={16} className="text-[#e50914]" />
                    {feature}
                  </div>
                ))}
              </div>

              <button
                onClick={() => contactWhatsApp(plan.name)}
                className={`shine-button relative mt-10 w-full py-4 text-xs font-black tracking-widest transition ${
                  plan.popular
                    ? "bg-[#e50914] hover:bg-red-700"
                    : "border border-white/20 hover:border-[#e50914]"
                }`}
              >
                GET STARTED
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Membership;