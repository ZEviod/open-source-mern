import "./Navbar.css"; // Make sure this CSS file is the refactored one!
import { useState } from "react";
import React from "react";
import { Link, NavLink } from "react-router-dom"; // Import NavLink
import { FaBars, FaTimes } from "react-icons/fa";

// Data for our navigation links
const navLinks = [
  { to: "/", text: "Home" },
  { to: "/about", text: "About" },
  { to: "/designs", text: "Design" },
  { to: "/activities", text: "Activity" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // A more descriptive name for the state and handler
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar">
       {/* Replaced logo image with company name */}
      <Link to="/" className="navbar__logo-link" onClick={closeMobileMenu}>
        <h1 className="navbar__brand-name">Working Studios</h1>
      </Link>

      {/* Hamburger Icon - now a button for accessibility */}
      <button className="navbar__hamburger" onClick={toggleMenu} aria-label="Navigation menu button">
        {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Single Navigation menu that adapts to screen size */}
      <nav className={`navbar__menu ${isMenuOpen ? "is-active" : ""}`}>
        <ul className="navbar__links">
          {/* Map over the links array to create the list items */}
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                // This is how NavLink adds an 'active' class
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

        {/* Standalone Contact Us Button */}
        <Link to="/contact" className="navbar__cta" onClick={closeMobileMenu}>
          Contact Us
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;