import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroContainer = styled.section`
  position: relative;
  height: calc(100vh + 10px);
  width: 100%;
`;
export const HeroWrapper = styled.div`
  padding: 50px 24px;
  background: url(/images/bg.jpg);
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  background-position: center;
  @media screen and (max-width: 960px) {
    background: url(/images/bg2.jpg);
    background-position: center;
    background-size: cover;
  }
`;
export const HeroTitle = styled.h3`
  width: 50%;
  color: #fff;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 10px;
  @media screen and (max-width: 960px) {
    width: 70%;
  }
`;
export const HeroDescription = styled.div`
  color: #fff;
  width: 50%;
  margin-bottom: 10px;
`;
// export const HeroBtn = styled.button`
//   color: #fff;
//   padding: 10px 20px;
//   background: #5fdde5;
//   margin: 10px 0;
//   border: none;
//   cursor: pointer;
//   letter-spacing: 1px;
//   font-size: 1.25rem;
//   font-weight: 500;
// `;

export const HeroIcons = styled.div`
  position: absolute;
  bottom: 24px;
  align-content: flex-end;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HeroLink = styled(Link)`
  padding-right: 20px;
  color: #fff;
  font-size: 1.5rem;
`;
