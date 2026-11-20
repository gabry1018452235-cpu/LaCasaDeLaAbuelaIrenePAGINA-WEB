export const WHATSAPP_NUMBER = "573207016292";

export function createWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message) {
  const url = createWhatsAppUrl(message);

  if (/tiktok/i.test(navigator.userAgent)) {
    window.dispatchEvent(
      new CustomEvent("open-whatsapp-fallback", {
        detail: { message, url },
      })
    );
    return;
  }

  window.open(url, "_blank", "noopener,noreferrer");
}
