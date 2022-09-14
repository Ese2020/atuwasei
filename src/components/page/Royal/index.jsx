import React from "react";
import "./app.css";
import { NavLink } from "../../atom/NavLink";
import speeches from "../../../asset/speeches.png";

export const Royal = () => {
  return (
    <>
      <div className="notice">
        <div>
        <img className="notice-img" src={speeches} alt="speeches" />
        </div>
        <div className="notice-search">
          <div className="">
            <NavLink to="/" className="">
             ⟵
            </NavLink>
            <h1>Royal Court Notices</h1>
            <p className="fs-14">This is the office record of past royal engagements.</p>
            </div>
        </div>
        <div>c</div>
      </div>
    </>
  );
};
