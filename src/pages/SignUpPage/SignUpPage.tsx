import { LinkSignIn, LinkSignUp, StyledSignUpPage, TextLink, Title } from "./styles";
import { CustomLink, FormSignUp } from "components";
import { ROUTE } from "router";

export const SignUpPage = () => {
  return (
    <StyledSignUpPage>
      <Title>Sign UP</Title>
      <FormSignUp />
      <TextLink>
        Already have an account?
        <LinkSignUp to={"../"}>
          <LinkSignIn> Sign In</LinkSignIn>
        </LinkSignUp>
      </TextLink>
    </StyledSignUpPage>
  );
};
