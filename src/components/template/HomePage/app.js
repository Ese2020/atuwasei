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
  margin-top: 45vh;

  @media screen and (max-width: 998px) {
    font-size: 1.4rem;
    margin-top: 55vh;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media screen and (max-width: 668px) {
    margin-top: 50vh;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media screen and (max-width: 500px) {
    margin-top: 48vh;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const BottomNav = styled.footer`
  display: flex;
  justify-content: center;
  padding-top: 10vh;
  @media screen and (max-width: 998px) {
    padding-top: 13vh;
  }
  @media screen and (max-width: 400px) {
    padding-top: 7vh;
  }
`;
