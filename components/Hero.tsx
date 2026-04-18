"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero.png"
          alt="Interior de Santuario de Estética"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl opacity-50 z-10" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl opacity-30 z-10" />

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-accent uppercase tracking-[0.4em] mb-4 text-xs font-semibold">
            Bienvenida al Santuario
          </span>
          
          <h1 className="text-4xl md:text-7xl font-serif text-foreground leading-[1.1] mb-8">
            La Excelencia en Estética Avanzada <br />
            <span className="italic text-accent">llega a Arroyo Hondo.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 font-sans font-light leading-relaxed mb-12">
            Un santuario diseñado para la mujer que domina su tiempo y exige resultados excepcionales. 
            Cuidado de autor en un entorno de paz absoluta.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href="#evaluacion"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-foreground text-background font-sans uppercase tracking-widest text-sm font-bold shadow-2xl hover:bg-accent transition-colors duration-500"
            >
              Solicitar Evaluación Privada
            </motion.a>
            <a 
              href="#servicios" 
              className="text-sm uppercase tracking-widest font-bold border-b border-accent/40 pb-1 hover:border-accent transition-all duration-300"
            >
              Explorar Servicios
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] uppercase tracking-widest opacity-40">Deslizar</span>
        <div className="w-[1px] h-12 bg-accent/30" />
      </motion.div>
    </section>
  );
}
