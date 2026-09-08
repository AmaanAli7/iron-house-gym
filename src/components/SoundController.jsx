import { Volume2, VolumeX } from "lucide-react";

function SoundController({ soundOn, setSoundOn }) {
  return (
    <button
      onClick={() => setSoundOn(!soundOn)}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 border border-white/10 bg-black/60 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.25em] text-white backdrop-blur-xl transition hover:border-red-500 hover:text-red-500"
    >
      {soundOn ? <Volume2 size={14} /> : <VolumeX size={14} />}

      {soundOn ? "Sound On" : "Sound Off"}
    </button>
  );
}

export default SoundController;