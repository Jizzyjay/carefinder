 import { Link } from "react-router-dom";
import image from "../../../Assets/Rectangle 113.png";
import "./Login.css";
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("user", userCredential);
      })
      .catch((error) => {
        console.log("error", error);
      }
      );

  };

  return (
    <div className="login">
      <form onSubmit={handleLogin} className="login__left-side">
        <div className="login__header1">
          <h1>Welcome Back</h1>
          <p>Login using correct details!</p>
        </div>
        <div className="login__left-input">
          <h3>Email Address</h3>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email Address"
          />
        </div>
        <div className="login__left-input">
          <h3>Password</h3>
          <input
            type="text"
            name="email"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="login__button">
          <button
            type="submit"
          >Login</button>
        </div>
        <div className="login__social">
          <p>
            Don't have an account?{" "}
            <Link to={"/signup"}>
              <span className="acct">Sign up</span>
            </Link>{" "}
          </p>
        </div>
      </form>
      <div className="login__right-side">
        <h1>CareFinder</h1>
        <h2>Join Our Community</h2>
        <h4>Enjoy seamless access to medical services.</h4>
        <div className="login__image">
          <img src={image} alt="doctor attending to patient" />
        </div>
      </div>
    </div>
  );
};

export default Login;
