import React from "react";
import { NavLink, Svg, Text } from "../../atom";
import "./app.css";
import message from "../../../asset/message.svg";
import icon from "../../../asset/menu2.svg";

export const SearchSpeech = ({ toggle, handleClickSlide }) => {
  return (
    <>
      <div className="search-speech">
        <div className="top-search">
          <img
            src={icon}
            alt="logo"
            onClick={handleClickSlide}
            className="img-icd"
          />
          <div className="bd-md-2">
            <div className="back1 ">
              <NavLink to="/" className="backed2">
                ⟵
              </NavLink>
            </div>
          </div>

          <h1 className="h1-tp">Speeches</h1>
          <input type="text" placeholder="search" className="txt" />
        </div>
        {/* <div className="mx-1"> */}
        <div className="down-search mx-dwn" onClick={() => toggle(1)}>
          <div className="search-hover">
            <div className="search-msg">
              <Svg src={message} alt="message" />
            </div>
            <div className="search-txt">
              <Text type="h2" className="txt-h2">
                A New Dawn (Keynote Speech at the PIA Summit)
              </Text>
              <Text className="txt-p">
                The image you see of the iceberg of the African Continent, is
                one of the most powerful images w...
              </Text>
              <Text className="txt-sp">2022-05-26 23:42:59</Text>
            </div>
          </div>
        </div>
        <div className="down-search " onClick={() => toggle(2)}>
          <div className="search-hover">
            <div className="search-msg">
              <Svg src={message} alt="message" />
            </div>
            <div className="search-txt">
              <Text type="h2" className="txt-h2">
                Coronation Speech
              </Text>
              <Text className="txt-p">
                In the name of the most High God, we warmly welcome you all to
                this distinctly notable day in the...
              </Text>
              <Text className="txt-sp">2021-08-21 18:59:07</Text>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};
