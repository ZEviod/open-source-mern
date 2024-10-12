import "./Footer.css";
import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col">
          <img className="logo_footer" alt="introImg" />
          <p className="text-icon">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
            error!
          </p>

          <form>Social Media</form>
          <div className="social-icons">
            <FaFacebook size={20} />
            <FaInstagram size={20} />
            <FaTwitter size={20} />
          </div>
        </div>
        <div className="col">
          <h3>Details</h3>
          <p>idk</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet. </p>
          <p className="email-id">helloWorld@gmail.com</p>
          <h4>+91-9966996699</h4>
        </div>
        <div className="col">
          <h3>Links</h3>
          <ul>
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
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <div className="location">
            <h3>Location</h3>
            <iframe
              className="goof"
              src="work"
              width="600"
              height="450"
              title="location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
