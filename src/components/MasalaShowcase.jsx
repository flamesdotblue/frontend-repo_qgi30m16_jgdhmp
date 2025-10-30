import { Leaf, Flame, Star } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    name: "Quantum Garam Masala",
    desc: "Balanced warmth with a deep, aromatic finish.",
    price: "$12",
    badge: "Best Seller",
    color: "from-amber-400 via-orange-500 to-rose-500",
    emoji: "🌶️",
    rating: 4.9,
  },
  {
    name: "Nebula Turmeric",
    desc: "Vibrant color, high-curcumin golden glow.",
    price: "$9",
    badge: "Curcumin+",
    color: "from-yellow-300 via-amber-300 to-orange-300",
    emoji: "✨",
    rating: 4.8,
  },
  {
    name: "Cosmic Cumin",
    desc: "Earthy, nutty notes with cosmic clarity.",
    price: "$10",
    badge: "Small Batch",
    color: "from-emerald-300 via-lime-300 to-teal-300",
    emoji: "🪐",
    rating: 4.7,
  },
  {
    name: "Aurora Chili Blend",
    desc: "Bright heat with a fruity crescendo.",
    price: "$11",
    badge: "New",
    color: "from-rose-400 via-pink-500 to-fuchsia-500",
    emoji: "🔥",
    rating: 4.8,
  },
];

function ProductCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl overflow-hidden"
    >
      <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${item.color} opacity-30 blur-2xl pointer-events-none`} />
      <div className="flex items-start justify-between">
        <span className="text-[10px] uppercase tracking-widest text-white/70 bg-white/10 border border-white/10 px-2 py-1 rounded-full">
          {item.badge}
        </span>
        <div className="flex items-center gap-1 text-amber-300">
          <Star size={16} fill="currentColor" />
          <span className="text-xs text-white/80">{item.rating}</span>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <div className={`h-14 w-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-black text-2xl shadow-inner`}>{item.emoji}</div>
        <div>
          <h3 className="text-white font-semibold text-lg leading-tight">{item.name}</h3>
          <p className="text-white/70 text-sm mt-1">{item.desc}</p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <span className="text-white font-semibold">{item.price}</span>
        <button className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-3 py-2 text-sm font-medium hover:brightness-90 transition">
          <Flame size={16} /> Add to cart
        </button>
      </div>
    </motion.div>
  );
}

export default function MasalaShowcase() {
  return (
    <section id="flavors" className="relative bg-[#0b0b12] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Signature Blends</h2>
            <p className="text-white/70 mt-2">Crafted with single-origin spices and precision roasting.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-white/70">
            <Leaf size={18} className="text-emerald-300" /> Sustainably sourced
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p) => (
            <ProductCard item={p} key={p.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
