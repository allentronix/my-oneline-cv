import "./Button.css";

function Button({ type = "button", children, ...buttonProps }) {
  return (
    <button type={type} className="button" {...buttonProps}>
      {children}
    </button>
  );
}

export default Button;
