"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-accent/10 py-3" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xl font-serif tracking-widest uppercase text-accent">
            Santuario
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-sans -mt-1 opacity-70">
            De Estética
          </span>
        </div>

        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-sans">
          <a href="#inicio" className="hover:text-accent transition-colors">Inicio</a>
          <a href="#servicios" className="hover:text-accent transition-colors">Servicios</a>
          <a href="#contacto" className="px-4 py-2 border border-accent/20 hover:bg-accent hover:text-white transition-all duration-500">
            Cita Exclusiva
          </a>
        </div>

        <button className="md:hidden text-accent">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </motion.nav>
  );
}
