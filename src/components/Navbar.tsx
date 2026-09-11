import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg'; // placeholder logo

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <img src={logo} alt="MADA Logo" className="navbar__logo" />
        <ul className="navbar__links">
          <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : undefined}>الرئيسية</NavLink></li>
          <li><NavLink to="/services" className={({ isActive }) => isActive ? 'active' : undefined}>خدماتنا</NavLink></li>
          <li><NavLink to="/works" className={({ isActive }) => isActive ? 'active' : undefined}>أعمالنا</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : undefined}>من نحن</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : undefined}>تواصل</NavLink></li>
        </ul>
        <a href="#contact" className="navbar__cta button-pill">شاهد أعمالنا ▶</a>
      </div>
    </nav>
  );
};

export default Navbar;
