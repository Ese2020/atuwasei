import React from "react";
import { CustomLink, Svg } from "../../atom";
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
        <div className="home">
          <CustomLink to="/home" className="linked">
            <Svg src={home} alt="home" />
            <div className="up">Home</div>
          </CustomLink>
        </div>
        <div className="press">
          <CustomLink to="/theginuwa" className="linked">
            <Svg src={press} alt="press" />
            <div className="up">Press</div>
          </CustomLink>
        </div>
        <div className="event">
          <CustomLink to="/warritraditionalcouncil" className="linked">
            <Svg src={event} alt="event" />
            <div className="up">Event</div>
          </CustomLink>
        </div>
        <div className="notice">
          <CustomLink to="/royalcourtnotices" className="linked">
            <Svg src={notice} alt="notice" />
            <div className="up">Notices</div>
          </CustomLink>
        </div>
        <div className="speech">
          <CustomLink to="/royalcourtnotices" className="linked">
            <Svg src={speech} alt="speech" />
            <div className="up">Speeches</div>
          </CustomLink>
        </div>
        <div className="account">
          <CustomLink to="/royalcourtnotices" className="linked">
            <Svg src={account} alt="account" />
            <div className="up">Account</div>
          </CustomLink>
        </div>
      </div>
    </>
  );
};
