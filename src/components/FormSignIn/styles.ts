import styled from "styled-components";
import { COLOR, Typography } from "ui";

export const StyledFormSignIn = styled.div`
  width: 100%;
`;
export const SubTitle = styled.div`
  ${Typography.S3};
  margin-bottom: 8px;
`;
export const InputEmail = styled.input`
  background-color: ${COLOR.GRAPHITE};
  width: 100%;
  ${Typography.S3};
  color: ${COLOR.SECONDARY};
  border-radius: 10px;
  border: none;
  padding: 16px 20px;
  font-weight: 500;
  margin-bottom: 24px;
`;
export const InputPassword = styled.input`
  background-color: ${COLOR.GRAPHITE};
  width: 100%;
  ${Typography.S3};
  color: ${COLOR.SECONDARY};
  border-radius: 10px;
  border: none;
  padding: 16px 20px;
  font-weight: 500;
  margin-bottom: 8px;
`;
export const ResetPassword = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;

  margin-bottom: 40px;
`;
export const ButtonSignIn = styled.button`
  width: 100%;
  border-radius: 10px;
  border: none;
  background-color: ${COLOR.PRIMARY};
  padding: 16px;
  ${Typography.S3};
`;
export const ResetPasswordText = styled.div`
  color: ${COLOR.SECONDARY};
`;
export const ErrorMessage = styled.span`
  color: ${COLOR.ERROR};
  ${Typography.S3};
`;
