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
