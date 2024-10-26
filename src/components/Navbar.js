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
      <header>
        {/* <img className="logo" alt="introImg" /> */}
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#000" }} />
          ) : (
            <FaBars size={20} style={{ color: "#000" }} />
          )}
        </div>
        <nav className="nav_nav">
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
        <ul className={`nav_links_mobile ${!click ? 'hide-mobile-nav' : 'show-mobile-nav'}`}>
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
