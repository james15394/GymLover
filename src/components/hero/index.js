import React, { useState } from "react";
import { Button } from "./Button";
import {
  HeroContainer,
  HeroWrapper,
  HeroTitle,
  HeroDescription,
  HeroIcons,
  HeroLink,
} from "./HeroEls";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <HeroContainer id="home">
        <HeroWrapper>
          <HeroTitle>Build Perfect Body With Clean Mind</HeroTitle>
          <HeroDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, earum?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque,
            eum!
          </HeroDescription>
          <Button
            to="signup"
            large
            primary
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            smooth="easeOutQuad"
            exact={true}
            duration={500}
          >
            Get Started{"    "}
            {hover ? (
              <i class="fas fa-arrow-right"></i>
            ) : (
              <i class="fas fa-chevron-right"></i>
            )}
          </Button>
          <HeroIcons>
            <HeroLink
              href="//www.facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-square"></i>
            </HeroLink>
            <HeroLink>
              <i class="fab fa-linkedin"></i>
            </HeroLink>
            <HeroLink>
              <i class="fab fa-instagram-square"></i>
            </HeroLink>
          </HeroIcons>
        </HeroWrapper>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
