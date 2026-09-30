import TextField from "./ui/TextField";
import Button from "./ui/Button";
import useContactForm from "../hooks/useContactForm";
import "./ContactForm.css";

function ContactForm() {
  const { values, errors, status, handleChange, handleSubmit } =
    useContactForm();
  const isSubmitting = status === "submitting";

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__row">
        <TextField
          id="contact-name"
          name="name"
          label="Name"
          placeholder="Your name"
          autoComplete="name"
          value={values.name}
          error={errors.name}
          onChange={handleChange}
        />
        <TextField
          id="contact-email"
          name="email"
          type="email"
          label="Email"
          placeholder="you@example.com"
          autoComplete="email"
          value={values.email}
          error={errors.email}
          onChange={handleChange}
        />
      </div>
      <TextField
        id="contact-message"
        name="message"
        label="Message"
        placeholder="Tell me a little about what you have in mind…"
        multiline
        rows={5}
        value={values.message}
        error={errors.message}
        onChange={handleChange}
      />
      <div className="contact-form__actions">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending…" : "Send message →"}
        </Button>
        <div role="status">
          {status === "success" && (
            <p className="contact-form__status" data-status="success">
              <span aria-hidden="true">✓</span>
              Thanks for reaching out — I’ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="contact-form__status" data-status="error">
              <span aria-hidden="true">!</span>
              Something went wrong. Please try again or reach me on LinkedIn.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
