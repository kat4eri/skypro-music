import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo">
          <img src="logo.png" alt="YourLogo" />
          <p>&copy; 2023 Your Company</p>
        </div>
        <div className="footer__links">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer__social">
          <a href="profile.social.twitter">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="profile.social.twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="profile.social.twitter">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;