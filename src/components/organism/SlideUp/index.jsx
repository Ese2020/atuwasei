import React from "react";
import { BackIcon, Holder, Slideup } from "./app";
import { NavLink, Svg } from "../../atom";
import slided from "../../../asset/slide.svg";
import lg from "../../../asset/logo.png";
import "./app.css";
export const SlideUp = ({ click, className }) => {
  return (
    <>
      <div className={className ? "sd-up" : "sd-down"}>
        <Slideup>
          <Holder>
            <BackIcon onClick={click} />
          </Holder>
          <div className="sd-img lg-sd">
            <NavLink to="/" className="sd-link">
              <Svg src={lg} alt="lg" className="lg" />
              <div className="sd-txt sd-img-0">
                <div className="sd-p">
                  <p>Ògíamẹ̀ Atúwàtse III - The Olú of Warri</p>
                </div>
                <span className="sd-p-s">Àghọ̀fẹn, Warri - Nigeria</span>
              </div>
            </NavLink>
          </div>
          <div className="sd-img">
            <NavLink to="/history" className="sd-link">
              <Svg src={slided} alt="slided" />
              <div className="sd-txt sd-img-1">History</div>
            </NavLink>
          </div>
          <div className="sd-img">
            <NavLink to="/theginuwa" className="sd-link">
              <Svg src={slided} alt="slided" />
              <div className="sd-txt sd-img-2">The Ginuwa Ruling House</div>
            </NavLink>
          </div>
          <div className="sd-img">
            <NavLink to="/warritraditionalcouncil" className="sd-link">
              <Svg src={slided} alt="slided" />
              <div className="sd-txt sd-img-3">Warri Traditional Council</div>
            </NavLink>
          </div>
          <div className="sd-img">
            <NavLink to="/royalcourtnotices" className="sd-link">
              <Svg src={slided} alt="slided" />
              <div className="sd-txt sd-img-4">Royal Court Notices</div>
            </NavLink>
          </div>
        </Slideup>
      </div>
    </>
  );
};
