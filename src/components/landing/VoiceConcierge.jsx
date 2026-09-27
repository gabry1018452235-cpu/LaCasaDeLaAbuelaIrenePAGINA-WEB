import React, { useEffect, useState } from "react";
import { useCookieConsent } from "@/lib/CookieConsentContext";

export default function VoiceConcierge() {
  const { consent } = useCookieConsent();
  const [isWidgetReady, setIsWidgetReady] = useState(false);

  useEffect(() => {
    if (!consent?.externalServices) {
      setIsWidgetReady(false);
      return undefined;
    }

    if (customElements.get("elevenlabs-convai")) {
      setIsWidgetReady(true);
      return undefined;
    }

    let isActive = true;
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    script.onload = () => {
      if (isActive) setIsWidgetReady(true);
    };
    document.body.appendChild(script);

    return () => {
      isActive = false;
      setIsWidgetReady(false);
      script.remove();
    };
  }, [consent?.externalServices]);

  if (!consent?.externalServices || !isWidgetReady) return null;

  return (
    <div className="fixed bottom-6 left-6 z-[9999]">
      <elevenlabs-convai agent-id="agent_0501kwtcsa70f1e86gmk28dxae1f"></elevenlabs-convai>
    </div>
  );
}