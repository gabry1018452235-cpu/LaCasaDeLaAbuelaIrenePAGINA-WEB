const NOTIFY_EMAIL = "gabro.contacto@gmail.com";

export async function notifyLead({ source, message }) {
  console.log(`Mock Lead Notification: ${source} - ${message}`);
  return Promise.resolve();
}