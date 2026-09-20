import React, { useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";

const attractions = [
  { name: "Parque del Café", desc: "Parque temático dedicado a la cultura cafetera colombiana", distance: "15 min" },
  { name: "Valle de Cocora", desc: "Hogar de las palmas de cera más altas del mundo", distance: "45 min" },
  { name: "Pueblos del Quindío", desc: "Salento, Filandia y los pueblos más coloridos de Colombia", distance: "20-40 min" },
  { name: "Mariposario de Calarcá", desc: "Santuario con cientos de especies de mariposas nativas", distance: "10 min" },
  { name: "Domo de las Aves", desc: "Observatorio de aves exóticas del Eje Cafetero", distance: "15 min" },
  { name: "Recuca", desc: "Recorrido de cultura cafetera desde la siembra hasta la taza", distance: "20 min" },
  { name: "Ecoparque Peñas Blancas", desc: "Naturaleza, senderos y cascadas en paisaje cafetero", distance: "25 min" },
  { name: "Mirador Chacana", desc: "Vista panorámica espectacular del Eje Cafetero", distance: "30 min" },
];

export default function AttractionsSection({ attractionsVideo }) {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 320, behavior: "smooth" });
    }
  };

  return (
    <section id="atracciones" className="bg-bone py-16 md:py-40">
      {/* Full-bleed image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative mb-10 md:mb-32"
      >
        <img
          src="https://media.base44.com/images/public/6a4afbac50ba66c95d50b45e/68e128e5c_WhatsAppImage2026-07-13at103628AM1.jpg"
          alt="Jardín de la Casa de La Abuela Irene"
          className="w-full h-64 md:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bone via-transparent to-transparent" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.4em] text-terracotta font-medium mb-4"
            >
              Punto de partida estratégico
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-heading text-oak text-4xl md:text-5xl lg:text-6xl font-light leading-tight"
            >
              Descubre el<br />
              <span className="italic text-terracotta">Eje Cafetero</span>
            </motion.h2>
          </div>

          {/* Scroll arrows — desktop */}
          <div className="hidden md:flex gap-2 mt-4">
            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 border border-oak/20 flex items-center justify-center hover:bg-oak hover:text-bone transition-all duration-600"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 border border-oak/20 flex items-center justify-center hover:bg-oak hover:text-bone transition-all duration-600"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Horizontal filmstrip */}
        <div
          ref={scrollRef}
          className="filmstrip-scroll flex gap-px overflow-x-auto pb-4"
        >
          {attractions.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex-shrink-0 w-72 md:w-80 bg-white p-8 group hover:bg-oak hover:text-bone transition-all duration-600"
            >
              <MapPin
                size={20}
                className="text-terracotta mb-6 group-hover:text-bone/70 transition-colors duration-600"
                strokeWidth={1.5}
              />
              <h3 className="font-heading text-2xl font-medium mb-2 group-hover:text-bone transition-colors duration-600">
                {item.name}
              </h3>
              <p className="text-oak/50 text-sm leading-relaxed mb-4 group-hover:text-bone/60 transition-colors duration-600">
                {item.desc}
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-terracotta font-medium group-hover:text-bone/50 transition-colors duration-600">
                ≈ {item.distance}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}