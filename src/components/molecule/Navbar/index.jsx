import React from "react";
import { Text } from "../../atom";
import logo from "../../../asset/logo.png";
import icon from "../../../asset/menu.webp";
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

export const Navbar = () => {
  return (
    <>
      <NavSection>
        <NavLeft>
          <ImageHolder>
            <Photo src={logo} alt="logo" />
            <Icon src={icon} alt="logo" />
          </ImageHolder>
        </NavLeft>
        <NavRight>
          <NavOne>
            <Text>History</Text>
          </NavOne>
          <NavTwo>
            <Text>The Ginuwa Ruling House</Text>
          </NavTwo>
          <NavThree>
            <Text>Warri Traditional Council</Text>
          </NavThree>
          <NavFour>
            <Text>Royal Court Notices</Text>
          </NavFour>
        </NavRight>
      </NavSection>
    </>
  );
};
