import React from "react";
import { CustomLink } from "../../atom";
import logo from "../../../asset/logo.png";
import icon from "../../../asset/menu.svg";
import "./app.css";
import {
  NavLeft,
  NavRight,
  NavSection,
  ImageHolder,
  NavOne,
  NavTwo,
  NavThree,
  NavFour,
  Photo,
  Icon,
} from "./app";

export const Navbar = ({ click }) => {
  return (
    <>
      <NavSection>
        <NavLeft>
          <ImageHolder>
            <Photo src={logo} alt="logo" />
            <Icon src={icon} alt="logo" onClick={click} />
          </ImageHolder>
        </NavLeft>
        <NavRight>
          <NavOne>
            <CustomLink to="/history" className="link">
              History
            </CustomLink>
          </NavOne>
          <NavTwo>
            <CustomLink to="/theginuwa" className="link">
              The Ginuwa Ruling House
            </CustomLink>
          </NavTwo>
          <NavThree>
            <CustomLink to="/warritraditionalcouncil" className="link">
              Warri Traditional Council
            </CustomLink>
          </NavThree>
          <NavFour>
            <CustomLink to="/royalcourtnotices" className="link">
              Royal Court Notices
            </CustomLink>
          </NavFour>
        </NavRight>
      </NavSection>
    </>
  );
};
