import styled from "styled-components";

export const ServiceContainer = styled.section`
  background: #f4f0f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 50px;
  min-height: 100vh;
`;
export const ServiceHeading = styled.h3`
  font-size: 3rem;
  color: #000;
  font-weight: 700;
  margin-bottom: 40px;
`;
export const ServiceWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 300px));
  grid-gap: 20px;
  align-items: space-evenly;
  @media screen and (max-width: 783px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 567px) {
    grid-template-columns: 300px;
  } ;
`;
export const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 350px;
  background: #e4bcec;
  border-radius: 5px;
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease;
  &:hover {
    transform: scale(1.02);
  }
`;
export const ImgContainer = styled.div`
  width: 160px;
  height: 160px;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
export const CardHeading = styled.h5`
  font-size: 1.25rem;
  margin: 5px 0;
  color: #000;
`;
export const CardDescription = styled.p`
  font-size: 1rem;
  color: #000;
  text-align: center;
`;
