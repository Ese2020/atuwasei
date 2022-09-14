import styled from "styled-components";

export const Slideup = styled.div`
  border-radius: 30px 30px 0px 0px;
  padding: 30px;
  background-color: white;
  height: 70vh;
  position: absolute;
  bottom: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContainerSlide = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0px;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

export const BackIcon = styled.div`
  height: 5px;
  width: 20%;
  background-color: rgb(201, 199, 199);
  position: absolute;
  top: 20px;
  cursor: pointer;
`;

export const Holder = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: center;
  place-content: stretch center;
  -webkit-box-align: stretch;
  align-items: stretch;
  order: 0;
  -webkit-box-flex: 0;
  flex: 0 1 auto;
  align-self: auto;
  margin: 0px 0px 20px;
  padding: 0px;
`;
