"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function Philosophy() {
  return (
    <section className="py-24 bg-white border-y border-accent/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-primary/20 flex items-center justify-center rounded-full mb-8">
            <ShieldCheck className="text-accent w-8 h-8" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif mb-8 text-foreground">
            No agendamos citas, <br />
            <span className="italic">diseñamos transformaciones.</span>
          </h2>
          
          <p className="text-xl md:text-2xl font-sans text-foreground/80 leading-relaxed max-w-3xl font-light">
            "Nuestra atención es estrictamente bajo evaluación previa para garantizar la privacidad 
            y el rigor técnico que su piel y cabello merecen."
          </p>
          
          <div className="mt-12 w-24 h-[1px] bg-accent/30 mx-auto" />
          
          <p className="mt-6 text-[10px] uppercase tracking-[0.5em] text-accent font-bold">
            Garantía de Exclusividad Santuario
          </p>
        </motion.div>
      </div>
    </section>
  );
}
