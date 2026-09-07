import { Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 py-10 md:flex-row md:items-center lg:px-8">
        <div>
          <div className="font-display text-3xl font-black">
            IRON HOUSE
            <span className="text-[#e50914]">.</span>
          </div>

          <p className="mt-1 text-[9px] font-bold tracking-[0.35em] text-gray-600">
            FITNESS CLUB
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="#"
            className="text-xs font-bold tracking-widest text-gray-500 transition hover:text-[#e50914]"
          >
            INSTAGRAM
          </a>

          <a
            href="tel:+919999999999"
            className="text-gray-500 transition hover:text-[#e50914]"
            aria-label="Call"
          >
            <Phone size={19} />
          </a>
        </div>

        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-600">
          © 2026 Iron House Fitness. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;