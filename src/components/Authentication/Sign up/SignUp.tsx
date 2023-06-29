import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../../../Assets/Rectangle 113.png";
import "./sigup.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("user", userCredential);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div className="signup">

      <form onSubmit={handleSignUp} className="signup__left-side">
        <div className="signup__header1">
          <h1>Create An Account</h1>
        </div>

        <div className="signup__left-input">
          <h3>Name</h3>
          <input type="text" name="email" placeholder="Enter Name" />
        </div>
        <div className="signup__left-input">
          <h3>Email Address</h3>
          <input
            type="text"
            name="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="signup__left-input">
          <h3>Password</h3>
          <input
            type="text"
            name="email"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="signup__button">
          <button type="submit">Create Account</button>
        </div>
        <div className="signup__content">
          <h2>OR</h2>
        </div>
        <div className="sigup-acct">
          <p>
            Already have an account?{" "}
            <Link to={"/login"}>
              <span className="acct">Login!</span>
            </Link>{" "}
          </p>
        </div>
      </form>
      <div className="signup__right-side">
        <h1>CareFinder</h1>
        <h2>Join Our Community</h2>
        <h4>Enjoy seamless access to medical services.</h4>
        <div className="signup__image">
          <img src={image} alt="doctor attending to patient" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
