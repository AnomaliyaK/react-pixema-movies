import { LinkSignIn, LinkSignUp, StyledSignUpPage, TextLink, Title } from "./styles";
import { FormSignUp } from "components";

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
