import useEscapeKey from "../hooks/useEscapeKey";
import useLockBodyScroll from "../hooks/useLockBodyScroll";
import "./NavMenu.css";

function NavMenu({ id, isOpen, links, onClose }) {
  useEscapeKey(onClose, isOpen);
  useLockBodyScroll(isOpen);

  return (
    <nav
      id={id}
      className="nav-menu"
      data-open={isOpen}
      aria-label="Main"
      inert={!isOpen}
    >
      <ul className="nav-menu__list">
        {links.map((link) => (
          <li key={link.href}>
            <a className="nav-menu__link" href={link.href} onClick={onClose}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavMenu;
