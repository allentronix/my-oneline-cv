import "./TextField.css";

// Labelled text input (or textarea when `multiline` is set) with an optional error message.
function TextField({ id, label, error, multiline = false, ...inputProps }) {
  const errorId = `${id}-error`;
  const Control = multiline ? "textarea" : "input";

  return (
    <div className="text-field">
      <label className="text-field__label" htmlFor={id}>
        {label}
      </label>
      <Control
        id={id}
        className="text-field__control"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        {...inputProps}
      />
      {error && (
        <p className="text-field__error" id={errorId}>
          {error}
        </p>
      )}
    </div>
  );
}

export default TextField;
