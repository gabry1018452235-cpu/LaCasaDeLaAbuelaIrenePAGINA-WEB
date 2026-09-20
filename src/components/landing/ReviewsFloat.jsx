import React from "react";
import { Star } from "lucide-react";

export default function ReviewsFloat() {
  const scroll = () => {
    document.getElementById("testimonios")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scroll}
      aria-label="Ver reseñas"
      className="pulse-ring fixed top-1/2 left-4 -translate-y-1/2 z-[9998] w-14 h-14 rounded-full bg-terracotta text-bone flex items-center justify-center shadow-table hover:scale-[1.03] transition-transform duration-200"
    >
      <Star size={26} fill="currentColor" strokeWidth={0} />
    </button>
  );
}