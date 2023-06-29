import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>CareFinder</h2>
      </div>

      <div className="navbar__links_container">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#fh">Find Hospital</a>
      </div>

      <div className="navbar__sign">
        <button type="button">
          <span className="navbar__btn">
            <Link to={"/login"}>Login</Link>
          </span>
        </button>
        <button type="button">
          <span className="navbar__btn">
            <Link to={"/signUp"}>Sign Up</Link>
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
