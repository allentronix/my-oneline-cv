// TODO: connect to a real backend or form service (e.g. Formspree, EmailJS, an API route).
// Until then this only simulates a successful send — no message is delivered anywhere.
export async function sendContactMessage(message) {
  await new Promise((resolve) => setTimeout(resolve, 600));
  console.info("[contactService] Not connected yet. Message not sent:", message);
}
