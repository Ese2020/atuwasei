import React, { useContext, useState } from "react";
import { NavLink } from "../../atom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { auth } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import "./app.css";

export const SignUp = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navitage = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navitage("/logout");
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <>
      <div className="lg-fm">
        <form onSubmit={handleLogin}>
          <h1 className="lg-h1">Sign Up</h1>
          <p className="lg-p">
            Your details are kept safe and with it you can always gain access!
          </p>
          {error && <span>Wrong email or password!</span>}
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button className="btn-lg-md" type="submit">
            Sign Up
          </button>
          <NavLink to="/account" className="backed-2">
            <button className="btn-md">Already Registered? Login.</button>
          </NavLink>

          <NavLink to="/" className="backed-2 bw-2">
            <button className="btn-m-d">Continue Browing...</button>
          </NavLink>
        </form>
      </div>
    </>
  );
};
