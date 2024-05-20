import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { VscMenu } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";
import "../styles/Nav.css";

const Nav: React.FC = () => {
  const [navActive, setNavActive] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <div className="nav__container">
      <header>
        <div className="nav__logo" onClick={() => navigate("/")}>
          <img src={'/assets/logo.png'} alt="Logo" />
        </div>
        <button
          className="nav__open desktop-hidden"
          aria-label="Open menu"
          aria-controls="nav-menu"
          aria-expanded={navActive}
          onClick={() => {
            setNavActive(true);
          }}
        >
          <VscMenu />
        </button>
        <nav
          id="nav-menu"
          className={`nav__menu ${navActive ? "active" : ""}`}
          aria-hidden={!navActive}
        >
          <ul className="nav__links">
            <li>
              <NavLink
                to="/"
                onClick={() => setNavActive(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ingredients"
                onClick={() => setNavActive(false)}
              >
                Ingredients
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/areas"
                onClick={() => setNavActive(false)}
              >
                Areas
              </NavLink>
            </li>
          </ul>
          <button
            className="nav__close desktop-hidden"
            aria-label="Close menu"
            aria-controls="nav-menu"
            aria-expanded={navActive}
            onClick={() => setNavActive(false)}
          >
            <GrClose />
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
