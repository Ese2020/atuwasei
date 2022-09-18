import React, { useState } from "react";
import "./app.css";
import { NavLink } from "../../atom/NavLink";
import { SlideUp } from "../../organism";
import icon from "../../../asset/menu2.svg";
import { Footer } from "../../organism/Footer";

export const Royal = () => {
  const [slideup, setSlideup] = useState(false);
  const handleClickSlide = () => setSlideup(!slideup);
  return (
    <>
      <div className="gin-container bc">
        <div className="back2">
          <img
            src={icon}
            alt="logo"
            onClick={handleClickSlide}
            className="img-ic"
          />
        </div>
        <div className="gin-img"></div>
        <div className="w-60">
          <div className="gin-info">
            <div className="gin-details br-30">
              <NavLink to="/" className="back">
                ⟵
              </NavLink>

              <h1 className="mb t-20">The Warri Traditional Council</h1>
              <p className="fs-14">The warri traditional council.</p>
              <input type="text" placeholder="search" />
            </div>
          </div>
        </div>
      </div>
      <footer className="ft">
        <Footer />
      </footer>
      <SlideUp click={handleClickSlide} className={slideup} />
    </>
  );
};
