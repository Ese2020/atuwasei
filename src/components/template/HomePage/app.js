import styled from "styled-components";
import logo from "../../../asset/background-image.png";
export const Body = styled.main`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0px;
  z-index: 0;
  background-image: url(${logo});
  background-size: cover;
  background-position: center center;
`;

export const Section = styled.section`
  text-align: center;
  font-size: 2.2rem;
  color: #ffffff;
  padding-top: 19rem;

  @media screen and (max-width: 998px) {
    font-size: 1.4rem;
    padding-top: 22rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const BottomNav = styled.footer`
  display: flex;
  justify-content: center;
  padding-top: 5rem;
  @media screen and (max-width: 998px) {
    padding-top: 5rem;
  }
`;
