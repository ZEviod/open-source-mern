import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-content">
				{/* Column 1: Logo and Description */}
				<div className="footer-col logo-col">
					<img
						className="logo-footer"
						alt="Company Logo"
						src="../assets/file.jpg"
					/>
					<p className="footer-description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
						error!
					</p>
					<div className="social-icons">
						<a href="https://facebook.com" aria-label="Facebook">
							<FaFacebook size={20} />
						</a>
						<a href="https://instagram.com" aria-label="Instagram">
							<FaInstagram size={20} />
						</a>
						<a href="https://twitter.com" aria-label="Twitter">
							<FaTwitter size={20} />
						</a>
					</div>
				</div>

				{/* Column 2: Contact Details */}
				<div className="footer-col contact-col">
					<h3>Contact Us</h3>
					<p>123 Main Street, City, Country</p>
					<p>
						Email:{" "}
						<a href="mailto:helloWorld@gmail.com">helloWorld@gmail.com</a>
					</p>
					<p>
						Phone: <a href="tel:+919966996699">+91-9966996699</a>
					</p>
				</div>

				{/* Column 3: Quick Links */}
				<div className="footer-col links-col">
					<h3>Quick Links</h3>
					<ul className="footer-links">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/designs">Design</Link>
						</li>
						<li>
							<Link to="/activities">Activities</Link>
						</li>
						<li>
							<Link to="/contact">Contact Us</Link>
						</li>
					</ul>
				</div>

				{/* Column 4: Location Map */}
				<div className="footer-col map-col">
					<h3>Our Location</h3>
					<iframe
						className="location-map"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0199631363946!2d144.95605431566702!3d-37.81667904256959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577edf3d57d1c16!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1613636862438!5m2!1sen!2sin"
						width="300"
						height="200"
						allowFullScreen=""
						loading="lazy"
						title="Company Location"
					></iframe>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
