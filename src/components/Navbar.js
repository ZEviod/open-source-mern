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
      <a href="#main-content" className="sr-only">
        Skip to content
      </a>
      <header>
        {/* <img className="logo" alt="introImg" /> */}
        <button
          className="hamburger"
          onClick={handleClick}
          aria-label={click ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={click}
          aria-controls="primary-navigation"
        >
          {click ? (
            <FaTimes size={20} style={{ color: "#000" }} />
          ) : (
            <FaBars size={20} style={{ color: "#000" }} />
          )}
        </button>
        <nav className="nav_nav" aria-label="Primary navigation">
          <ul className="nav_links">
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/about">About </Link>
            </li>
            <li>
              <Link to="/designs">Design </Link>
            </li>
            <li>
              <Link to="/activities">Activity </Link>
            </li>
          </ul>
        </nav>
        <ul className="nav_links1">
          <li>
            <Link to="/contact" className="buttn">
              Contact Us{" "}
            </Link>
          </li>
        </ul>
      </header>
      <ul
        id="primary-navigation"
        className={`nav_links_mobile ${
          !click ? "hide-mobile-nav" : "show-mobile-nav"
        }`}
        aria-hidden={!click}
      >
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/about">About </Link>
        </li>
        <li>
          <Link to="/designs">Design </Link>
        </li>
        <li>
          <Link to="/activities">Activity </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
