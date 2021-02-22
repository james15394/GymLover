import React from "react";
import Icon1 from "../../images/svg4.svg";
import Icon2 from "../../images/svg5.svg";
import Icon3 from "../../images/svg6.svg";
import {
  ServiceContainer,
  ServiceHeading,
  ServiceWrapper,
  ServiceCard,
  ImgContainer,
  Img,
  CardHeading,
  CardDescription,
} from "./ServiceEls";

const ServiceSection = () => {
  return (
    <>
      <ServiceContainer id="service">
        <ServiceHeading>Services to be provided</ServiceHeading>
        <ServiceWrapper>
          <ServiceCard>
            <ImgContainer>
              <Img src={Icon1} />
            </ImgContainer>
            <CardHeading>Sport equipment</CardHeading>
            <CardDescription>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Sapiente, doloremque.
            </CardDescription>
          </ServiceCard>
          <ServiceCard>
            <ImgContainer>
              <Img src={Icon2} />
            </ImgContainer>
            <CardHeading>Sport equipment</CardHeading>
            <CardDescription>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Sapiente, doloremque.
            </CardDescription>
          </ServiceCard>
          <ServiceCard>
            <ImgContainer>
              <Img src={Icon3} />
            </ImgContainer>
            <CardHeading>Sport equipment</CardHeading>
            <CardDescription>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Sapiente, doloremque.
            </CardDescription>
          </ServiceCard>
        </ServiceWrapper>
      </ServiceContainer>
    </>
  );
};

export default ServiceSection;
