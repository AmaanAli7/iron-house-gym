import { ArrowRight } from "lucide-react";

function CTA() {
  const scrollToMembership = () => {
    document
      .getElementById("membership")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-[#e50914] py-20">
      <div className="absolute -right-20 -top-40 h-96 w-96 rounded-full border-[60px] border-white/10" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 text-center md:flex-row md:text-left lg:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.35em] text-white/70">
            YOUR TRANSFORMATION STARTS NOW
          </p>

          <h2 className="mt-3 font-display text-6xl font-black uppercase leading-none sm:text-7xl">
            Ready To Get
            <span className="block text-black">Stronger?</span>
          </h2>
        </div>

        <button
          onClick={scrollToMembership}
          className="flex shrink-0 items-center gap-3 bg-black px-8 py-5 text-xs font-black tracking-widest transition hover:bg-white hover:text-black"
        >
          JOIN IRON HOUSE
          <ArrowRight size={17} />
        </button>
      </div>
    </section>
  );
}

export default CTA;