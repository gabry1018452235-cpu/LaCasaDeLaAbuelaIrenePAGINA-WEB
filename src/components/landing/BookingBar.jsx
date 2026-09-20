import React, { useState } from "react";

export default function BookingBar() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  const handleSubmit = () => {
    const entrada = checkIn || "[Fecha de entrada]";
    const salida = checkOut || "[Fecha de salida]";
    const msg = `Hola Casa Irene, me gustaría consultar la disponibilidad para ingresar el ${entrada}, salir el ${salida} para un total de ${guests} huéspedes.`;
    
    window.open(
      `https://wa.me/573207016292?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="bg-bone/95 backdrop-blur-md border-b border-oak/10">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-4 flex flex-col md:flex-row items-stretch md:items-end gap-3 md:gap-5">
        <label className="flex flex-col">
          <span className="text-[10px] uppercase tracking-[0.25em] text-oak/50 mb-1.5">Entrada</span>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="border border-oak/20 bg-transparent px-3 py-2.5 text-sm text-oak focus:border-terracotta outline-none transition-colors duration-300"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-[10px] uppercase tracking-[0.25em] text-oak/50 mb-1.5">Salida</span>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="border border-oak/20 bg-transparent px-3 py-2.5 text-sm text-oak focus:border-terracotta outline-none transition-colors duration-300"
          />
        </label>

        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-[0.25em] text-oak/50 mb-1.5">Huéspedes</span>
          <div className="flex items-center border border-oak/20">
            <button
              type="button"
              onClick={() => setGuests((g) => Math.max(1, g - 1))}
              className="px-3 py-2.5 text-oak hover:bg-oak hover:text-bone transition-colors duration-300"
              aria-label="Restar huésped"
            >
              −
            </button>
            <span className="px-4 py-2.5 text-sm text-oak min-w-[2.75rem] text-center">{guests}</span>
            <button
              type="button"
              onClick={() => setGuests((g) => Math.min(18, g + 1))}
              className="px-3 py-2.5 text-oak hover:bg-oak hover:text-bone transition-colors duration-300"
              aria-label="Sumar huésped"
            >
              +
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="bg-terracotta text-bone px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] hover:scale-[1.03] transition-transform duration-200 whitespace-nowrap md:self-end"
        >
          Ver Disponibilidad
        </button>
      </div>
    </div>
  );
}