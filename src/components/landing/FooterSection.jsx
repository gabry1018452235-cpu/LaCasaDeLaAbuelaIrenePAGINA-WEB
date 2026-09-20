import { motion } from "framer-motion";
import { Phone, MapPin, MessageCircle } from "lucide-react";

const FOOTER_WA_URL =
  "https://wa.me/573207016292?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20en%20Casa%20de%20La%20Abuela%20Irene";

export default function FooterSection() {
const handleReserve = (e) => {
  e.preventDefault();
  window.open(FOOTER_WA_URL, "_blank", "noopener,noreferrer");
};
  return (
    <footer id="reservar" className="bg-oak text-bone py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        {/* Reservation heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20 md:mb-32"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-terracotta font-medium mb-6">
            Reserva tu estadía
          </p>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-8">
            La abuela te<br />
            <span className="italic text-bone/70">está esperando</span>
          </h2>
          <div className="w-16 h-px bg-terracotta mx-auto mb-8" />
          <p className="text-bone/50 max-w-md mx-auto leading-relaxed mb-10">
            Desde $70.000 COP por persona o $130.900 COP en pareja por noche. 
            Incluye desayuno casero y el cariño de siempre.
          </p>
          <a
            href={FOOTER_WA_URL}
            onClick={handleReserve}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-terracotta text-bone px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] hover:bg-terracotta/90 transition-all duration-600 shadow-table"
          >
            <MessageCircle size={18} strokeWidth={1.5} />
            Reservar por WhatsApp
          </a>
        </motion.div>

        {/* Footer info — formal invitation style */}
        <div className="hairline-x bg-bone/10 mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center">
          <div>
            <MapPin size={18} className="text-terracotta mx-auto mb-4" strokeWidth={1.5} />
            <p className="text-xs uppercase tracking-[0.3em] text-bone/40 mb-2">Ubicación</p>
            <p className="font-heading text-lg text-bone/80">
              Zona rural de Calarcá
            </p>
            <p className="text-bone/40 text-sm">Quindío, Colombia</p>
          </div>

          <div>
            <Phone size={18} className="text-terracotta mx-auto mb-4" strokeWidth={1.5} />
            <p className="text-xs uppercase tracking-[0.3em] text-bone/40 mb-2">Contacto</p>
            <a
              href="tel:+573207016292"
              className="font-heading text-lg text-bone/80 hover:text-terracotta transition-colors duration-600"
            >
              +57 320 701 6292
            </a>
            <p className="text-bone/40 text-sm">WhatsApp disponible</p>
          </div>

          <div>
            <MessageCircle size={18} className="text-terracotta mx-auto mb-4" strokeWidth={1.5} />
            <p className="text-xs uppercase tracking-[0.3em] text-bone/40 mb-2">Plataformas</p>
            <p className="font-heading text-lg text-bone/80">
              Booking · Airbnb
            </p>
            <p className="text-bone/40 text-sm">También reservas directas</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="hairline-x bg-bone/10 mt-16 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-heading text-sm text-bone/30 tracking-wide">
            Casa de La Abuela Irene
          </p>
          <p className="text-xs text-bone/20 uppercase tracking-[0.2em]">
            Calarcá · Quindío · Colombia
          </p>
        </div>
      </div>
    </footer>
  );
}