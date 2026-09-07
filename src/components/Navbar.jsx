import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const links = [
  ["HOME", "home"],
  ["ABOUT", "about"],
  ["PROGRAMS", "programs"],
  ["MEMBERSHIP", "membership"],
  ["TRAINERS", "trainers"],
  ["CONTACT", "contact"],
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center bg-[#e50914] font-black">
            IH
          </div>

          <div className="text-left">
            <div className="font-display text-2xl font-black tracking-wide">
              IRON HOUSE
            </div>

            <div className="-mt-1 text-[9px] font-bold tracking-[0.35em] text-gray-400">
              FITNESS CLUB
            </div>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-xs font-bold tracking-wider text-gray-300 transition hover:text-[#ef1d25]"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          onClick={() => scrollTo("membership")}
          className="shine-button relative hidden items-center gap-2 bg-[#e50914] px-5 py-3 text-xs font-black tracking-wider transition hover:bg-red-700 md:flex"
        >
          JOIN NOW
          <ArrowRight size={15} />
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-black px-5 py-5 md:hidden">
          {links.map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="block w-full border-b border-white/10 py-4 text-left text-sm font-bold tracking-wider text-gray-300 transition hover:text-[#e50914]"
            >
              {label}
            </button>
          ))}

          <button
            onClick={() => scrollTo("membership")}
            className="mt-5 flex w-full items-center justify-center gap-2 bg-[#e50914] py-4 text-xs font-black tracking-widest"
          >
            JOIN NOW
            <ArrowRight size={15} />
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;