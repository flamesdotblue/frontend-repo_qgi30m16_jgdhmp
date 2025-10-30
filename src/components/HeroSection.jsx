import Spline from "@splinetool/react-spline";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0b0b12]">
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: "100%", height: "100%" }} />
      </div>

      {/* Soft gradient glows that don't block interaction */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-[36rem] w-[36rem] rounded-full bg-fuchsia-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-[36rem] w-[36rem] rounded-full bg-amber-500/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-36 pb-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Sparkles size={14} className="text-amber-400" /> Cyber Masala Collection 2025
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-transparent">
            Spice, reimagined for a futuristic palate
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/80 leading-relaxed">
            We fuse ancient Indian spice craft with cutting‑edge roasting and nano‑grind
            to unlock deeper aroma, richer color, and unforgettable taste.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#flavors" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 px-6 py-3 text-black font-semibold shadow-[0_0_40px_rgba(255,87,34,0.35)] hover:brightness-110 transition">
              Explore Flavors
            </a>
            <a href="#about" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-white/90 hover:bg-white/10 transition">
              Our Process
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
