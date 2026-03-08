import { motion } from "framer-motion";
import heroCoffee from "@/assets/hero-coffee.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroCoffee}
        alt="Interior acolhedor da Café & Sabor"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-coffee-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gold-light font-body text-sm tracking-[0.3em] uppercase mb-4"
        >
          Desde 2010 — Cafés Especiais
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl font-bold text-cream leading-tight mb-6"
        >
          Café & Sabor
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-cream/80 font-body text-lg md:text-xl mb-10 max-w-xl mx-auto"
        >
          Uma experiência única de sabores artesanais, grãos selecionados e um ambiente feito para acolher.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#cardapio"
            className="px-8 py-3 rounded-md bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Ver Cardápio
          </a>
          <a
            href="#reservas"
            className="px-8 py-3 rounded-md border border-cream/30 text-cream font-medium hover:bg-cream/10 transition-colors"
          >
            Reservar Mesa
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 border-2 border-cream/40 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-cream/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
