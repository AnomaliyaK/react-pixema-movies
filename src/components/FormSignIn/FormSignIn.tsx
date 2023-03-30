import { CustomLink } from "components/CustomLink/CustomLink";
import React from "react";
import { ROUTE } from "router/routes";
import {
  ButtonSignIn,
  InputEmail,
  InputPassword,
  ResetPassword,
  ResetPasswordText,
  StyledFormSignIn,
  SubTitle,
} from "./styles";

export const FormSignIn = () => {
  return (
    <StyledFormSignIn>
      <form action="">
        <SubTitle>Email</SubTitle>
        <InputEmail type="text" placeholder="Your email" />
        <SubTitle>Password</SubTitle>
        <InputPassword type="password" placeholder="Your password" />
        <ResetPassword>
          <CustomLink to={ROUTE.RESET_PASSWORD}>
            <ResetPasswordText>Forgot password?</ResetPasswordText>
          </CustomLink>
        </ResetPassword>

        <ButtonSignIn type="submit">Sign in</ButtonSignIn>
      </form>
    </StyledFormSignIn>
  );
};
