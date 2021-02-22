import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  background-color: ${({ navScroll }) => (navScroll ? "#000" : "transparent")};
  min-height: ${({ navScroll }) => (navScroll ? "80px" : "90px")};
  z-index: 10000;
  margin-top: -100px;
  position: sticky;
  top: 0;
  transition: all 0.4s ease;
`;
export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 24px;
`;
export const NavLogo = styled(LinkR)`
  text-decoration: none;
  cursor: pointer;
  flex: 1;
  letter-spacing: 2px;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
`;
export const NavToggle = styled.div`
  color: #fff;
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    display: block;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  height: 100%;
  margin-right: 30px;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  padding: 0 20px;
  height: 100%;
`;
export const NavLink = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #6a097d;
  }
`;
export const NavSignin = styled.button`
  background: #6a097d;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  padding: 10px 20px;
  transition: all 0.4s ease-in-out;
  @media screen and (max-width: 960px) {
    display: none;
  }
  &:hover {
    background: #c060a1;
  }
`;
export const NavBtnLink = styled(LinkR)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
`;
