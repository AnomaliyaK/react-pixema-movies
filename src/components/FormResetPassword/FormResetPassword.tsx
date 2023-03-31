import React from "react";
import { ButtonResetPassword, InputEmail, StyledFormResetPassword, SubTitle } from "./styles";

export const FormResetPassword = () => {
  return (
    <StyledFormResetPassword>
      <form action="">
        <SubTitle>Email</SubTitle>
        <InputEmail type="text" placeholder="Your email" />
        <ButtonResetPassword type="submit">Reset</ButtonResetPassword>
      </form>
    </StyledFormResetPassword>
  );
};
