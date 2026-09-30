import { useState } from "react";
import { validateContactForm } from "../utils/validateContactForm";
import { sendContactMessage } from "../services/contactService";

const EMPTY_VALUES = { name: "", email: "", message: "" };

// Owns the contact form's values, validation errors and submit status.
// status: "idle" | "submitting" | "success" | "error"
function useContactForm() {
  const [values, setValues] = useState(EMPTY_VALUES);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));

    if (errors[name]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[name];
        return next;
      });
    }
    if (status === "success" || status === "error") {
      setStatus("idle");
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    try {
      await sendContactMessage(values);
      setValues(EMPTY_VALUES);
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return { values, errors, status, handleChange, handleSubmit };
}

export default useContactForm;
