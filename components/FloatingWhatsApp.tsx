"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const phoneNumber = "18096678101";
  const message = encodeURIComponent(
    "Hola Kalon Estética & Spa, deseo solicitar una evaluación privada."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[60]">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: [1, 1.03, 1], 
          opacity: 1 
        }}
        transition={{ 
          scale: {
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut"
          },
          opacity: { delay: 1, duration: 0.8 }
        }}
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center bg-foreground/80 backdrop-blur-md border border-accent/40 text-accent hover:text-white hover:bg-foreground hover:border-accent transition-all duration-500 rounded-full shadow-2xl group p-3 md:p-4"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7 stroke-[1.5px] shrink-0" />
        
        <div className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-500 ease-in-out group-hover:max-w-[200px] group-hover:opacity-100">
          <span className="block text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase font-light pl-3 pr-2 md:pr-3">
            Concierge Digital
          </span>
        </div>
      </motion.a>
    </div>
  );
}

