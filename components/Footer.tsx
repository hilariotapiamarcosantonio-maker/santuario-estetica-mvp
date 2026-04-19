"use client";

import { MapPin, Phone, Instagram, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-foreground text-background py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="flex flex-col mb-10 text-accent">
              <span className="text-3xl font-serif tracking-[0.2em] uppercase">
                Kalon
              </span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-sans mt-2 opacity-60">
                Estética & Spa
              </span>
            </div>
            <p className="max-w-md text-background/50 font-sans font-light leading-relaxed text-sm">
              Destino de excelencia en estética avanzada y bienestar capilar. <br />
              Atención exclusiva bajo evaluación previa en el corazón de Arroyo Hondo, Santo Domingo.
            </p>
          </div>

          <div>
            <h4 className="text-accent uppercase tracking-[0.3em] text-[10px] font-black mb-8 underline underline-offset-8 decoration-accent/20">Ubicación</h4>
            <div className="flex items-start gap-4 text-background/60 text-sm font-light">
              <MapPin className="w-5 h-5 text-accent shrink-0 stroke-[1px]" />
              <p className="leading-relaxed">Arroyo Hondo, <br />Santo Domingo, <br />República Dominicana</p>
            </div>
          </div>

          <div>
            <h4 className="text-accent uppercase tracking-[0.3em] text-[10px] font-black mb-8 underline underline-offset-8 decoration-accent/20">Concierge</h4>
            <ul className="space-y-6 text-background/60 text-sm font-light">
              <li>
                <a href="https://wa.me/18096678101" className="flex items-center gap-4 hover:text-accent transition-colors group">
                  <Phone className="w-5 h-5 text-accent stroke-[1px]" />
                  <span>WhatsApp Digital</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/kalonsthetic/" className="flex items-center gap-4 hover:text-accent transition-colors group">
                  <Instagram className="w-5 h-5 text-accent stroke-[1px]" />
                  <span>@kalonsthetic</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <p className="text-[9px] uppercase tracking-[0.4em] text-white/30">
              &copy; {currentYear} Kalon Estética & Spa. Reservados todos los derechos.
            </p>
            <p className="text-[8px] uppercase tracking-[0.6em] text-accent/40 font-light">
              Digital Architecture by <span className="text-accent/60 font-bold">Marcos Hilario</span>
            </p>
          </div>
          <div className="flex gap-10 text-[9px] uppercase tracking-[0.4em] text-white/30">
            <a href="#" className="hover:text-accent transition-colors">Privacidad</a>
            <a href="#" className="hover:text-accent transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
