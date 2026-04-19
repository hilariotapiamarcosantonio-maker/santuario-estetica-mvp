"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function Philosophy() {
  return (
    <section className="py-32 bg-background border-y border-accent/10">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <div className="w-20 h-20 bg-primary/5 flex items-center justify-center rounded-full mb-12 border border-accent/10">
            <ShieldCheck className="text-accent w-10 h-10 stroke-[1px]" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif mb-10 text-foreground leading-[1.1] tracking-tight">
            No agendamos citas, <br />
            <span className="italic text-accent">creamos legados de belleza.</span>
          </h2>
          
          <p className="text-2xl md:text-4xl font-sans text-foreground leading-[1.4] max-w-4xl font-extralight tracking-tight opacity-90">
            "Nuestra atención es estrictamente bajo evaluación previa para garantizar la privacidad 
            y la maestría técnica que su piel y cabello merecen."
          </p>
          
          <div className="mt-16 w-32 h-[1px] bg-accent/30 mx-auto" />
          
          <p className="mt-8 text-[11px] uppercase tracking-[0.8em] text-accent font-black">
            Garantía de Exclusividad Kalon
          </p>
        </motion.div>
      </div>
    </section>
  );
}
