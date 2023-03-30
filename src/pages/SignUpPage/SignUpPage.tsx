import { LinkSignIn, StyledSignUpPage, TextLink, Title } from "./styles";
import { CustomLink, FormSignUp } from "components";
import { ROUTE } from "router";

export const SignUpPage = () => {
  return (
    <StyledSignUpPage>
      <Title>Sign UP</Title>
      <FormSignUp />
      <TextLink>
        Already have an account?
        <CustomLink to={ROUTE.SIGN_IN}>
          <LinkSignIn>Sign In</LinkSignIn>
        </CustomLink>
      </TextLink>
    </StyledSignUpPage>
  );
};
