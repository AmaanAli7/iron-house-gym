import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

function CinematicHero({ soundOn, setSoundOn }) {
  const videoRef = useRef(null);
  const musicRef = useRef(null);

  const [videoReady, setVideoReady] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [playing, setPlaying] = useState(true);

  const posterImage =
    "https://images.pexels.com/photos/29639963/pexels-photo-29639963.jpeg?auto=compress&cs=tinysrgb&w=1600";

  // ------------------------------------------------
  // VIDEO AUTOPLAY
  // ------------------------------------------------

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;

    const playVideo = async () => {
      try {
        await video.play();
        setPlaying(true);
      } catch (error) {
        console.log("Video autoplay blocked:", error);
        setPlaying(false);
      }
    };

    playVideo();
  }, []);

  // ------------------------------------------------
  // MUSIC
  // ------------------------------------------------

  useEffect(() => {
    const music = musicRef.current;

    if (!music) return;

    music.loop = true;
    music.volume = 0.35;

    if (soundOn) {
      music
        .play()
        .then(() => {
          console.log("Music playing");
        })
        .catch((error) => {
          console.log("Music playback blocked:", error);
        });
    } else {
      music.pause();
      music.currentTime = 0;
    }
  }, [soundOn]);

  // ------------------------------------------------
  // VIDEO CONTROLS
  // ------------------------------------------------

  const toggleVideo = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  // ------------------------------------------------
  // SOUND
  // ------------------------------------------------

  const toggleSound = () => {
    setSoundOn((previous) => !previous);
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black"
    >
      {/* =====================================================
          VIDEO
      ====================================================== */}

      {!videoError && (
        <video
          ref={videoRef}
          src="/videos/hero.mp4"
          poster={posterImage}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setVideoReady(true)}
          onError={() => {
            console.log("Hero video could not load.");
            setVideoError(true);
          }}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {/* =====================================================
          FALLBACK IMAGE
      ====================================================== */}

      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          videoReady && !videoError ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: `url(${posterImage})`,
        }}
      />

      {/* =====================================================
          DARK OVERLAY
      ====================================================== */}

      <div className="absolute inset-0 bg-black/60" />

      {/* =====================================================
          RED LIGHT
      ====================================================== */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(229,9,20,0.30),transparent_35%)]" />

      {/* =====================================================
          BOTTOM VIGNETTE
      ====================================================== */}

      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black via-black/60 to-transparent" />

      {/* =====================================================
          SIDE RED GLOW
      ====================================================== */}

      <motion.div
        animate={{
          opacity: [0.15, 0.35, 0.15],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute right-[-15%] top-[20%] h-[500px] w-[500px] rounded-full bg-red-600/20 blur-[130px]"
      />

      {/* =====================================================
          FILM GRAIN
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 z-20 opacity-[0.04] [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* =====================================================
          SCANLINES
      ====================================================== */}

      <div className="scanlines absolute inset-0 z-20" />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-30 mx-auto w-full max-w-7xl px-6 pt-24 lg:px-8">
        <div className="max-w-5xl">

          {/* SMALL LABEL */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.7,
            }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="h-px w-12 bg-red-600" />

            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-red-500">
              Train Different
            </span>
          </motion.div>

          {/* FORGE */}

          <div className="overflow-hidden">
            <motion.h1
              initial={{
                y: 150,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.5,
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display text-[20vw] font-black uppercase leading-[0.72] tracking-[-0.06em] text-white md:text-[12rem]"
            >
              Forge
            </motion.h1>
          </div>

          {/* POWER */}

          <div className="overflow-hidden">
            <motion.h1
              initial={{
                y: 150,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.65,
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="hero-red-glow font-display text-[20vw] font-black uppercase leading-[0.72] tracking-[-0.06em] text-red-600 md:text-[12rem]"
            >
              Power.
            </motion.h1>
          </div>

          {/* DESCRIPTION */}

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
            className="mt-10 max-w-lg text-sm leading-7 text-gray-300"
          >
            A place built for people who refuse to settle. Train harder.
            Move stronger. Become the version of yourself you keep imagining.
          </motion.p>

          {/* BUTTONS */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.2,
              duration: 0.8,
            }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#membership"
              className="shine-button group flex items-center gap-4 bg-red-600 px-7 py-4 text-xs font-black uppercase tracking-[0.2em] text-white transition hover:bg-red-700"
            >
              Start Training

              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <button
              onClick={toggleVideo}
              className="flex items-center gap-3 border border-white/20 bg-black/30 px-7 py-4 text-xs font-black uppercase tracking-[0.2em] text-white backdrop-blur-md transition hover:border-red-500"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black">
                {playing ? (
                  <Pause size={11} />
                ) : (
                  <Play size={11} fill="currentColor" />
                )}
              </span>

              {playing ? "Pause Film" : "Play Film"}
            </button>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          SOUND BUTTON
      ====================================================== */}

      <button
        onClick={toggleSound}
        className="fixed bottom-7 left-6 z-50 flex items-center gap-3 border border-white/10 bg-black/50 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.25em] text-white backdrop-blur-xl transition hover:border-red-500 hover:text-red-500"
      >
        {soundOn ? (
          <Volume2 size={15} />
        ) : (
          <VolumeX size={15} />
        )}

        {soundOn ? "Sound On" : "Sound Off"}
      </button>

      {/* =====================================================
          AUDIO
      ====================================================== */}

      <audio
        ref={musicRef}
        src="/music/phonk.mp3"
        preload="auto"
      />

      {/* =====================================================
          VIDEO STATUS
      ====================================================== */}

      {videoError && (
        <div className="absolute right-6 top-28 z-40 border border-red-500/20 bg-black/60 px-4 py-2 text-[8px] uppercase tracking-widest text-red-400 backdrop-blur-md">
          Video unavailable — using cinematic fallback
        </div>
      )}

      {/* =====================================================
          SIDE TEXT
      ====================================================== */}

      <div className="absolute right-7 top-1/2 z-30 hidden -translate-y-1/2 rotate-90 md:block">
        <span className="text-[9px] font-bold uppercase tracking-[0.6em] text-white/40">
          Strength / Discipline / Results
        </span>
      </div>

      {/* =====================================================
          SCROLL
      ====================================================== */}

      <motion.a
        href="#stats"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center gap-3 text-white/50"
      >
        <span className="text-[8px] font-bold uppercase tracking-[0.4em]">
          Scroll
        </span>

        <ArrowDown size={15} />
      </motion.a>
    </section>
  );
}

export default CinematicHero;