import React from "react";
import { Button } from "../hero/Button";
import {
  InfoContainer,
  InfoRow,
  InfoImg,
  InfoDescription,
  Img,
  Heading,
  Description,
  BtnWrapper,
} from "./Info.js";
const InfoSection = ({
  id,
  heading,
  description,
  btnDescript,
  src,
  alt,
  imgFirst,
  lightBg,
  primary,
  large,
}) => {
  return (
    <>
      <InfoContainer id={id} lightBg={lightBg}>
        <InfoRow imgFirst={imgFirst}>
          <InfoDescription>
            <Heading lightBg={lightBg}>{heading}</Heading>
            <Description lightBg={lightBg}>{description}</Description>
            <BtnWrapper>
              <Button
                to="home"
                primary={primary ? 1 : 0}
                large={large ? 1 : 0}
                spy={true}
                smooth={true}
                duration={500}
                exact={true}
                offset={-80}
              >
                {btnDescript}
              </Button>
            </BtnWrapper>
          </InfoDescription>
          <InfoImg>
            <Img src={src} alt={alt} />
          </InfoImg>
        </InfoRow>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
