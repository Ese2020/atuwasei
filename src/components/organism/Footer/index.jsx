import React from "react";
import { NavLink, Svg } from "../../atom";
import "./app.css";
import home from "../../../asset/home.svg";
import event from "../../../asset/event.svg";
import press from "../../../asset/press.svg";
import notice from "../../../asset/notice.svg";
import speech from "../../../asset/speech.svg";
import account from "../../../asset/account.svg";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <span className="v-click">v</span>
        <div className="foot">
          <div className="home">
            <NavLink to="/" className="linked">
              <Svg src={home} alt="home" />
              <div className="up">Home</div>
            </NavLink>
          </div>
          <div className="press">
            <NavLink to="/theginuwa" className="linked">
              <Svg src={press} alt="press" />
              <div className="up">Press</div>
            </NavLink>
          </div>
          <div className="event">
            <NavLink to="/warritraditionalcouncil" className="linked">
              <Svg src={event} alt="event" />
              <div className="up">Event</div>
            </NavLink>
          </div>
          <div className="notice">
            <NavLink to="/royalcourtnotices" className="linked">
              <Svg src={notice} alt="notice" />
              <div className="up">Notices</div>
            </NavLink>
          </div>
          <div className="speech">
            <NavLink to="/royalcourtnotices" className="linked">
              <Svg src={speech} alt="speech" />
              <div className="up">Speeches</div>
            </NavLink>
          </div>
          <div className="account">
            <NavLink to="/royalcourtnotices" className="linked">
              <Svg src={account} alt="account" />
              <div className="up">Account</div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
