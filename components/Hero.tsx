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

      <div className="relative z-20 max-w-[1400px] mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.span 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="inline-block text-accent uppercase tracking-[0.6em] mb-6 text-xs font-bold"
          >
            Bienvenida a Kalon
          </motion.span>
          
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl lg:text-9xl font-serif text-foreground leading-[0.95] mb-10 tracking-tight"
          >
            Maestría en <br />
            <span className="italic text-accent">Estética Avanzada.</span>
          </motion.h1>
          
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            className="max-w-3xl mx-auto text-lg md:text-2xl text-foreground font-sans font-light leading-relaxed mb-16 opacity-80"
          >
            Un destino de ultra-lujo diseñado para la mujer que exige resultados <br className="hidden md:block" />
            excepcionales. Cuidado de autor en el corazón de Arroyo Hondo.
          </motion.p>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            <motion.a
              href="https://wa.me/18096678101"
              whileHover={{ scale: 1.05, backgroundColor: "#C5A059", color: "#FAF9F6" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-primary text-background font-sans uppercase tracking-[0.3em] text-xs font-black shadow-2xl transition-all duration-500"
            >
              Agendar Experiencia
            </motion.a>
            <a 
              href="#servicios" 
              className="group text-xs uppercase tracking-[0.3em] font-black flex items-center gap-4 border-b border-accent/20 pb-2 hover:border-accent transition-all duration-300"
            >
              Explorar Servicios
              <div className="w-6 h-[1px] bg-accent group-hover:w-12 transition-all duration-500" />
            </a>
          </motion.div>
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
