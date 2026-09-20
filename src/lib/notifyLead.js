import { base44 } from "@/api/base44Client";

const NOTIFY_EMAIL = "gabro.contacto@gmail.com";

export async function notifyLead({ source, message }) {
  const timestamp = new Date().toLocaleString("es-CO", { timeZone: "America/Bogota" });
  await base44.integrations.Core.SendEmail({
    to: NOTIFY_EMAIL,
    subject: `Nuevo lead desde la web — ${source}`,
    body:
      `Hola,\n\n` +
      `Un visitante usó el botón "${source}" en la página web de Casa de La Abuela Irene.\n\n` +
      `Fecha y hora: ${timestamp}\n` +
      `Mensaje predefinido: ${message}\n\n` +
      `Este lead proviene del sitio web, no de otros canales (Booking, Airbnb, etc.).\n\n` +
      `— Casa de La Abuela Irene`,
  });
}