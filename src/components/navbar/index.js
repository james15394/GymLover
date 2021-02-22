import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  NavContainer,
  NavWrapper,
  NavLogo,
  NavToggle,
  NavMenu,
  NavItem,
  NavLink,
  NavSignin,
  NavBtnLink,
} from "./Navbar";
const NavBar = ({ isOpen, setIsOpen }) => {
  const [navScroll, setNavScroll] = useState(false);

  const changeNav = () => {
    window.scrollY > 0 ? setNavScroll(true) : setNavScroll(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const homeScroll = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <NavContainer navScroll={navScroll}>
        <NavWrapper>
          <NavLogo
            to="/"
            onClick={homeScroll}
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
          >
            TRVL
          </NavLogo>
          <NavToggle onClick={() => setIsOpen(true)}>
            <i class="fas fa-bars"></i>
          </NavToggle>
          <NavMenu>
            <NavItem>
              <NavLink
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="service"
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
              >
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="product"
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
              >
                Products
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="signup"
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
              >
                Sign up
              </NavLink>
            </NavItem>
          </NavMenu>
          <NavSignin>
            <NavBtnLink
              to="/signin"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
            >
              Sign in
            </NavBtnLink>
          </NavSignin>
        </NavWrapper>
      </NavContainer>
    </>
  );
};

export default NavBar;
