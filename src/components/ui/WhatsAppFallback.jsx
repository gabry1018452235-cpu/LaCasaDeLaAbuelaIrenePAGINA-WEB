import { useEffect, useState } from "react";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

async function copyText(value) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
      return true;
    }
  } catch {
    // Fall through to the selection-based copy path used by some in-app browsers.
  }

  const textArea = document.createElement("textarea");
  textArea.value = value;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.select();

  let copied = false;
  try {
    copied = document.execCommand("copy");
  } catch {
    copied = false;
  } finally {
    textArea.remove();
  }
  return copied;
}

export default function WhatsAppFallback() {
  const [request, setRequest] = useState(null);
  const [copyStatus, setCopyStatus] = useState("");

  useEffect(() => {
    const showFallback = (event) => {
      setRequest(event.detail);
      setCopyStatus("");
    };

    window.addEventListener("open-whatsapp-fallback", showFallback);
    return () => window.removeEventListener("open-whatsapp-fallback", showFallback);
  }, []);

  if (!request) return null;

  const handleCopy = async (value, label) => {
    const copied = await copyText(value);
    setCopyStatus(
      copied
        ? `${label} copiado.`
        : `No se pudo copiar. Selecciona y copia el ${label.toLowerCase()} mostrado.`
    );
  };

  return (
    <div className="fixed inset-0 z-[10001] flex items-center justify-center bg-oak/70 p-4">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="whatsapp-fallback-title"
        className="w-full max-w-lg bg-bone p-6 text-oak shadow-2xl md:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="whatsapp-fallback-title" className="font-heading text-2xl">
              Continúa tu consulta por WhatsApp
            </h2>
            <p className="mt-2 text-sm text-oak/70">
              TikTok puede bloquear la apertura directa. Copia tus datos o intenta abrir WhatsApp.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setRequest(null)}
            aria-label="Cerrar"
            className="px-2 text-2xl leading-none text-oak/60 hover:text-oak"
          >
            ×
          </button>
        </div>

        <div className="mt-5 space-y-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-oak/50">Número</p>
            <p className="select-all text-sm">+{WHATSAPP_NUMBER}</p>
            <button
              type="button"
              onClick={() => handleCopy(`+${WHATSAPP_NUMBER}`, "Número")}
              className="mt-1 text-sm font-medium text-terracotta underline"
            >
              Copiar número
            </button>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-oak/50">Mensaje</p>
            <p className="select-all whitespace-pre-wrap text-sm">{request.message}</p>
            <button
              type="button"
              onClick={() => handleCopy(request.message, "Mensaje")}
              className="mt-1 text-sm font-medium text-terracotta underline"
            >
              Copiar mensaje
            </button>
          </div>
        </div>

        {copyStatus && (
          <p role="status" className="mt-3 text-sm text-oak/80">
            {copyStatus}
          </p>
        )}

        <a
          href={request.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-full justify-center bg-terracotta px-5 py-3 text-sm font-medium text-bone hover:bg-terracotta/90"
        >
          Intentar abrir WhatsApp
        </a>
        <p className="mt-3 text-xs leading-relaxed text-oak/60">
          Si no se abre, usa el menú ⋯ de TikTok y elige “Abrir en navegador”. También puedes abrir
          WhatsApp manualmente y pegar el número y el mensaje copiados.
        </p>
      </section>
    </div>
  );
}
