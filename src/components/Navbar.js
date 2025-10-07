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
      {/* Skip link for keyboard users */}
      <a href="#main-content" className="sr-only" tabIndex={0}>
        Skip to content
      </a>

      <header>
        {/* Logo placeholder */}
        {/* <img className="logo" alt="Company Logo" /> */}

        {/* Hamburger button */}
        <button
          className="hamburger"
          onClick={handleClick}
          aria-label={click ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={click}
          aria-controls="primary-navigation"
        >
          {click ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        {/* Desktop navigation */}
        <nav className="nav_nav" aria-label="Primary navigation">
          <ul className="nav_links">
            <li role="menuitem">
              <Link to="/">Home</Link>
            </li>
            <li role="menuitem">
              <Link to="/about">About</Link>
            </li>
            <li role="menuitem">
              <Link to="/designs">Design</Link>
            </li>
            <li role="menuitem">
              <Link to="/activities">Activity</Link>
            </li>
          </ul>
        </nav>

        {/* Contact button */}
        <ul className="nav_links1">
          <li>
            <Link to="/contact" className="buttn">
              Contact Us
            </Link>
          </li>
        </ul>
      </header>

      {/* Mobile navigation */}
      <nav
        id="primary-navigation"
        className={`nav_links_mobile ${
          !click ? "hide-mobile-nav" : "show-mobile-nav"
        }`}
        role="menu"
        aria-hidden={!click}
      >
        <li role="menuitem">
          <Link to="/">Home</Link>
        </li>
        <li role="menuitem">
          <Link to="/about">About</Link>
        </li>
        <li role="menuitem">
          <Link to="/designs">Design</Link>
        </li>
        <li role="menuitem">
          <Link to="/activities">Activity</Link>
        </li>
      </nav>
    </div>
  );
};

export default Navbar;
