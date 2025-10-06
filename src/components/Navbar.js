import "./Navbar.css";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header-container">
      {/* Skip link for accessibility */}
      <a href="#main-content" className="sr-only">
        Skip to content
      </a>

      <header>
        {/* Hamburger menu */}
        <button
          className={`hamburger ${click ? "active" : ""}`}
          onClick={handleClick}
          aria-label={click ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={click}
          aria-controls="primary-navigation"
        >
          {click ? (
            <FaTimes size={22} style={{ color: "#000" }} />
          ) : (
            <FaBars size={22} style={{ color: "#000" }} />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="nav_nav" aria-label="Primary navigation">
          <ul className="nav_links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/designs">Design</Link></li>
            <li><Link to="/activities">Activity</Link></li>
          </ul>
        </nav>

        {/* Contact Button */}
        <ul className="nav_links1">
          <li>
            <Link to="/contact" className="buttn">Contact Us</Link>
          </li>
        </ul>
      </header>

      {/* Mobile Navigation */}
      <ul
        id="primary-navigation"
        className={`nav_links_mobile ${click ? "show-mobile-nav" : "hide-mobile-nav"}`}
        aria-hidden={!click}
      >
        <li><Link to="/" onClick={handleClick}>Home</Link></li>
        <li><Link to="/about" onClick={handleClick}>About</Link></li>
        <li><Link to="/designs" onClick={handleClick}>Design</Link></li>
        <li><Link to="/activities" onClick={handleClick}>Activity</Link></li>
        <li><Link to="/contact" onClick={handleClick}>Contact Us</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
