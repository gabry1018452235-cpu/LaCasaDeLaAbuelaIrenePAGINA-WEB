import React from "react";

export default function LocationSection() {
  return (
    <section id="ubicacion" className="py-16 md:py-32 bg-bone">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <p className="text-xs uppercase tracking-[0.4em] text-terracotta font-medium mb-12 md:mb-16 text-center">
          Dónde nos ubicamos
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Map */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="shadow-table overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.336914423476!2d-75.6304803!3d4.5332128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38f57352d58f2d%3A0x124aab8b011cefdd!2sCasa%20de%20La%20Abuela%20Irene!5e0!3m2!1ses-419!2sco!4v1785102001246!5m2!1ses-419!2sco"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Ubicación Casa de La Abuela Irene"
                className="w-full h-[320px] md:h-[450px]"
              />
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
              En el corazón del<br />
              <span className="italic">Eje Cafetero</span>
            </h2>
            <div className="w-12 h-px bg-terracotta mb-6" />
            <p className="text-oak/70 leading-relaxed mb-6">
              Rodeados de montañas, cafetales y guaduales, en una vereda tranquila a las
              afueras de Calarcá. Un refugio a 20 minutos de Armenia y muy cerca del
              Parque del Café.
            </p>
            <div className="border-l-2 border-terracotta pl-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-oak/50 mb-1">
                Dirección
              </p>
              <p className="font-heading text-lg text-oak leading-snug">
                Vereda Los Tanques<br />
                Finca La Mata de Guadua<br />
                Calarcá, Quindío
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}