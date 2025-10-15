import "./Navbar.css"; 
import { useState } from "react";
import React from "react";
import { Link, NavLink } from "react-router-dom"; 
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { to: "/", text: "Home" },
  { to: "/about", text: "About" },
  { to: "/designs", text: "Design" },
  { to: "/activities", text: "Activity" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar">
      <Link to="/" className="navbar__logo-link" onClick={closeMobileMenu}>
        <h1 className="navbar__brand-name">Working Studios</h1>
      </Link>

      <button className="navbar__hamburger" onClick={toggleMenu} aria-label="Navigation menu button">
        {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      <nav className={`navbar__menu ${isMenuOpen ? "is-active" : ""}`}>
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? "active" : ""}`
                }
                onClick={closeMobileMenu}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="navbar__cta" onClick={closeMobileMenu}>
          Contact Us
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;