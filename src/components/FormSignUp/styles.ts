import styled from "styled-components";
import { COLOR, Typography } from "ui";

export const StyledFormSignUp = styled.div`
  width: 100%;
`;
export const SubTitle = styled.div`
  ${Typography.S3};
  margin-bottom: 8px;
`;
export const Input = styled.input`
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
export const InputConfirmPassword = styled.input`
  background-color: ${COLOR.GRAPHITE};
  width: 100%;
  ${Typography.S3};
  color: ${COLOR.SECONDARY};
  border-radius: 10px;
  border: none;
  padding: 16px 20px;
  font-weight: 500;
  margin-bottom: 40px;
`;
export const ButtonSubmit = styled.button`
  width: 100%;
  border-radius: 10px;
  border: none;
  background-color: ${COLOR.PRIMARY};
  padding: 16px;
  ${Typography.S3};
`;
