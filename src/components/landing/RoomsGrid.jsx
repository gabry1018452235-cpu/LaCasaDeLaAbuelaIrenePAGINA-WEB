import React from "react";

/* Inline SVG service icons (brand-neutral, inherit currentColor) */
const IconBed = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6" />
    <path d="M3 14h18" />
    <path d="M3 18v2M21 18v2" />
    <path d="M7 10V8a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2" />
  </svg>
);
const IconBath = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12h16" />
    <path d="M5 12v3a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-3" />
    <path d="M7 12V6a2 2 0 0 1 2-2h1" />
    <path d="M9 6h2" />
  </svg>
);
const IconTv = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="6" width="18" height="12" rx="1" />
    <path d="M8 21h8M12 18v3" />
  </svg>
);
const IconCoffee = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 8h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8z" />
    <path d="M17 9h2.5a2 2 0 0 1 0 4H17" />
    <path d="M7 2c-.5 1 .5 2 0 3M11 2c-.5 1 .5 2 0 3" />
  </svg>
);

const rooms = [
  {
    name: "Habitación del Café",
    img: "https://media.base44.com/videos/public/6a4afbac50ba66c95d50b45e/8ed8d5fa5_WhatsappImage2026-07-03At63646Pm.mp4",
    desc: "Un espacio cálido con luz natural y el aroma del café recién hecho que invade las mañanas.",
  },
  {
    name: "Habitación del Jardín",
    img: "https://media.base44.com/videos/public/6a4afbac50ba66c95d50b45e/848878fa5_WhatsappImage2026-07-03At63648Pm2.mp4",
    desc: "Ventanas que enmarcan el verde del campo, ideal para desconectar y descansar en silencio.",
  },
  {
    name: "Habitación del Sol",
    img: "https://media.base44.com/videos/public/6a4afbac50ba66c95d50b45e/b8e80b36f_WhatsappImage2026-07-03At63646Pm1.mp4",
    desc: "La luz del Eje Cafetero entra de mañana, acompañando un despertar reposado y familiar.",
  },
];

export default function RoomsGrid() {
  return (
    <section id="habitaciones" className="py-16 md:py-40 bg-bone">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <p className="text-xs uppercase tracking-[0.4em] text-terracotta font-medium mb-4">
          Habitaciones
        </p>
        <h2 className="font-heading text-oak text-4xl md:text-5xl lg:text-6xl font-light mb-8 md:mb-20">
          Tres refugios para <span className="italic text-terracotta">descansar</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {rooms.map((room) => (
            <article
              key={room.name}
              className="group bg-white shadow-table transition-transform duration-500 hover:-translate-y-[5px] overflow-hidden flex flex-col"
            >
              <div className="overflow-hidden aspect-[4/3]">
                <video
                  src={room.img}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading text-2xl font-medium text-oak mb-2">{room.name}</h3>
                <p className="text-oak/60 text-sm leading-relaxed mb-5 flex-1">{room.desc}</p>
                <div className="hairline-x mb-4" />
                <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-oak/60">
                  <span className="flex items-center gap-2 text-xs"><IconBed /> 2 camas</span>
                  <span className="flex items-center gap-2 text-xs"><IconBath /> 1 baño</span>
                  <span className="flex items-center gap-2 text-xs"><IconTv /> Televisor</span>
                  <span className="flex items-center gap-2 text-xs"><IconCoffee /> Desayuno</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}