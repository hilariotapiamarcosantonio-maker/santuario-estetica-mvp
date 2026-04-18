"use client";

import { MapPin, Phone, Instagram, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-foreground text-background py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex flex-col mb-8 text-accent">
              <span className="text-2xl font-serif tracking-widest uppercase">
                Santuario
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-sans -mt-1 opacity-70">
                De Estética
              </span>
            </div>
            <p className="max-w-md text-background/60 font-sans font-light leading-relaxed">
              Reserva de espacio exclusiva vía Concierge Digital. <br />
              Estamos ubicados en el corazón de Arroyo Hondo, Santo Domingo, 
              listos para ofrecerle una experiencia de cuidado sin precedentes.
            </p>
          </div>

          <div>
            <h4 className="text-accent uppercase tracking-widest text-xs font-bold mb-6">Ubicación</h4>
            <div className="flex items-start gap-4 text-background/60 text-sm font-light">
              <MapPin className="w-5 h-5 text-accent shrink-0" />
              <p>Arroyo Hondo, Santo Domingo, <br />República Dominicana</p>
            </div>
          </div>

          <div>
            <h4 className="text-accent uppercase tracking-widest text-xs font-bold mb-6">Concierge</h4>
            <ul className="space-y-4 text-background/60 text-sm font-light">
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-accent" />
                <span>WhatsApp Digital</span>
              </li>
              <li className="flex items-center gap-4">
                <Instagram className="w-5 h-5 text-accent" />
                <span>@SantuarioEstetica</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-background/10 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-background/40">
            &copy; {currentYear} Santuario de Estética. Todos los derechos reservados.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-background/40">
            <a href="#" className="hover:text-accent transition-colors">Privacidad</a>
            <a href="#" className="hover:text-accent transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
