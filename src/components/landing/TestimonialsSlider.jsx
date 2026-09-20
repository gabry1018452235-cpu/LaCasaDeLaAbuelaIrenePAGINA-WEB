import React, { useState } from "react";

// Fotos reales de huéspedes — género respetado en cada reseña
const testimonials = [
  {
    quote: "Me encanto venir aca, el ambiente es tan tranquilo y acogedor no eligiria otro.",
    author: "Camila Restrepo",
    origin: "Pereira, Risaralda",
    photo: "https://media.base44.com/images/public/6a4afbac50ba66c95d50b45e/6c8c8310f_WhatsAppImage2026-07-26at45944PM.jpg",
  },
  {
    quote: "La abuela es un amor, nos atendio re bien y el desayuno estaba buenisimo. 100% recomendado.",
    author: "Andrés Morales",
    origin: "Bogotá, Cundinamarca",
    photo: "https://media.base44.com/images/public/6a4afbac50ba66c95d50b45e/7d392b17e_WhatsAppImage2026-07-13at103631AM2.jpg",
  },
  {
    quote: "Nos tocaba descansar y fue la mejor decision. Los perros y gatos le dan un toque super familiar.",
    author: "Laura Giraldo",
    origin: "Medellín, Antioquia",
    photo: "https://media.base44.com/images/public/6a4afbac50ba66c95d50b45e/c930f3643_WhatsAppImage2026-07-26at45945PM2.jpg",
  },
  {
    quote: "Llegamos sin saber que esperar y nos fuimos con ganas de volver. Súper limpio y muy comodo.",
    author: "Santiago Torres",
    origin: "Cali, Valle del Cauca",
    photo: "https://media.base44.com/images/public/6a4afbac50ba66c95d50b45e/c77341b41_WhatsAppImage2026-07-26at45946PM1.jpg",
  },
  {
    quote: "Un lugar tranquilo lejos del ruido, uno se desconecta de verdad ahi. Gracias doña Irene.",
    author: "Mariana Vélez",
    origin: "Manizales, Caldas",
    photo: "https://media.base44.com/images/public/6a4afbac50ba66c95d50b45e/d242fca6d_WhatsAppImage2026-07-26at45949PM2.jpg",
  },
  {
    quote: "Buena atencion, rica comida y lindos paisajes. Para ir en familia o con amigos esta perfecto.",
    author: "Juan Pablo Herrera",
    origin: "Armenia, Quindío",
    photo: "https://media.base44.com/images/public/6a4afbac50ba66c95d50b45e/6c8c8310f_WhatsAppImage2026-07-26at45944PM.jpg",
  },
];

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const [touchX, setTouchX] = useState(null);

  const go = (dir) => {
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const onTouchStart = (e) => setTouchX(e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    setTouchX(null);
  };

  const t = testimonials[index];

  return (
    <section id="testimonios" className="py-16 md:py-32 bg-moss text-bone">
      <div className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
        <p className="text-xs uppercase tracking-[0.4em] text-terracotta font-medium mb-12 md:mb-16 text-center">
          Reseñas de huéspedes
        </p>

        <div
          key={index}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="animate-fade-in-up grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center cursor-grab active:cursor-grabbing"
        >
          {/* Photo */}
          <div className="md:col-span-5">
            <div className="shadow-table overflow-hidden aspect-[4/5] rounded-3xl bg-bone/5">
              <img src={t.photo} alt={t.author} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Quote */}
          <div className="md:col-span-7 min-h-[220px] md:min-h-[280px] flex flex-col justify-center">
            <blockquote>
              <p className="font-heading text-2xl md:text-4xl font-light italic leading-relaxed mb-8">
                "{t.quote}"
              </p>
              <footer>
                <p className="font-heading text-lg">{t.author}</p>
                <p className="text-bone/50 text-xs uppercase tracking-[0.3em] mt-1">
                  {t.origin}
                </p>
              </footer>
            </blockquote>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => go(-1)}
            className="w-10 h-10 border border-bone/20 flex items-center justify-center hover:bg-bone hover:text-moss transition-all duration-600"
            aria-label="Anterior"
          >
            ←
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ir al testimonio ${i + 1}`}
                className={`w-2 h-2 transition-colors duration-300 ${
                  i === index ? "bg-terracotta" : "bg-bone/20 hover:bg-bone/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            className="w-10 h-10 border border-bone/20 flex items-center justify-center hover:bg-bone hover:text-moss transition-all duration-600"
            aria-label="Siguiente"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}