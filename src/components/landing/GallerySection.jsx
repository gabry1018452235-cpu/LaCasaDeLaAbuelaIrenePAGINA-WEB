import React, { useState } from "react";
import { motion } from "framer-motion";

const photos = [
  {
    src: "https://media.base44.com/images/public/6a4afbac50ba66c95d50b45e/c2142b408_WhatsAppImage2026-07-13at103627AM.jpg",
    caption: "Compañía que se queda contigo",
  },
  {
    src: "https://media.base44.com/images/public/6a4afbac50ba66c95d50b45e/b7f6a8811_WhatsAppImage2026-07-13at103629AM2.jpg",
    caption: "Detalles que cuentan historias",
  },
  {
    src: "https://media.base44.com/images/public/6a4afbac50ba66c95d50b45e/50c9ee3cd_WhatsAppImage2026-07-13at103632AM.jpg",
    caption: "El desayuno de la abuela",
  },
  {
    src: "https://media.base44.com/images/public/6a4afbac50ba66c95d50b45e/6c1812da0_WhatsAppImage2026-07-13at103628AM1.jpg",
    caption: "El jardín que respira contigo",
  },
];

export default function GallerySection() {
  const [index, setIndex] = useState(0);
  const [touchX, setTouchX] = useState(null);

  const go = (dir) => {
    setIndex((prev) => (prev + dir + photos.length) % photos.length);
  };

  const onTouchStart = (e) => setTouchX(e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    setTouchX(null);
  };

  const p = photos[index];

  return (
    <section className="py-16 md:py-40 bg-bone overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 mb-8 md:mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.4em] text-terracotta font-medium mb-4"
        >
          Momentos
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-oak text-4xl md:text-5xl lg:text-6xl font-light"
        >
          Un lugar para <span className="italic">sentir</span>
        </motion.h2>
      </div>

      {/* Carrusel táctil */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
        <div
          key={index}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="animate-fade-in-up cursor-grab active:cursor-grabbing"
        >
          <div className="shadow-table overflow-hidden aspect-[4/5] md:aspect-[16/10] bg-oak/5">
            <img
              src={p.src}
              alt={p.caption}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
          <p className="font-heading italic text-oak/60 text-center text-lg md:text-xl mt-6">
            {p.caption}
          </p>
        </div>

        {/* Controles */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => go(-1)}
            className="w-10 h-10 border border-oak/20 flex items-center justify-center hover:bg-oak hover:text-bone transition-all duration-600"
            aria-label="Anterior"
          >
            ←
          </button>

          <div className="flex gap-2">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ir a la foto ${i + 1}`}
                className={`w-2 h-2 transition-colors duration-300 ${
                  i === index ? "bg-terracotta" : "bg-oak/20 hover:bg-oak/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            className="w-10 h-10 border border-oak/20 flex items-center justify-center hover:bg-oak hover:text-bone transition-all duration-600"
            aria-label="Siguiente"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}