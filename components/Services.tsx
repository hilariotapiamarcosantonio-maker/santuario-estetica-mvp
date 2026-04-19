"use client";

import { motion } from "framer-motion";
import { Sparkles, Scissors, Wind, Zap, Shield, Crown } from "lucide-react";

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
  {
    title: "Dermocosmética",
    description: "Tratamientos preventivos y correctivos con activos de grado médico para una piel de textura impecable.",
    icon: Shield,
  },
  {
    title: "Escultura Facial",
    description: "Tecnología no invasiva de última generación para definir el contorno y revitalizar tejidos profundos.",
    icon: Zap,
  },
  {
    title: "Ritual de Oro 24K",
    description: "Experiencia sensorial suprema que combina iluminación intensa y relajación para eventos especiales.",
    icon: Crown,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-32 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-accent uppercase tracking-[0.5em] text-[10px] font-black mb-4 block">
            Nuestras Disciplinas
          </span>
          <h2 className="text-5xl md:text-7xl font-serif text-foreground tracking-tight">
            Servicios de Autor
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Visual Support Section - Digital Architecture Polish */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative h-[600px] mb-20 overflow-hidden group rounded-sm"
        >
          <div className="absolute inset-0 bg-foreground/40 z-10" />
          <img 
            src="/images/kalon_support.png" 
            alt="Luxury Esthetics Support" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 z-20 p-12 bg-gradient-to-t from-foreground via-foreground/50 to-transparent">
            <div className="max-w-3xl">
              <span className="text-accent uppercase tracking-[0.5em] text-[10px] font-black mb-6 block">
                Filosofía de Autor
              </span>
              <h3 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
                El equilibrio perfecto entre <br />
                <span className="text-accent">ciencia botánica y lujo moderno.</span>
              </h3>
              <p className="text-white/70 font-sans font-light leading-relaxed max-w-xl">
                Nuestra arquitectura estética no solo transforma la piel; redefine la experiencia del bienestar bajo un estándar de exclusividad absoluta.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(3).map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ 
        delay: (index % 3) * 0.1, 
        duration: 0.8,
        y: { type: "spring", stiffness: 300 }
      }}
      className="group relative p-12 bg-white border border-accent/5 hover:border-accent/20 transition-all duration-500 shadow-sm hover:shadow-2xl cursor-pointer"
    >
      <div className="mb-10 p-5 bg-primary/5 w-fit group-hover:bg-accent group-hover:text-white transition-all duration-500 rounded-sm">
        <service.icon className="w-8 h-8 text-accent group-hover:text-white stroke-[1px] transition-colors" />
      </div>
      
      <h3 className="text-2xl font-serif mb-5 text-foreground group-hover:text-accent transition-colors duration-500">
        {service.title}
      </h3>
      
      <p className="text-foreground/60 font-sans font-light leading-relaxed text-sm">
        {service.description}
      </p>

      <div className="mt-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-black text-accent bg-accent/5 w-fit px-4 py-2 hover:bg-accent hover:text-white transition-all duration-500 rounded-full">
        <span>Descubrir Más</span>
      </div>
    </motion.div>
  );
}
