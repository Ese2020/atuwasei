import React from "react";
import "./app.css";
import { NavLink } from "../../atom/NavLink";

export const Royal = () => {
  return (
    <>
      <div className="notice bc">
        <div className="notice-img w-35">
        </div>
        <div className="notice-search w-35">
          <div className="">
            <NavLink to="/" className="back">
             ⟵
            </NavLink>
            <h1 className="mb mt-16 fs-32 mt-32 fw">Royal Court Notices</h1>
            <p className="fs-14 mt-8">This is the office record of past royal engagements.</p>
            <input type="text" placeholder="search" />
            </div>
        </div>
        <div className="empty w-50 w h-5"></div>
      </div>
    </>
  );
};
