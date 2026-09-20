import React, { useState, useRef } from "react";
import { Volume2, VolumeX, Play, Pause, RotateCcw, RotateCw } from "lucide-react";
import WeatherWidget from "@/components/landing/WeatherWidget";

export default function HeroSection({ heroVideo }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };

  const skip = (sec) => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = Math.min(Math.max(0, v.currentTime + sec), v.duration || 0);
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-bone overflow-hidden pt-24 md:pt-20">
      <div
        className="absolute inset-0 animated-gradient"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #F8F5F0 0%, #F8F5F0 38%, rgba(140,59,36,0.06) 50%, #F8F5F0 62%, rgba(62,75,57,0.05) 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-16 lg:px-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Title — primero en móvil */}
          <div className="lg:col-span-7 order-1 lg:order-1 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h1 className="font-heading font-bold text-oak leading-[0.95] tracking-tight text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              LA CASA DE LA ABUELA IRENE
            </h1>
            <div className="hairline-x mt-6 md:mt-8 mb-4 md:mb-6 max-w-md" />
            <p className="text-oak/60 text-xs md:text-base font-body uppercase tracking-[0.25em] md:tracking-[0.3em]">
              Calarcá · Quindío · Colombia
            </p>
            <WeatherWidget />
          </div>

          {/* Reel vertical */}
          <div className="lg:col-span-5 order-2 lg:order-2 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
            <div className="relative shadow-table overflow-hidden">
              <video
                ref={videoRef}
                src="https://media.base44.com/videos/public/6a4afbac50ba66c95d50b45e/36dc5268c_VideoFinal_4_LaCasaDeLaAbuelaIrene.mp4"
                autoPlay
                muted={muted}
                loop
                playsInline
                preload="auto"
                className="w-full aspect-[9/16] object-cover"
              />

              {/* Controles estéticos */}
              <div className="absolute bottom-0 inset-x-0 flex items-center justify-between gap-2 px-3 py-3 bg-gradient-to-t from-oak/70 to-transparent">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => skip(-10)}
                    aria-label="Retroceder 10s"
                    className="w-9 h-9 rounded-full bg-bone/15 text-bone flex items-center justify-center hover:bg-bone/30 transition-colors duration-300 backdrop-blur-sm"
                  >
                    <RotateCcw size={16} />
                  </button>
                  <button
                    onClick={togglePlay}
                    aria-label={playing ? "Pausar" : "Reproducir"}
                    className="w-10 h-10 rounded-full bg-bone/15 text-bone flex items-center justify-center hover:bg-bone/30 transition-colors duration-300 backdrop-blur-sm"
                  >
                    {playing ? <Pause size={18} /> : <Play size={18} />}
                  </button>
                  <button
                    onClick={() => skip(10)}
                    aria-label="Adelantar 10s"
                    className="w-9 h-9 rounded-full bg-bone/15 text-bone flex items-center justify-center hover:bg-bone/30 transition-colors duration-300 backdrop-blur-sm"
                  >
                    <RotateCw size={16} />
                  </button>
                </div>

                <button
                  onClick={() => setMuted((m) => !m)}
                  aria-label={muted ? "Activar sonido" : "Silenciar"}
                  className="w-9 h-9 rounded-full bg-bone/15 text-bone flex items-center justify-center hover:bg-bone/30 transition-colors duration-300 backdrop-blur-sm"
                >
                  {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}