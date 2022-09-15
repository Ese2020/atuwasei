import React from "react";
import "./app.css";
import { Navbar } from "../../molecule/Navbar";
import { Gallery } from "../../organism/Gallery";

export const Event = () => {
  return (
    <>
      <div className="event-body">
        <Navbar />
        <div className="nav-list">
          <div className="">
            <span>Ceremonies</span>
            <span>•</span>
            <span>Events</span>
            <input placeholder="search" type="search" value=""></input>
          </div>
          <span className="fs-24">See Blogs</span>
        </div>

        <div>
          <Gallery />
        </div>
      </div>
    </>
  );
};
