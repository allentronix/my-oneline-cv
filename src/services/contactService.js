// Sends contact form messages through Formspree (https://formspree.io).
// The form ID comes from VITE_FORMSPREE_FORM_ID in the .env file.
const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID;

// Resolves when Formspree accepts the message; throws if it could not be sent.
export async function sendContactMessage({ name, email, message }) {
  if (!FORMSPREE_FORM_ID) {
    throw new Error(
      "Contact form is not configured: set VITE_FORMSPREE_FORM_ID in .env",
    );
  }

  const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ name, email, message }),
  });

  if (!response.ok) {
    throw new Error(`Formspree request failed with status ${response.status}`);
  }
}
