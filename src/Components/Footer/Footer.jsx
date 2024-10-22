import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <div className="logo-circle">
            <span className="logo-number">16</span>
          </div>
        </div>

        <div className="footer-address">
          <h3>Address</h3>
          <p>Park Avenue South, New York, 74108, United States</p>
          <p>Email: contact@16labs.com</p>
          <p>Phone: 000-123-456</p>
          <a href="#">FAQs</a> | <a href="#">Contact Us</a>
        </div>
        <div className="footer-links">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#how-it-works">How it works</a>
            </li>
            <li>
              <a href="#chats">Our Chats</a>
            </li>
            <li>
              <a href="#reviews">Reviews</a>
            </li>
            <li>
              <a href="#news">What's new</a>
            </li>
          </ul>
        </div>
        <div className="footer-subscribe">
          <h3>Subscribe to Newsletter</h3>
          <form>
            <input type="email" placeholder="Email Address" required />
            <button type="submit">
              <FaTelegram className="telegram-icon" />
            </button>
          </form>
          <h3>Our Social</h3>
          <div className="social-icons">
            <a href="#">
              <FaFacebook className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <FaTwitter className="fab fa-twitter" />
            </a>
            <a href="#">
              <FaInstagram className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>Copyrights © 2024 16 Labs - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
