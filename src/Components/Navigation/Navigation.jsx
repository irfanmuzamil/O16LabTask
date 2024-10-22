import React from "react";
import "./Navigation.css";
import logo from "../../Assets/logo.jfif";
const Navigation = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h2>
            <img src={logo} style={{ height: 50, width: 50 }} />
          </h2>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#how-it-works">How It Works</a>
          </li>
          <li>
            <a href="#our-chefs">Our Chefs</a>
          </li>
          <li>
            <a href="#book">Book</a>
          </li>
        </ul>
        <div className="auth-buttons">
          <button className="signup-btn">Sign Up</button>
          <button className="login-btn">Login</button>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
