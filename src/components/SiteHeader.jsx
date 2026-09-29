import { useCallback, useState } from "react";
import MenuButton from "./ui/MenuButton";
import NavMenu from "./NavMenu";
import "./SiteHeader.css";

const NAV_MENU_ID = "site-nav-menu";

function SiteHeader({ name, links }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const toggleMenu = () => setIsMenuOpen((isOpen) => !isOpen);

  return (
    <header className="site-header">
      <a className="site-header__name" href="#top">
        {name}
      </a>
      <div className="site-header__menu-button">
        <MenuButton
          isOpen={isMenuOpen}
          onClick={toggleMenu}
          controls={NAV_MENU_ID}
        />
      </div>
      <NavMenu
        id={NAV_MENU_ID}
        isOpen={isMenuOpen}
        links={links}
        onClose={closeMenu}
      />
    </header>
  );
}

export default SiteHeader;
