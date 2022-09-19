import React, { useState } from "react";
import "./app.css";
import { Navbar } from "../../molecule/Navbar";
import { Gallery } from "../../organism/Gallery";
import { Footer } from "../../organism/Footer";
import { SlideUp } from "../../organism";

export const Event = () => {
  const [slideup, setSlideup] = useState(false);
  const handleClickSlide = () => setSlideup(!slideup);
  return (
    <>
      <div className="event-body">
        <Navbar click={handleClickSlide} />
        <div className="nav-list">
          <div className="">
            <span>Ceremonies</span>
            <span className="mr">•</span>
            <span className="mr">Events</span>
            <input placeholder="search" type="search" value=""></input>
          </div>
          <span className="fs-24">See Blogs</span>
        </div>

        <div>
          <Gallery />
        </div>
        <footer className="ft">
          <Footer />
        </footer>
        <SlideUp click={handleClickSlide} className={slideup} />
      </div>
    </>
  );
};
