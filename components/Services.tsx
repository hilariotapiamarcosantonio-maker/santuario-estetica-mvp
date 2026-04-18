"use client";

import { motion } from "framer-motion";
import { Sparkles, Scissors, Wind } from "lucide-react";

const services = [
  {
    title: "Faciales Clínicos",
    description: "Ciencia avanzada y protocolos de relajación profunda para una piel visiblemente renovada y luminosa.",
    icon: Sparkles,
  },
  {
    title: "Arquitectura Capilar",
    description: "Tratamientos de recuperación estructural y diseño de color de alto nivel, respetando la salud de su hebra.",
    icon: Scissors,
  },
  {
    title: "Bienestar Corporal",
    description: "Protocolos exclusivos de moldeado y desconexión total para restaurar el equilibrio entre cuerpo y mente.",
    icon: Wind,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-32 bg-[#F9F6F2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-accent uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
            Nuestras Disciplinas
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-foreground">
            Servicios de Autor
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative p-10 bg-white border border-accent/5 hover:border-accent/20 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <div className="mb-8 p-4 bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors duration-500">
                <service.icon className="w-8 h-8 text-accent" />
              </div>
              
              <h3 className="text-2xl font-serif mb-4 text-foreground group-hover:text-accent transition-colors duration-500">
                {service.title}
              </h3>
              
              <p className="text-foreground/70 font-sans font-light leading-relaxed">
                {service.description}
              </p>

              <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span>Ver Detalles</span>
                <div className="w-8 h-[1px] bg-accent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
