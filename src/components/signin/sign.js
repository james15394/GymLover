import styled from "styled-components";
import { Link } from "react-router-dom";

export const SigninContainer = styled.section`
  position: relative;
  z-index: 11;
  background: #00416a; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    30deg,
    #e4e5e6 0%,
    #00416a 50%,
    #873754 50%,
    #e63e7b 100%
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    30deg,
    #e4e5e6 0%,
    #00416a 50%,
    #873754 50%,
    #e63e7b 100%
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding: 20px 50px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: filter 5s infinite;
  @keyframe filter {
    0% {
      filter: hue-rotate(80deg);
    }
    50% {
      filter: hue-rotate(30deg);
    }
    100% {
      filter: hue-rotate(150deg);
    }
  } ;
`;
export const Logo = styled(Link)`
  color: #fff;
  position: absolute;
  top: 24px;
  left: 24px;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-decoration: none;
`;
export const SigninWrapper = styled.div`
  position: relative;
  z-index: 22;
  display: flex;
  pointer-events: none;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 10px 90px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 400px;
  height: 400px;
  &::after {
    position: absolute;
    content: "";
    top: 5px;
    right: 5px;
    bottom: 5px;
    left: 5px;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0.1) 15%,
      transparent 50%,
      transparent 85%,
      rgba(255, 255, 255, 0.3) 100%
    );
  }
`;

export const Heading = styled.h4`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 2px;
`;
export const SigninForm = styled.form`
  position: relative;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 100000;
`;
export const SigninInputName = styled.input`
  background: transparent;
  box-shadow: inset 0 0 90px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px 30px;
  border-radius: 5px;
  border: none;
  margin: 20px 0;
  color: #fff;
  &::placeholder {
    color: #fff;
  }
`;
export const SigninInputEmail = styled.input`
  background: transparent;
  box-shadow: inset 0 0 90px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px 30px;
  border-radius: 5px;
  border: none;
  margin: 20px 0;
  color: #fff;
  &::placeholder {
    color: #fff;
  }
`;
export const SigninInputPassword = styled.input`
  background: transparent;
  box-shadow: inset 0 0 90px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px 30px;
  border-radius: 5px;
  border: none;
  margin: 20px 0;
  color: #fff;
  &::placeholder {
    color: #fff;
  }
`;
