import React from "react";
import "./footer.css";
import { BsGithub, BsTwitter, BsGlobeAsiaAustralia } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__address">
        <h1>CareFinder</h1>
        <p>Victoria island, Lagos</p>
        <p>+2349167351788</p>
      </div>
      <div className="footer__socials">
        <h1>Follow Us</h1>
        <div className="icon">
          <a href="/">
            <BsGithub />
          </a>
          <a href="/">
            <BsTwitter />
          </a>
          <a href="/">
            <BsGlobeAsiaAustralia />
          </a>
        </div>
      </div>
      <div className="footer__about">
        <h1>About Us</h1>
        <p>News & Media</p>
        <p>Contact Us</p>
      </div>
      <div className="footer__links">
        <h1>Quick Links</h1>
        <p>My account</p>
        <p> Book an appointment </p>
      </div>
    </div>
  );
};

export default Footer;
