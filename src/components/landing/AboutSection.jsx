import React from "react";
import { motion } from "framer-motion";

export default function AboutSection({ aboutVideo }) {
  return (
    <section id="historia" className="py-16 md:py-40 px-6 md:px-16 lg:px-24 bg-bone">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.4em] text-terracotta font-medium mb-8 md:mb-24"
        >
          Nuestra Historia
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Image - offset left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-5 lg:-mt-12"
          >
            <div className="shadow-table">
              <video
                src={aboutVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
          </motion.div>

          {/* Text - offset right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-6 lg:col-start-7 lg:pt-16"
          >
            <h2 className="font-heading text-oak text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
              Donde el tiempo<br />
              <span className="italic text-terracotta">transcurre mas lento</span>
            </h2>

            <div className="hairline-x mb-8" />

            <p className="text-oak/70 text-base md:text-lg leading-relaxed mb-6">
              Casa de La Abuela Irene es un hospedaje rural de ambiente campestre,
              ubicado en el corazón del Eje Cafetero. Un espacio tranquilo, cómodo,
              acogedor y libre de ruido, donde cada huésped es recibido como un nieto
              más que llega a casa.
            </p>

            <p className="text-oak/70 text-base md:text-lg leading-relaxed mb-6">
              Aqui las conversaciones largas son parte del paisaje, y la abuela
              recibe a cada visitante con una taza de café de alta calidad, cultivado
              en las montañas que rodean la finca. Una experiencia enfocada en la
              desconexión, la naturaleza y la hospitalidad tradicional.
            </p>

            <p className="text-oak/50 text-sm italic leading-relaxed">
              "Como una casa de abuela cuidando a sus nietos – con cariño,
              café recién hecho y las puertas siempre abiertas."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}