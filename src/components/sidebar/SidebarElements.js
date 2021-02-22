import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
export const SideBarContainer = styled.aside`
  position: fixed;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #000;
  color: #fff;
  padding: 20px;
  width: 100%;
  height: 100%;
  z-index: 100000;
  transition: all 0.4s ease-in-out;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
export const SideBarIcon = styled.div`
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const SideBarWrapper = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  flex-direction: column;
  width: 100%;
`;
export const SideBarItems = styled.li`
  min-height: 100px;
  width: 100%;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease-in-out;

  &:hover {
    background: #f1d4d4;
  }
`;
export const SideBarLink = styled(LinkS)`
  color: #fff;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #000;
  }
`;
export const SideBarBtn = styled.button`
  background: #6a097d;
  border: none;
  border-radius: 50px;

  cursor: pointer;
  padding: 10px 50px;
  transition: all 0.4s ease-in-out;
  margin-top: 50px;
  &:hover {
    background: #c060a1;
  }
`;
export const SideBarBtnLink = styled(LinkR)`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
`;
