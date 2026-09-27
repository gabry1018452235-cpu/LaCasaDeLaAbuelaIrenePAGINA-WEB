import React, { useEffect, useState } from 'react';
import { useCookieConsent } from '@/lib/CookieConsentContext';

const CookieBanner = () => {
  const { consent, saveConsent } = useCookieConsent();
  const [isVisible, setIsVisible] = useState(!consent);
  const [isManaging, setIsManaging] = useState(false);
  const [preferences, setPreferences] = useState({ analytics: false, externalServices: false });

  useEffect(() => {
    if (consent) {
      setPreferences({ analytics: consent.analytics, externalServices: consent.externalServices });
      setIsVisible(false);
      setIsManaging(false);
    } else {
      setIsVisible(true);
    }
  }, [consent]);

  useEffect(() => {
    const openSettings = () => {
      setPreferences({ analytics: consent?.analytics === true, externalServices: consent?.externalServices === true });
      setIsManaging(true);
      setIsVisible(true);
    };
    window.addEventListener('open-cookie-settings', openSettings);
    return () => window.removeEventListener('open-cookie-settings', openSettings);
  }, [consent]);

  const savePreferences = () => saveConsent(preferences);
  const rejectOptional = () => saveConsent({ analytics: false, externalServices: false });
  const acceptAll = () => saveConsent({ analytics: true, externalServices: true });

  if (!isVisible) {
    return (
      <button
        type="button"
        onClick={() => window.dispatchEvent(new Event('open-cookie-settings'))}
        aria-label="Configurar preferencias de cookies"
        className="fixed right-4 top-[calc(50%+38px)] z-[9997] border border-oak/30 bg-bone px-3 py-2 text-xs text-oak shadow-table hover:bg-oak hover:text-bone"
      >
        Cookies
      </button>
    );
  }

  return (
    <aside className="fixed inset-x-0 bottom-0 z-[10000] border-t border-bone/20 bg-oak p-4 text-bone shadow-2xl" aria-label="Consentimiento de cookies">
      <div className="mx-auto max-w-7xl px-2 py-2">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl text-sm leading-relaxed">
            <p>
              Usamos almacenamiento necesario y, solo con tu permiso, cookies analíticas y servicios externos. Puedes aceptar, rechazar o configurar tus preferencias. Consulta la{' '}
              <a href="/cookies" className="underline underline-offset-2 hover:text-terracotta">Política de Cookies</a>.
            </p>
          </div>
          {!isManaging ? (
            <div className="flex flex-wrap items-center gap-2">
              <button type="button" onClick={rejectOptional} className="border border-bone/50 px-4 py-2 text-sm hover:bg-bone/10">
                Rechazar opcionales
              </button>
              <button type="button" onClick={() => setIsManaging(true)} className="border border-bone/50 px-4 py-2 text-sm hover:bg-bone/10">
                Gestionar
              </button>
              <button type="button" onClick={acceptAll} className="bg-terracotta px-4 py-2 text-sm font-medium hover:bg-terracotta/90">
                Aceptar todas
              </button>
            </div>
          ) : (
            <div className="flex flex-wrap items-center gap-2">
              <button type="button" onClick={rejectOptional} className="border border-bone/50 px-4 py-2 text-sm hover:bg-bone/10">
                Rechazar opcionales
              </button>
              <button type="button" onClick={savePreferences} className="bg-terracotta px-4 py-2 text-sm font-medium hover:bg-terracotta/90">
                Guardar preferencias
              </button>
            </div>
          )}
        </div>

        {isManaging && (
          <div className="mt-4 grid gap-3 border-t border-bone/20 pt-4 sm:grid-cols-3">
            <label className="flex items-start gap-3 text-sm">
              <input type="checkbox" checked disabled className="mt-1 accent-terracotta" />
              <span><strong className="block">Necesarias</strong><span className="text-bone/70">Requeridas para guardar tus preferencias y operar el sitio.</span></span>
            </label>
            <label className="flex items-start gap-3 text-sm">
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(event) => setPreferences((current) => ({ ...current, analytics: event.target.checked }))}
                className="mt-1 accent-terracotta"
              />
              <span><strong className="block">Analíticas</strong><span className="text-bone/70">Google Analytics 4 mide visitas y uso del sitio.</span></span>
            </label>
            <label className="flex items-start gap-3 text-sm">
              <input
                type="checkbox"
                checked={preferences.externalServices}
                onChange={(event) => setPreferences((current) => ({ ...current, externalServices: event.target.checked }))}
                className="mt-1 accent-terracotta"
              />
              <span><strong className="block">Servicios externos</strong><span className="text-bone/70">Google Maps, fuentes web y asistente de voz de ElevenLabs.</span></span>
            </label>
          </div>
        )}
      </div>
    </aside>
  );
};

export default CookieBanner;
