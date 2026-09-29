import "./MenuButton.css";

function MenuButton({ isOpen, onClick, controls }) {
  return (
    <button
      type="button"
      className="menu-button"
      data-open={isOpen}
      aria-expanded={isOpen}
      aria-controls={controls}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      onClick={onClick}
    >
      <span className="menu-button__line" />
      <span className="menu-button__line" />
    </button>
  );
}

export default MenuButton;
