import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const bullets = [
  "Stone-ground nano grind for maximum aroma unlock",
  "Low-oxygen roasting protects natural oils",
  "No fillers, salts, or anti-caking agents",
  "Batch‑coded transparency and origin traceability",
];

export default function AboutBlend() {
  return (
    <section id="about" className="relative bg-[#0b0b12] py-24">
      <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white">The Craft Behind The Heat</h3>
          <p className="mt-4 text-white/80">
            Our masalas honor tradition while embracing modern precision. From sourcing to sealing,
            every step is tuned to preserve volatile aromatics and deliver a clean, powerful flavor.
          </p>
          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-white/85">
                <CheckCircle2 className="mt-0.5 text-amber-400" size={20} />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/20 via-purple-500/10 to-amber-500/10">
            <div className="absolute inset-0 grid grid-cols-2 gap-3 p-4">
              <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur flex items-center justify-center text-white/80">Whole Seeds</div>
              <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur flex items-center justify-center text-white/80">Roast Curve</div>
              <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur flex items-center justify-center text-white/80">Nano Grind</div>
              <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur flex items-center justify-center text-white/80">Aroma Lock</div>
            </div>
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-amber-500/20 blur-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
