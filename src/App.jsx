import { useCallback, useState } from "react";

import IntroLoader from "./components/IntroLoader";
import CinematicHero from "./components/CinematicHero";

import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import About from "./components/About";
import Programs from "./components/Programs";
import Membership from "./components/Membership";
import Trainers from "./components/Trainers";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroFinished(true);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* INTRO */}

      {!introFinished && (
        <IntroLoader onComplete={handleIntroComplete} />
      )}

      {/* NAVBAR */}

      <Navbar />

      {/* WEBSITE */}

      <main>

        <CinematicHero
          soundOn={soundOn}
          setSoundOn={setSoundOn}
        />

        <Stats />

        <About />

        <Programs />

        <Membership />

        <Trainers />

        <CTA />

        <Contact />

      </main>

      <Footer />

      {/* WHATSAPP */}

      <a
        href="https://wa.me/919999999999?text=Hi%20I%20want%20to%20know%20about%20gym%20membership"
        target="_blank"
        rel="noreferrer"
        className="float-animation fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110"
        aria-label="WhatsApp"
      >
        <span className="text-xl font-black">
          W
        </span>
      </a>

    </div>
  );
}

export default App;