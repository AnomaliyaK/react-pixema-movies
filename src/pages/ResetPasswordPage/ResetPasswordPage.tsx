import { FormResetPassword } from "components";
import { StyledResetPasswordPage, Title } from "./styles";

export const ResetPasswordPage = () => {
  return (
    <StyledResetPasswordPage>
      <Title>Reset password</Title>
      <FormResetPassword />
    </StyledResetPasswordPage>
  );
};
