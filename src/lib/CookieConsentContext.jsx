import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CONSENT_STORAGE_KEY = "cookie_consent";
const CONSENT_VERSION = 2;
const GOOGLE_ANALYTICS_ID = "G-1YL08SQ6N2";
const CookieConsentContext = createContext(null);

function readConsent() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(CONSENT_STORAGE_KEY));
    if (saved?.version !== CONSENT_VERSION) return null;

    return {
      necessary: true,
      analytics: saved.analytics === true,
      externalServices: saved.externalServices === true,
    };
  } catch {
    return null;
  }
}

function clearAnalyticsCookies() {
  const names = document.cookie
    .split(";")
    .map((cookie) => cookie.trim().split("=")[0])
    .filter((name) => name === "_ga" || name.startsWith("_ga_"));
  const host = window.location.hostname;

  names.forEach((name) => {
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=${host}; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.${host}; SameSite=Lax`;
  });
}

function configureAnalytics(allowed) {
  window[`ga-disable-${GOOGLE_ANALYTICS_ID}`] = !allowed;

  if (!allowed) {
    window.gtag?.("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    document.getElementById("google-analytics-script")?.remove();
    clearAnalyticsCookies();
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  if (!window.__casaAnalyticsConfigured) {
    window.gtag("js", new Date());
    window.gtag("config", GOOGLE_ANALYTICS_ID);
    window.__casaAnalyticsConfigured = true;
  }

  if (!document.getElementById("google-analytics-script")) {
    const script = document.createElement("script");
    script.id = "google-analytics-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`;
    document.head.appendChild(script);
  }
}

function configureExternalFonts(allowed) {
  const existingLink = document.getElementById("google-fonts-stylesheet");
  if (!allowed) {
    existingLink?.remove();
    return;
  }
  if (existingLink) return;

  const stylesheet = document.createElement("link");
  stylesheet.id = "google-fonts-stylesheet";
  stylesheet.rel = "stylesheet";
  stylesheet.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap";
  document.head.appendChild(stylesheet);
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return context;
}

export default function CookieConsentProvider({ children }) {
  const [consent, setConsent] = useState(readConsent);

  const saveConsent = (preferences) => {
    const nextConsent = {
      version: CONSENT_VERSION,
      necessary: true,
      analytics: preferences.analytics === true,
      externalServices: preferences.externalServices === true,
      savedAt: new Date().toISOString(),
    };
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(nextConsent));
    setConsent(nextConsent);
  };

  useEffect(() => {
    configureAnalytics(consent?.analytics === true);
    configureExternalFonts(consent?.externalServices === true);
  }, [consent]);

  const value = useMemo(() => ({ consent, saveConsent }), [consent]);
  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}