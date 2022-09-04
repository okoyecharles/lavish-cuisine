import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/Logo.png';
import '../styles/Nav.css';

const Nav = () => {

  return (
    <header className="nav">
      <div className="nav__logo">
        <img src={Logo} alt="Lavish Cuisine" className="nav__logoImg" />
        <p>Lavish Cuisine</p>
      </div>
      <nav className="nav__menu" aria-roledescription='main navigation'>
        <ul className="nav__links">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/ingredients'>Ingredients</NavLink>
        <NavLink to='/areas'>Areas</NavLink>
        </ul>
      </nav>
    </header>
  )
}

export default Nav;