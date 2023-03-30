import { CustomLink, FormSignIn } from "components";
import { ROUTE } from "router";
import { LinkSignUp, StyledSignInPage, TextLink, Title } from "./styles";

export const SignInPage = () => {
  return (
    <StyledSignInPage>
      <Title>Sign In</Title>
      <FormSignIn />
      <TextLink>
        Don't have an account?
        <CustomLink to={ROUTE.SIGN_UP}>
          <LinkSignUp>Sign Up</LinkSignUp>
        </CustomLink>
      </TextLink>
    </StyledSignInPage>
  );
};
