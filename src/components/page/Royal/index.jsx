import React from "react";
import "./app.css";
import { NavLink } from "../../atom/NavLink";
import speeches from "../../../asset/speeches.png";
import { Input } from "../../atom/Input";

export const Royal = () => {
  return (
    <>
      <div className="notice bc">
        <div className="notice-img w-35">
        </div>
        <div className="notice-search w-30">
          <div className="">
            <NavLink to="/" className="back">
             ⟵
            </NavLink>
            <h1 className="mb">Royal Court Notices</h1>
            <p className="fs-14">This is the office record of past royal engagements.</p>
            <input type="text" placeholder="search" />
            </div>
        </div>
        <div className="w-50 w h-5"></div>
      </div>
    </>
  );
};
