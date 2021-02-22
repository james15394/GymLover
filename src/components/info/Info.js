import styled from "styled-components";

export const InfoContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#000")};
`;
export const InfoRow = styled.div`
  padding: 0 24px;
  height: 860px;
  place-items: center;
  place-content: center;
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: ${({ imgFirst }) =>
    imgFirst ? `"col2 col1"` : `"col1 col2"`};
  @media screen and (max-width: 900px) {
    grid-template-areas: ${({ imgFirst }) =>
      imgFirst ? `"col1" "col2"` : `'col1 col1' 'col2 col2'`};
  }
`;
export const InfoDescription = styled.div`
  grid-area: col1;
`;
export const InfoImg = styled.div`
  grid-area: col2;
  max-width: 555px;
  height: 100%;
`;
export const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;
export const Heading = styled.div`
  color: ${({ lightBg }) => (lightBg ? "#000" : "#fff")};
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 20px;
  letter-spacing: 2px;
  @media screen and (max-width: 900px) {
    text-align: center;
  }
`;
export const Description = styled.div`
  color: ${({ lightBg }) => (lightBg ? "#000" : "#fff")};
  font-size: 1rem;
  margin-bottom: 20px;
  line-height: 1.5;
  @media screen and (max-width: 900px) {
    text-align: center;
  }
`;
export const BtnWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 900px) {
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
`;
