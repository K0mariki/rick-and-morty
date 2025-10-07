import "./Header.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../components/Logo";
import BurgerButton from "../../components/BurgerButton";

export default function Header() {
  const menuItems = [
    { label: "Characters", path: "characters" },
    { label: "Locations", path: "locations" },
    { label: "Episodes", path: "episodes" },
  ];

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function toggleMenu() {
    setIsOpenMenu(!isOpenMenu);
  }

  function closeMenu() {
    setIsOpenMenu(false);
  }

  return (
    <header className="header">
      <div className="header__inner container">
        <Logo />
        <dialog className="header__overlay-menu-dialog" open={isOpenMenu}>
          <Logo className="visible-tablet" />
          <nav className="header__menu">
            <ul className="header__menu-list">
              {menuItems.map((item, index) => (
                <li className="header__menu-item" key={index}>
                  <NavLink
                    className="header__menu-link"
                    to={item.path}
                    title={item.label}
                    aria-label={item.label}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </dialog>
        <BurgerButton
          className={`header__burger-button visible-tablet ${
            isOpenMenu ? "active" : ""
          }`}
          onClick={toggleMenu}
        />
      </div>
    </header>
  );
}
