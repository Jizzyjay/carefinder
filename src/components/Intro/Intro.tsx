import React from "react";
import "./intro.css";
import intro from "../../Assets/Rectangle 1.png";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Booking from "../Book appointment/Booking";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import { GrFormLocation } from "react-icons/gr";
import { BiSearch } from "react-icons/bi";

const Intro = () => {
  return (
    <>
      <Navbar />
        <div className="intro__section">
          <div className="intro__left-side">
            <h1>Find the nearest hospital to you and make an appointment </h1>
            <h4>
              Discover Your Perfect Care: Find Your Hospital, Anytime, Anywhere!
            </h4>
            <div className="intro__left-side-btn">
              <button>Get Started</button>
              <button>Learn more</button>
            </div>
          </div>
          <div className="intro__right-side">
              <img className="intro__img" src={intro} alt="intro" />
          </div>
          <div></div>
        </div>
        <div className="into__input">
          <p>Find a nearby hospital </p>
        </div>
        <div className="intro__search">
          <GrFormLocation className="icon1" />
            <input type="text"/>
            <BiSearch className="icon2" />
        </div>
      <Home />
      <Booking />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Intro;
