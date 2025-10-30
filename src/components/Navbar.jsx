import { ShoppingCart, Leaf, Star } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500" />
          <span className="text-white font-semibold tracking-wide text-lg">MasalaX</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#flavors" className="hover:text-white transition">Flavors</a>
          <a href="#about" className="hover:text-white transition">Our Story</a>
          <a href="#craft" className="hover:text-white transition">Craft</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/10 transition">
            <Leaf size={18} />
            Explore Blends
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-black font-medium shadow-[0_0_40px_rgba(255,87,34,0.35)] hover:brightness-110 transition">
            <ShoppingCart size={18} />
            Shop
          </button>
        </div>
      </div>
      <div className="px-4 pb-3 md:hidden text-xs text-white/60 flex items-center gap-2 justify-center">
        <Star size={14} className="text-amber-400" /> Taste the future of spice
      </div>
    </header>
  );
}
