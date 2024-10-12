import "./Navbar.css";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="header">
      <header>
        <img className="logo" alt="introImg" />
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

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#000" }} />
        ) : (
          <FaBars size={20} style={{ color: "#000" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
