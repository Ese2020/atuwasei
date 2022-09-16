import React from "react";
import "./app.css";
import { NavLink } from "../../atom/NavLink";

export const Ginuwa = () => {
  return (
    <>
    <div className="gin-container bc">
      <div className="gin-img"></div>
      <div className="w-60">
        <div className="gin-info">
          <div className="gin-details br-30">
            <NavLink to="/" className="back">
             ⟵
            </NavLink>
            <h1 className="mb t-20">The Ginuwa Ruling House</h1>
            <p className="fs-14">Warri Kingdom.</p>
            <input type="text" placeholder="search" />
          </div>
          <div className="gin-cards">
          <div>a</div>
          <div>b</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
