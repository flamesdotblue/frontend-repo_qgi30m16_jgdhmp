import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MasalaShowcase from "./components/MasalaShowcase";
import AboutBlend from "./components/AboutBlend";

function Footer() {
  return (
    <footer className="bg-[#0b0b12] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/70 text-sm">
        <p>© {new Date().getFullYear()} MasalaX. Crafted with heat and harmony.</p>
        <div className="flex items-center gap-4">
          <a href="#flavors" className="hover:text-white">Flavors</a>
          <a href="#about" className="hover:text-white">Process</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b12]">
      <Navbar />
      <HeroSection />
      <MasalaShowcase />
      <AboutBlend />
      <Footer />
    </div>
  );
}
