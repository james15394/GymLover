import React from "react";
import { Button } from "../components/hero/Button";
import {
  SigninContainer,
  Logo,
  SigninForm,
  SigninInput,
  SigninInside,
  Heading,
} from "../components/signin/SigninEls";

const Signin = () => {
  return (
    <SigninContainer>
      <Logo to="/">TRVL</Logo>
      <SigninInside>
        <Heading>Sign in form</Heading>
        <SigninForm>
          <SigninInput type="text" placeholder="Enter your Name" />
          <SigninInput type="email" placeholder="Enter your Email" />
          <SigninInput type="password" placeholder="Enter your Password" />
          <Button>Submit</Button>
        </SigninForm>
      </SigninInside>
    </SigninContainer>
  );
};

export default Signin;
