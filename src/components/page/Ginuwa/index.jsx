import React from "react";
import "./app.css";
import { Input } from "../../atom/Input";
import { NavLink } from "../../atom/NavLink";

export const Ginuwa = () => {
  return (
    <>
    <div className="gin-container bc">
      <div className="gin-img"></div>
      <div className="w-60 br-30">
        <div className="gin-info">
          <div>
          <NavLink to="/" className="back">
             ⟵
            </NavLink>
            <h1 className="mb">The Ginuwa Ruling House</h1>
            <p className="fs-14">Warri Kingdom.</p>
            <Input type="search" />
          </div>
          <div>c
          <div>a</div>
          <div>b</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
