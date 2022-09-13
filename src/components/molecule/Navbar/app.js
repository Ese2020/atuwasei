import styled from "styled-components";

export const NavSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0.2rem;
`;

export const NavLeft = styled.div`
  width: 10%;
`;

export const NavRight = styled.div`
  width: 50%;
  display: flex;
  font-size: 13px;
  justify-content: flex-end;
  align-item: center;
  padding-top: 1.9rem;
  color: #ffffff;
  font-weight: 400;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const ImageHolder = styled.div`
  padding-left: 1rem;
`;

export const NavOne = styled.div`
  &:hover {
    border-bottom: 1px solid #d30002;
    color: #d30002;
    cursor: pointer;
  }
  margin-right: 2rem;
  height: 1.5rem;
`;

export const NavTwo = styled.div`
  &:hover {
    border-bottom: 1px solid #d30002;
    color: #d30002;
    cursor: pointer;
  }
  margin-right: 2rem;
  height: 1.5rem;
`;

export const NavThree = styled.div`
  &:hover {
    border-bottom: 1px solid #d30002;
    color: #d30002;
    cursor: pointer;
  }
  margin-right: 2rem;
  height: 1.5rem;
`;

export const NavFour = styled.div`
  &:hover {
    border-bottom: 1px solid #d30002;
    color: #d30002;
    cursor: pointer;
  }
  margin-right: 2rem;
  height: 1.5rem;
`;

export const Photo = styled.img`
  width: 4.5rem;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const Icon = styled.img`
  display: none;
  @media screen and (max-width: 1200px) {
    width: 1.7rem;
    display: block;
    padding-top: 1rem;
    cursor: pointer;
    color: #ffffff;
  }
`;
