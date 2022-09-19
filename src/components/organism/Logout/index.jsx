import React, { useContext, useState } from "react";
import { NavLink } from "../../atom";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import "./app.css";

export const Logout = () => {
  const [error, setError] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const navitage = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();

    signOut(auth)
      .then(() => {
        // Signed in
        dispatch({ type: "LOGIN" });
        navitage("/signup");
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <>
      <div className="lg-fm">
        <form onSubmit={handleLogout}>
          <div className="p-ci-cd">
            <div className="ci-cd"></div>
            <h1 className="lg-h1">Welcome</h1>
          </div>

          {error && <span>Something went wrong!</span>}
          <br />
          <NavLink to="/" className="backed-2">
            <button className="btn-lg-md">visit homepage</button>
          </NavLink>
          <button type="submit" className="btn-md">
            Log out? Click here.
          </button>
          <NavLink to="/changepassword">
            <button className="lg-btn">Change password</button>
          </NavLink>
        </form>
      </div>
    </>
  );
};
