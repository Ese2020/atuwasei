import React from "react";
import { NavLink } from "../../atom";
import "./app.css";

export const SignUp = () => {
  return (
    <>
      <div className="lg-fm">
        <form action="/#">
          <h1 className="lg-h1">Sign Up</h1>
          <p className="lg-p">
            Your details are kept safe and with it you can always gain access!
          </p>
          <input type="text" placeholder="email" />
          <br />
          <input type="password" placeholder="password" />
          <br />
          <button className="btn-lg-md">Sign Up</button>
          <NavLink to="/account" className="backed-2">
            <button className="btn-md">Not Registered? Sign Up</button>
          </NavLink>

          <NavLink to="/" className="backed-2 bw-2">
            <button className="btn-m-d">Continue Browing...</button>
          </NavLink>
        </form>
      </div>
    </>
  );
};
