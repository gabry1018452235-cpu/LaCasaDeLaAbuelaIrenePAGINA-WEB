import React, { useState, useEffect } from "react";
import { Sun, Cloud, CloudRain, CloudSun, CloudFog, CloudLightning, MapPin } from "lucide-react";

const codeToIcon = (code) => {
  if (code === 0 || code === 1) return Sun;
  if (code === 2) return CloudSun;
  if (code === 3) return Cloud;
  if ([45, 48].includes(code)) return CloudFog;
  if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return CloudRain;
  if ([95, 96, 99].includes(code)) return CloudLightning;
  return CloudSun;
};

const codeToLabel = (code) => {
  if (code === 0) return "Despejado";
  if (code === 1) return "Mayormente despejado";
  if (code === 2) return "Parcialmente nublado";
  if (code === 3) return "Nublado";
  if ([45, 48].includes(code)) return "Niebla";
  if ([51, 53, 55].includes(code)) return "Llovizna";
  if ([56, 57, 61, 63, 65, 66, 67].includes(code)) return "Lluvia";
  if ([80, 81, 82].includes(code)) return "Chubascos";
  if ([95, 96, 99].includes(code)) return "Tormenta";
  return "Variable";
};

export default function WeatherWidget() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=4.5295&longitude=-75.6409&current_weather=true"
    )
      .then((r) => r.json())
      .then((d) => setData(d.current_weather))
      .catch(() => setData(null));
  }, []);

  return (
    <div className="inline-flex items-center gap-3 mt-6 bg-oak text-bone px-5 py-3 shadow-table">
      <MapPin size={18} className="text-terracotta" strokeWidth={1.5} />
      <div className="leading-tight">
        <p className="text-[10px] uppercase tracking-[0.3em] text-bone/50">
          {data ? `Clima ahora · ${codeToLabel(data.weathercode)}` : "Clima del Eje Cafetero"}
        </p>
        <p className="font-heading text-lg font-medium">
          Eje Cafetero · Calarcá, Quindío
          {data && (
            <span className="text-terracotta"> · {Math.round(data.temperature)}°C</span>
          )}
        </p>
      </div>
      {data && (
        (() => {
          const Icon = codeToIcon(data.weathercode);
          return <Icon size={22} className="text-terracotta ml-1" strokeWidth={1.5} />;
        })()
      )}
    </div>
  );
}