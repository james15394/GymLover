import React from "react";
import {
  SideBarContainer,
  SideBarIcon,
  SideBarWrapper,
  SideBarItems,
  SideBarLink,
  SideBarBtn,
  SideBarBtnLink,
} from "./SidebarElements";
const SideBar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <SideBarContainer isOpen={isOpen}>
        <SideBarIcon onClick={() => setIsOpen(false)}>
          <i class="fas fa-times"></i>
        </SideBarIcon>
        <SideBarWrapper>
          <SideBarItems>
            <SideBarLink onClick={() => setIsOpen(false)} to="home">
              Home
            </SideBarLink>
          </SideBarItems>
          <SideBarItems>
            <SideBarLink onClick={() => setIsOpen(false)} to="about">
              About
            </SideBarLink>
          </SideBarItems>
          <SideBarItems>
            <SideBarLink onClick={() => setIsOpen(false)} to="service">
              Services
            </SideBarLink>
          </SideBarItems>
          <SideBarItems>
            <SideBarLink onClick={() => setIsOpen(false)} to="product">
              Products
            </SideBarLink>
          </SideBarItems>
          <SideBarItems>
            <SideBarLink onClick={() => setIsOpen(false)} to="signup">
              Sign up
            </SideBarLink>
          </SideBarItems>
        </SideBarWrapper>
        <SideBarBtn>
          <SideBarBtnLink to="/signin">Sign in</SideBarBtnLink>
        </SideBarBtn>
      </SideBarContainer>
    </>
  );
};

export default SideBar;
