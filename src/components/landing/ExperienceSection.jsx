import React from "react";
import { motion } from "framer-motion";
import { Coffee, Wifi, Car, Sun, Dog, Tv, UtensilsCrossed, Gift } from "lucide-react";

const services = [
  { icon: Coffee, title: "Desayuno incluido", desc: "Cada mañana comienza con un desayuno casero preparado con cariño" },
  { icon: UtensilsCrossed, title: "Comedor familiar", desc: "Comparte la mesa con la abuela y otros viajeros" },
  { icon: Gift, title: "Regalo de la Abuela", desc: "Barras con frases motivadoras que la abuela entrega al azar a cada huésped" },
  { icon: Dog, title: "Compañía animal", desc: "Tres gatos, un golden retriever y un criollo te acompañan" },
  { icon: Wifi, title: "Internet gratuito", desc: "Conexión Wi-Fi completamente libre en toda la casa" },
  { icon: Car, title: "Parqueadero", desc: "Espacio para 2 autos grandes o 3 pequeños" },
  { icon: Tv, title: "Entretenimiento", desc: "TV de 75\" en la sala, dardos y televisor por cuarto" },
  { icon: Sun, title: "Terraza al sol", desc: "Sillas para tomar el sol y contemplar las montañas" },
];

export default function ExperienceSection({ roomVideo }) {
  return (
    <section id="servicios" className="bg-moss text-bone py-16 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.4em] text-bone/50 font-medium mb-8 md:mb-24"
        >
          Experiencia & Servicios
        </motion.p>

        {/* Room showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 md:mb-40">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7"
          >
            <div className="shadow-table">
              <video
                src={roomVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
              Tu habitación,<br />
              <span className="italic text-bone/70">tu refugio</span>
            </h2>
            <div className="w-12 h-px bg-terracotta mb-6" />
            <p className="text-bone/70 leading-relaxed mb-4">
              Cada habitación cuenta con baño privado, dos camas cómodas y televisor. 
              Un espacio pensado para que descanses como lo mereces, con la serenidad 
              del campo y el confort de un hogar.
            </p>
            <p className="text-bone/70 leading-relaxed">
              Ideal para viajeros solos, parejas, familias pequeñas o grupos de amigos 
              que buscan reconectarse con lo esencial.
            </p>
          </motion.div>
        </div>

        {/* Services grid */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-3xl md:text-4xl font-light mb-12 text-center"
        >
          Todo lo que <span className="italic">necesitas</span>
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-bone/10">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-moss p-6 md:p-8 group hover:bg-moss/80 transition-colors duration-600"
            >
              <service.icon
                size={24}
                className="text-terracotta mb-4 group-hover:scale-110 transition-transform duration-600"
                strokeWidth={1.5}
              />
              <h4 className="font-heading text-lg font-medium mb-2">{service.title}</h4>
              <p className="text-bone/50 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}