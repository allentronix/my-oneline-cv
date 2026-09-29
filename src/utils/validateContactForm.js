const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Returns an object of field -> error message. An empty object means the form is valid.
export function validateContactForm({ name, email, message }) {
  const errors = {};

  if (!name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_PATTERN.test(email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!message.trim()) {
    errors.message = "Please enter a message.";
  } else if (message.trim().length < 10) {
    errors.message = "Your message should be at least 10 characters.";
  }

  return errors;
}
