import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../images/Logo.png";
import { VscMenu } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
import "../styles/Nav.css";

interface NavProps {
  mediaWidth: number;
}

const Nav: React.FC<NavProps> = ({ mediaWidth }) => {
  const [navActive, setNavActive] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <header className="nav">
      <div
        className="nav__logo"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={Logo} alt="Lavish Cuisine" className="nav__logoImg" />
        {mediaWidth > 700 && <p>Lavish Cuisine</p>}
      </div>
      {mediaWidth <= 500 && (
        <VscMenu
          className="nav__toggleOpen"
          onClick={() => {
            setNavActive(true);
          }}
        />
      )}
      <nav
        className={navActive ? "nav__menu active" : "nav__menu"}
        aria-roledescription="main navigation"
      >
        <ul className="nav__links">
          <NavLink to="/" onClick={() => setNavActive(false)}>Home</NavLink>
          <NavLink to="/ingredients" onClick={() => setNavActive(false)}>Ingredients</NavLink>
          <NavLink to="/areas" onClick={() => setNavActive(false)}>Areas</NavLink>
        </ul>
        {mediaWidth <= 500 && (
          <AiOutlineClose
            className="nav__toggleClose"
            onClick={() => setNavActive(false)}
          />
        )}
      </nav>
    </header>
  );
};

export default Nav;
