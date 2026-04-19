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
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <div className="flex flex-col group cursor-pointer">
          <span className="text-2xl font-serif tracking-[0.2em] uppercase text-accent leading-none">
            Kalon
          </span>
          <span className="text-[10px] uppercase tracking-[0.5em] font-sans mt-1 opacity-60 group-hover:opacity-100 transition-opacity">
            Estética & Spa
          </span>
        </div>

        <div className="hidden md:flex gap-12 text-[11px] uppercase tracking-[0.3em] font-sans items-center">
          <motion.a 
            href="#inicio" 
            whileHover={{ y: -2 }}
            className="hover:text-accent transition-colors"
          >
            Inicio
          </motion.a>
          <motion.a 
            href="#servicios" 
            whileHover={{ y: -2 }}
            className="hover:text-accent transition-colors"
          >
            Servicios
          </motion.a>
          <motion.a 
            href="https://wa.me/18096678101"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-accent/30 text-accent hover:bg-accent hover:text-white transition-all duration-700 font-bold"
          >
            Cita Exclusiva
          </motion.a>
        </div>

        <button className="md:hidden text-accent">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </motion.nav>
  );
}
