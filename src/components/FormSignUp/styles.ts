import styled from "styled-components";
import { COLOR, Typography } from "ui";

export const StyledFormSignUp = styled.div`
  width: 100%;
`;
export const SubTitle = styled.div`
  margin-bottom: 8px;
  ${Typography.S3};
`;
export const Input = styled.input`
  width: 100%;
  padding: 16px 20px;
  margin-bottom: 24px;
  ${Typography.S3};
  font-weight: 500;
  color: ${COLOR.SECONDARY};
  background-color: ${COLOR.GRAPHITE};
  border-radius: 10px;
  border: none;
`;
export const InputConfirmPassword = styled.input`
  width: 100%;
  padding: 16px 20px;
  margin-bottom: 40px;
  ${Typography.S3};
  font-weight: 500;
  color: ${COLOR.SECONDARY};
  background-color: ${COLOR.GRAPHITE};
  border-radius: 10px;
  border: none;
`;
export const ButtonSubmit = styled.button`
  width: 100%;
  padding: 16px;
  ${Typography.S3};
  background-color: ${COLOR.PRIMARY};
  border-radius: 10px;
  border: none;
`;
export const ErrorMessage = styled.p`
  color: ${COLOR.ERROR};
  ${Typography.S3};
`;
