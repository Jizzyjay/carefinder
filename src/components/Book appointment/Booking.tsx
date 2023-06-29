import React from "react";
import Book from "./Book";
import profile from "../../Assets/Ellipse 14.png";
import profile2 from "../../Assets/Ellipse 15.png";
import profile3 from "../../Assets/Ellipse 16.png";
import profile4 from "../../Assets/Ellipse 17.png";
import "./Booking.css";

const Booking = () => {
  return (
    <div className="booking">
      <div className="book__right-side">
        <div className="book__header">
          <h1>QUALIFIED DOCTORS</h1>
        </div>
        <div className="book__images">
          <Book
            image={profile}
            title="Dr Cole Ben"
            description="Pediatrician"
            paragraph="Goodwill Hospital"
          />
          <Book
            image={profile2}
            title="Dr Jane Doe"
            description="Cardiologist"
            paragraph="Heart Clinic"
          />
          <Book
            image={profile3}
            title="Dr John Smith"
            description="Dermatologist"
            paragraph="Skin Health Center"
          />
          <Book
            image={profile4}
            title="Dr Emily Johnson"
            description="Neurologist"
            paragraph="Brain Institute"
          />
        </div>
      </div>
      <div className="book__left-side">
        <div className="book__button">
          <p>Book An Appointment</p>
        </div>
        <div className="book-input">
          <div className="book__input">
            <input type="text" placeholder="Address" />
          </div>
          <div className="book__input">
            <input type="text" placeholder="Choose Hospital" />
          </div>
          <div className="book__input">
            <input type="text" placeholder="Choose Department" />
          </div>
          <div className="book__input">
            <input type="text" placeholder="Enter Name" />
          </div>
          <div className="book__input">
            <input type="text" placeholder="Enter Email" />
          </div>
          <div className="book__input">
            <input type="text" placeholder="Select Date" />
          </div>
          <div className="book__input">
            <input type="text" placeholder="Select Time" />
          </div>
        </div>
        <div className="book__button">
          <button>Book An Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
